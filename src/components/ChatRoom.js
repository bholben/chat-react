import React, { Component } from 'react';
import { api, firebase } from 'api';
import { hasEnter } from '../utils/strings';
import Messages from './Messages';
import MessageInput from './MessageInput';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      displayName: 'Anonymous',
      messageText: '',
      messages: [],
    };
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

        api.syncMessages(user, messages => {
          this.setState({ user, messages })
        });
      });
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
    this.enableAgentEasterEgg(message);
    e.preventDefault();

    api.sendMessage(message, this.state.user)
      .then(() => this.setState({ messageText: '' }))
      .catch(console.error);
  }

  deleteMessage(message) {
    api.deleteMessage(message, this.state.user)
      .catch(console.error);
  }

  enableAgentEasterEgg(message) {
    // This is how we create texts as the agent on the left side
    if (this.state.messageText.startsWith('//')) {
      message.text = message.text.substring(2).trim();
      message.displayName = 'Addison';
      message.isAgent = true;
    }
  }

  render() {
    return (
      <div>
        <Messages messages={this.state.messages}
            deleteMessage={this.deleteMessage}/>
        <MessageInput
            sendMessage={this.sendMessage}
            changeMessageText={this.changeMessageText}
            messageText={this.state.messageText} />
      </div>
    );
  }
}

export default ChatRoom;
