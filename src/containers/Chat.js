import React, { Component } from 'react';
import { api } from 'chat-api';
import { isAgent } from '../config';
import { hasEnter } from '../utils/strings';
import Welcome from '../components/Welcome';
import background from '../components/common/images/Welcome.background.jpg';
import ChatSessions from '../components/ChatSessions';
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
  agent: {
    name: 'Addison',
    color: '#1e3f80',
  },
  status: {
    name: 'Open',
    color: '#ddd',
  },
  severity: {
    name: 'Critical',
    color: 'orange',
  },
  loyalty: {
    name: 'Silver',
    color: 'silver',
  },
};

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      sessions: [],
      activeSession: {},
      messageText: '',
    };
    this.submitSignIn = this.submitSignIn.bind(this);
    this.changeSession = this.changeSession.bind(this);
    this.changeMessageText = this.changeMessageText.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  submitSignIn(e) {
    e.preventDefault();
    const displayName = e.target.children.displayName.value;
    // TODO: Replace this fabricated email with the incoming email address
    const email = `${displayName}@gmail.com`;

    return api.auth.signInWithEmail(email, user => {
      return api.syncChatSessions(user, sessions => {

        // Temp for now...
        sessions = sessions.map(session => {
          session.vitals = vitals;
          return session;
        });

        const activeSession = sessions[0];
        activeSession.isActive = true;
        return user.updateProfile({ displayName })
          .then(() => this.setState({ user, sessions, activeSession }))
          .catch(console.error);
      });
    });
  }

  changeSession(key) {
    const sessions = this.state.sessions.map(session => {
      session.isActive = session.key === key;
      if (session.isActive) this.setState({ activeSession: session });
      return session;
    });

    this.setState({ sessions });
  }

  changeMessageText(e) {
    const messageText = e.target.value;
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

    api.postMessage(message, user, this.state.activeSession.key)
      .then(() => this.setState({ messageText: '' }))
      .catch(console.error);
  }

  deleteMessage(message) {
    api.deleteMessage(message, this.state.user, this.state.activeSession.key)
      .catch(console.error);
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
        <ChatSessions
            sessions={this.state.sessions}
            changeSession={this.changeSession} />
        <ChatRoom
            isAgent={isAgent}
            user={this.state.activeSession.user}
            session={this.state.activeSession}
            messageText={this.state.messageText}
            changeMessageText={this.changeMessageText}
            sendMessage={this.sendMessage}
            deleteMessage={this.deleteMessage} />
      </div>
    );
  }
}

export default Chat;
