import React, { Component } from 'react';
import { api, firebase } from 'chat-api';
import { hasEnter } from '../utils/strings';
import ChatRooms from '../components/ChatRooms';
import ChatRoom from '../node_modules/chat-room-component/ChatRoom';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      messages: [],  // TODO: Replace this with activeSession
      sessions: [],
      activeSession: {},
      displayName: 'Bob',  // TODO: Tie this to the agent's name
      messageText: '',
    };
    this.activateSession = this.activateSession.bind(this);
    this.changeMessageText = this.changeMessageText.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  componentDidMount() {
    firebase.auth().signInAnonymously()
      .then(user => {
        // This is where we can spoof to get into another conversation
        // user = {
        //   uid: 'jc4JByFVHhhamVCDbQg2hj4mzEz2',
        //   isAnonymous: true,
        // }

        api.syncChatSessions(user, sessions => {
          this.setState({ sessions });
        });

        // TODO: Get rid of this???
        api.syncMessages(user, messages => {
          this.setState({ user, messages });
        });
      });
  }

  activateSession(key) {
    const sessions = this.state.sessions.map(session => {
      session.isActive = session.key === key;
      this.setState({ activeSession: session });
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
    const message = {
      displayName: this.state.displayName,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      text: this.state.messageText
    };
    this.enableOtherUserSpoof(message);
    e.preventDefault();

    api.sendMessage(message, this.state.user)
      .then(() => this.setState({ messageText: '' }))
      .catch(console.error);
  }

  deleteMessage(message) {
    api.deleteMessage(message, this.state.user)
      .catch(console.error);
  }

  enableOtherUserSpoof(message) {
    if (this.state.messageText.startsWith('//')) {
      message.text = message.text.substring(2).trim();
      message.displayName = 'Addison';
      message.isAgent = true;
    }
  }

  render() {
    return (
      <div style={{display: 'flex', height: '100vh'}}>
        <ChatRooms sessions={this.state.sessions}
            activateSession={this.activateSession} />
        <div style={{flex: 2, minWidth: 320, overflowY: 'auto'}}>
          <ChatRoom isAgentOnRight={true}
              user={this.state.user}
              displayName={this.state.displayName}
              messageText={this.state.messageText}
              messages={this.state.messages}
              changeMessageText={this.changeMessageText}
              sendMessage={this.sendMessage}
              isDeleteEnabled = {true}
              deleteMessage={this.deleteMessage} />
        </div>
      </div>
    );
  }
}

export default Chat;
