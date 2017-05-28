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
      sessions: [],
      activeSession: {},
      displayName: 'Bob',  // TODO: Use user.displayName once auth hooked up
      messageText: '',
    };
    this.changeSession = this.changeSession.bind(this);
    this.changeMessageText = this.changeMessageText.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  componentWillMount() {
    firebase.auth().signInAnonymously()
      .then(user => {
        // This is where we can spoof to get into another conversation
        // user = {
        //   uid: 'jc4JByFVHhhamVCDbQg2hj4mzEz2',
        //   isAnonymous: true,
        // }

        api.syncChatSessions(user, sessions => {
          const activeSession = sessions[0];
          activeSession.isActive = true;
          this.setState({ user, sessions, activeSession });
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
    const message = {
      displayName: this.state.displayName,  // TODO: Remove this once we have auth
      user: {
        displayName: this.state.displayName,
        uid: this.state.user.uid,
      },
      text: this.state.messageText
    };
    this.enableOtherUserSpoof(message);
    e.preventDefault();

    api.sendMessage(message, this.state.user, this.state.activeSession.key)
      .then(() => this.setState({ messageText: '' }))
      .catch(console.error);
  }

  deleteMessage(message) {
    api.deleteMessage(message, this.state.user)
      .catch(console.error);
  }

  enableOtherUserSpoof(message) {
    // TODO: Remove this
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
            changeSession={this.changeSession} />
        <div style={{flex: 2, minWidth: 320, overflowY: 'auto'}}>
          <ChatRoom isAgentOnRight={true}
              user={this.state.user}
              displayName={this.state.displayName}  // TODO: Remove this
              messageText={this.state.messageText}
              messages={this.state.activeSession.messages}
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
