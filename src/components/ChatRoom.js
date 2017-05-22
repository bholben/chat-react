import React, { Component } from 'react';
import * as firebase from 'firebase';
import * as moment from 'moment';
import Messages from './Messages';
import MessageInput from './MessageInput';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messages: [],
    };
    this.changeMessageState = this.changeMessageState.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    firebase.database()
      .ref('messages/')
      .orderByKey()
      // .limitToLast(20)
      .on('value', snap => {
        this.setState({ messages : snap.val() || [] });
      });
  }

  changeMessageState(e) {
    this.setState({ message: e.target.value });
  }

  sendMessage(e) {
    const message = {
      id: this.state.messages.length,
      name: this.props.user.name,
      dateTime: moment().format(),
      text: this.state.message
    };
    e.preventDefault();
    message.text && firebase.database()
      .ref(`messages/${message.id}`)
      .set(message);
    this.setState({ message: '' });
  }

  render() {
    return (
      <div>
        <Messages messages={this.state.messages} />
        <MessageInput
          sendMessage={this.sendMessage}
          changeMessageState={this.changeMessageState}
          message={this.state.message} />
      </div>
    );
  }
}

export default ChatRoom;
