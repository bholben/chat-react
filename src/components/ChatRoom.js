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
      isAnonymous: true,
      uid: null,
      name: 'Anonymous',
      messageText: '',
      messages: [],
    };
    this.changeMessageState = this.changeMessageState.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  componentDidMount() {
    firebase.auth().signInAnonymously()
      .catch(console.error);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const {isAnonymous, uid} = user;
        const overrideUid = '';
        this.setState({isAnonymous, uid: overrideUid || uid});
        this.getMessages();
      } else {
        // User is signed out
      }
    });
  }

  getMessages() {
    firebase.database()
      .ref('users')
      .child(this.state.uid)
      .child('messages')
      .orderByKey()
      .limitToLast(100)
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
      name: this.state.name,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      text: this.state.messageText
    };
    this.enableAgentEasterEgg(message);
    e.preventDefault();
    message.text && firebase.database()
      .ref('users')
      .child(this.state.uid)
      .child('messages')
      .push(message)
      .catch(console.error);
    // Clear the input field
    this.setState({ messageText: '' });
  }

  deleteMessage(message) {
    firebase.database()
      .ref('users')
      .child(this.state.uid)
      .child('messages')
      .child(message.key)
      .remove()
      .catch(console.error);
  }

  enableAgentEasterEgg(message) {
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
