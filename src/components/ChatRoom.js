import React, { Component } from 'react';
import * as firebase from 'firebase';
import { map } from 'lodash';
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
        // Use lodash map to convert messages object into an array
        const messages = map(snap.val(), x => x);
        this.setState({ messages });
      });
  }

  changeMessageState(e) {
    const messageText = e.target.value;
    const ENTER_CHARCODE = 10;
    // Don't allow a return inside the textarea
    if (messageText.charCodeAt(messageText.length - 1) === ENTER_CHARCODE) {
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
      .push(message);
    // Clear the input field
    this.setState({ messageText: '' });
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
        <Messages messages={this.state.messages} />
        <MessageInput
          sendMessage={this.sendMessage}
          changeMessageState={this.changeMessageState}
          messageText={this.state.messageText} />
      </div>
    );
  }
}

export default ChatRoom;
