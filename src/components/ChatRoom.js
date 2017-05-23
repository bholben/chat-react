import React, { Component } from 'react';
import * as firebase from 'firebase';
import { map } from 'lodash';
import { hasEnter } from '../utils/strings'
import Messages from './Messages';
import MessageInput from './MessageInput';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: '',
      messages: [],
    };
    this.changeMessageState = this.changeMessageState.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    // Read from firebase
    firebase.database()
      .ref('messages/')
      .on('value', snap => {
        // Use lodash map to:
        //     (1) convert snap.val() object into a messages array
        //     (2) pull the key down into the message object
        const messages = map(snap.val(), (message, key) => {
          message.key = key;
          return message;
        });
        this.setState({ messages });
      }, console.error);
  }

  changeMessageState(e) {
    const messageText = e.target.value;
    // Don't allow a return inside the textarea
    if (hasEnter(messageText)) {
      this.sendMessage(e)
    } else {
      this.setState({ messageText });
    }
  }

  sendMessage(e) {
    const message = {
      name: this.props.user.name,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      text: this.state.messageText
    };
    this.temporaryAgentHack(message);
    e.preventDefault();
    // Write to firebase
    message.text && firebase.database()
      .ref('messages')
      .push(message)
      .then(res => console.log('DB PUSH completed'));
    // Clear the input field
    this.setState({ messageText: '' });
  }

  deleteMessage(message) {
    firebase.database()
      .ref('messages')
      .child(message.key)
      .remove()
      .then(res => console.log('DB DELETE completed'));
  }

  temporaryAgentHack(message) {
    if (this.state.messageText.startsWith('//')) {
      message.text = message.text.substring(2).trim();
      message.name = 'Addison';
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
            changeMessageState={this.changeMessageState}
            messageText={this.state.messageText} />
      </div>
    );
  }
}

export default ChatRoom;
