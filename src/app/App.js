import React, { Component } from 'react';
import { times, some } from 'lodash';
import md5 from 'md5';
import { api } from 'chat-api';
import { isAgent } from '../config';
import Spinner from '../components/common/Spinner';
import Welcome from '../components/Welcome';
import background from '../components/common/images/Welcome.background.jpg';
import Header from '../components/Header';
import Tickets from '../components/Tickets';
import ChatRoom from '../components/ChatRoom';
import Remedies from '../components/Remedies';
import CreateRemedy from '../components/Remedies/CreateRemedy';
import '../components/common/styles/spinner.css';

const welcomeStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const colorMap = {
  status: {
    inQueue: 'red',
    inProgress: '#ddd',
    underReview: 'pink',
    closed: '#444',
  },
  severity: {
    critical: 'red',
    urgent: 'orange',
    trivial: 'lightblue',
    unknown: 'white',
  },
  loyalty: {
    gold: 'goldenrod',
    silver: 'silver',
    bronze: 'darkgoldenrod',
    base: 'white',
  },
  escalation: {
    managerInvolved: 'red',
    managerAlerted: 'orange',
    agent: 'lightyellow',
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      activeTicket: {},
      messageText: '',
      showSpinner: false,
    };

    this.submitSignIn = this.submitSignIn.bind(this);
    this.clickTicket = this.clickTicket.bind(this);
    this.changeVitalsItem = this.changeVitalsItem.bind(this);
    this.changeMessageText = this.changeMessageText.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.setActiveTicketBounds = this.setActiveTicketBounds.bind(this);
    this.setDraggingStatus = this.setDraggingStatus.bind(this);
    this.addRemedyItemToInventory = this.addRemedyItemToInventory.bind(this);
    this.saveRemedyItemToTicket = this.saveRemedyItemToTicket.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (isAgent) {
      this.setState({ tickets: [] });
      this.setState({ activeTicketKey: '' });
      this.setState({ userConfig: {} });
      this.setState({ remedies: [] });
      this.setState({ activeTicketBounds: null });
      this.setState({ draggingStatus: { isDragging: false, isInTarget: false } });

      CreateRemedy();
    }
  }

  submitSignIn(e) {
    e.preventDefault();
    const displayName = e.target.children.displayName.value;
    // TODO: Replace this fabricated email with the incoming email address
    const email = `${displayName}@gmail.com`;

    this.setState({showSpinner: true});

    return api.auth.signInWithEmail(email, user => {
      if (isAgent) {
        this.syncTickets(user, displayName);
        this.syncUserConfig(user);
        this.syncRemedies();
      } else {
        this.syncMessages(user, displayName);
      }
    });
  }

  syncTickets(user, displayName) {
    return api.syncTickets(user, tickets => {
      tickets = tickets.map(this.setVitalColors);

      if (this.state.activeTicketKey) {
        tickets = tickets.map(ticket => {
          ticket.isActive = ticket.key === this.state.activeTicketKey;
          if (ticket.isActive) this.setState({ activeTicket: ticket });
          return ticket;
        });
      }

      return user.updateProfile({ displayName })
        .then(() => this.setState({ user, tickets }))
        .then(() => this.storeUserLocally(user))
        .then(() => this.setState({showSpinner: false}))
        .catch(console.error);
    });
  }

  syncUserConfig(user) {
    // return api.syncUserConfig(user, userConfig => {
    //   this.setState({ userConfig });
    // });

    // For now...
    const userMenuItems = [
      { id: 'videoTraining', text: 'Video Tutorial' },
      { id: 'admin', text: 'Admin Panel' },
      { id: 'theme', text: 'Theme' },
      { id: 'profile', text: 'Profile' },
      { id: 'logout', text: 'Log out', action: 'logout' },
    ];
    this.setState({ userConfig: {userMenuItems} })
  }

  syncRemedies() {
    return api.syncRemedies(remedies => {
      this.setState({ remedies });
    });
  }

  setVitalColors(ticket) {
    for (const key in ticket.vitals) {
      const vital = ticket.vitals[key];
      if (key === 'assignee') {
        vital.color = vital.email ? `#${md5(vital.email).substr(0, 6)}` : 'white';
      } else {
        vital.color = colorMap[key][vital.id];
      }
    };
    return ticket;
  }

  syncMessages(user, displayName) {
    return api.syncMessages(user, messages => {
      const activeTicket = { messages };
      return user.updateProfile({ displayName })
        .then(() => this.setState({ user, activeTicket }))
        .then(() => this.storeUserLocally(user))
        .catch(console.error);
    });
  }

  storeUserLocally(user) {
    localStorage.setItem('user', JSON.stringify({
      uid: user.uid,
      displayName: user.displayName,
    }));
  }

  clickTicket(key) {
    if (key === this.state.activeTicketKey) {
      key = '';
      this.setState({ activeTicket: {}, activeTicketKey: '' });
    }

    const tickets = this.state.tickets.map(ticket => {
      ticket.isActive = ticket.key === key;
      if (ticket.isActive) {
        this.setState({ activeTicket: ticket, activeTicketKey: key });
      }
      return ticket;
    });

    this.setState({ tickets });
  }

  changeVitalsItem(key, selected, ticketId) {
    // Return promise to DropDown (options box needs to close after db updated)
    return api.changeVitalsItem(key, selected, ticketId);
  }

  changeMessageText(e) {
    const messageText = e.target.value;
    const isEnter = char => char.charCodeAt(0) === 10;
    const hasEnter = str => some(str, isEnter);

    if (hasEnter(messageText)) {
      this.sendMessage(e);
    } else {
      this.setState({ messageText });
    }
  }

  sendMessage(e) {
    e.preventDefault();
    const ticketId = this.state.activeTicket.key;
    const isFirstMessage = !this.state.activeTicket.messages.length;
    const { displayName, email, uid } = this.state.user;
    const user = { displayName, email, uid };
    const message = { text: this.state.messageText };
    if (isAgent) message.agent = user;

    this.enableOtherUserSpoof(message, user);

    api.pushMessage(message, user, ticketId)
      .then(() => this.setState({ messageText: '' }))
      .then(() => {
        return Promise.all([
          new Promise(initVitals),
          new Promise(autoAssignAgent.bind(this)),
        ]);
      })
      .catch(console.error);

    function initVitals() {
      if (!isAgent && isFirstMessage) {
        return api.setVitals(user.uid);
      } else {
        return Promise.resolve();
      }
    }

    function autoAssignAgent() {
      if (isAgent) {
        const agent = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
        }
        return this.changeVitalsItem('assignee', agent, ticketId);
      } else {
        return Promise.resolve();
      }
    }
  }

  deleteMessage(message) {
    api.deleteMessage(message, this.state.user, this.state.activeTicket.key)
      .catch(console.error);
  }

  setActiveTicketBounds(activeTicketBounds) {
    this.setState({ activeTicketBounds });
  }

  setDraggingStatus(draggingStatus) {
    this.setState({ draggingStatus });
  }

  addRemedyItemToInventory(remedyId, count = 1) {
    times(count, () => api.pushRemedyItem(remedyId));
  }

  saveRemedyItemToTicket(ticket, remedy, remedyItem) {
    const shortRemedy = {
      itemTitle: remedy.itemTitle,
      itemImageUrl: remedy.itemImageUrl,
    };
    api.consumeRemedyInventory(remedy.key, remedyItem.key)
      .then(() => api.applyRemedyToTicket(ticket, shortRemedy))
      .catch(console.error);
  }

  logout() {
    this.setState({ user: {} });
  }

  enableOtherUserSpoof(message, user) {
    // TODO: Remove this
    if (this.state.messageText.startsWith('//')) {
      message.text = message.text.substring(2).trim();
      if (isAgent) {
        message.agent = null;
      } else {
        message.agent = {
          uid: user.uid,
          displayName: 'Spoofed Agent',
          email: user.email,
        };
      }
    }
  }

  render() {
    // Hacky approach until router implemented
    return this.state.user.email ? this.getChat() : this.getWelcome();
  }

  getWelcome() {
    return (
      <div>
        {this.state.showSpinner ? <Spinner /> : null}
        <div style={welcomeStyle}>
          <Welcome submitSignIn={this.submitSignIn} />
        </div>
      </div>
    );
  }

  getChat() {
    return (
      <div style={{width: '100vw', height: '100vh'}}>

        {isAgent ?
        <Header
            user={this.state.user}
            userMenuItems={this.state.userConfig.userMenuItems}
            logout={this.logout} />
        : null}

        <div style={{display: 'flex', height: 'calc(100% - 80px)'}}>

          {isAgent ?
          <Tickets
              tickets={this.state.tickets}
              clickTicket={this.clickTicket}
              activeTicketKey={this.state.activeTicketKey}
              setActiveTicketBounds={this.setActiveTicketBounds}
              draggingStatus={this.state.draggingStatus}
              changeVitalsItem={this.changeVitalsItem} />
          : null}

          <ChatRoom
              isAgent={isAgent}
              user={this.state.activeTicket.user}
              ticket={this.state.activeTicket}
              messageText={this.state.messageText}
              changeMessageText={this.changeMessageText}
              sendMessage={this.sendMessage}
              deleteMessage={this.deleteMessage} />

          {isAgent ?
          <Remedies
              remedies={this.state.remedies}
              addRemedyItemToInventory={this.addRemedyItemToInventory}
              saveRemedyItemToTicket={this.saveRemedyItemToTicket}
              ticket={this.state.activeTicket}
              activeTicketBounds={this.state.activeTicketBounds}
              setDraggingStatus={this.setDraggingStatus} />
          : null}

        </div>

      </div>
    );
  }
}

export default App;
