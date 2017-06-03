import React, { Component } from 'react';
import { some } from 'lodash';
import md5 from 'md5';
import { api } from 'chat-api';
import { isAgent } from '../config';
import Welcome from '../components/Welcome';
import background from '../components/common/images/Welcome.background.jpg';
import Tickets from '../components/Tickets';
import ChatRoom from '../components/ChatRoom';

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

const vitals = {
  assignee: {
    id: '',
    name: 'Unassigned',
    color: 'white',
    email: '',
  },
  status: {
    id: 'inQueue',
    name: 'In Queue',
    color: 'red',
  },
  severity: {
    id: 'unknown',
    name: 'Unknown',
    color: 'white',
  },
  loyalty: {
    id: 'base',
    name: 'Base',
    color: 'white',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      tickets: [],
      activeTicket: {},
      messageText: '',
    };
    this.submitSignIn = this.submitSignIn.bind(this);
    this.changeTicket = this.changeTicket.bind(this);
    this.changeMessageText = this.changeMessageText.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.changeVitalsItem = this.changeVitalsItem.bind(this);
  }

  submitSignIn(e) {
    e.preventDefault();
    const displayName = e.target.children.displayName.value;
    // TODO: Replace this fabricated email with the incoming email address
    const email = `${displayName}@gmail.com`;

    return api.auth.signInWithEmail(email, user => {
      return api.syncTickets(user, tickets => {

        // Temp for now...
        tickets = tickets.map(ticket => {
          ticket.vitals = vitals;
          return ticket;
        });

        const activeTicket = tickets[0];
        activeTicket.isActive = true;
        return user.updateProfile({ displayName })
          .then(() => {
            this.setState({ user, tickets, activeTicket });
            localStorage.setItem('user', JSON.stringify({
              uid: user.uid,
              displayName: user.displayName,
            }));
          })
          .catch(console.error);
      });
    });
  }

  changeTicket(key) {
    const tickets = this.state.tickets.map(ticket => {
      ticket.isActive = ticket.key === key;
      if (ticket.isActive) this.setState({ activeTicket: ticket });
      return ticket;
    });

    this.setState({ tickets });
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
    const { displayName, email, uid } = this.state.user;
    const user = { displayName, email, uid };
    const message = { text: this.state.messageText, agent: user };

    this.enableOtherUserSpoof(message, user);
    e.preventDefault();

    api.postMessage(message, user, this.state.activeTicket.key)
      .then(() => this.setState({ messageText: '' }))
      .catch(console.error);
  }

  deleteMessage(message) {
    api.deleteMessage(message, this.state.user, this.state.activeTicket.key)
      .catch(console.error);
  }

  changeVitalsItem(key, selected) {
    console.log({key, selected});

    // Temp for now...
    vitals[key] = selected;
    const tickets = this.state.tickets.map(ticket => {
      ticket.vitals = vitals;
      return ticket;
    });
    this.setState({ tickets });
    return Promise.resolve();
  }

  enableOtherUserSpoof(message) {
    // TODO: Remove this
    if (this.state.messageText.startsWith('//')) {
      message.text = message.text.substring(2).trim();
      message.agent = null;
    }
  }

  render() {
    return this.state.user.email ? this.getChat() : this.getWelcome();
  }

  getWelcome() {
    return (
      <div style={welcomeStyle}>
        <Welcome submitSignIn={this.submitSignIn} />
      </div>
    );
  }

  getChat() {
    return (
      <div style={{display: 'flex', height: '100vh'}}>
        {isAgent ?
        <Tickets
            tickets={this.state.tickets}
            changeTicket={this.changeTicket}
            changeVitalsItem={this.changeVitalsItem} /> :
        null}
        <ChatRoom
            isAgent={isAgent}
            user={this.state.activeTicket.user}
            ticket={this.state.activeTicket}
            messageText={this.state.messageText}
            changeMessageText={this.changeMessageText}
            sendMessage={this.sendMessage}
            deleteMessage={this.deleteMessage} />
      </div>
    );
  }
}

export default App;
