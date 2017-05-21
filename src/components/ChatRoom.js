import React, { Component } from 'react';
import * as firebase from 'firebase';
import './ChatRoom.css';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messages: [],
    };
    this.changeMessage = this.changeMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    firebase.database().ref('messages/').on('value', snap => {
      this.setState({ messages : snap.val() || [] });
    });
  }

  changeMessage(e) {
    this.setState({ message: e.target.value });
  }

  submitMessage() {
    const message = {
      id: this.state.messages.length,
      text: this.state.message
    };
    firebase.database().ref(`messages/${message.id}`).set(message);
  }

  render() {
    const messages = this.state.messages.map(message =>
      <li key={message.id}>
        {message.text}
      </li>
    );

    return (
      <div>
        <ol>{messages}</ol>
        <input
          type="text"
          placeholder="Message"
          onChange={this.changeMessage} />
        <button onClick={this.submitMessage}>
          Submit Message
        </button>
      </div>
    );
  }
}

export default ChatRoom;
