import React, { Component } from 'react';
import * as firebase from 'firebase';
import * as moment from 'moment';
import Meta from './Meta';
import AgentAvatar from './AgentAvatar';
import './ChatRoom.css';

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
      .limitToLast(10)
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
      name: this.props.user.firstName,
      dateTime: moment().format(),
      text: this.state.message
    };
    e.preventDefault();
    firebase.database()
      .ref(`messages/${message.id}`)
      .set(message);
    this.setState({ message: '' });
  }

  render() {
    const messages = this.state.messages.map(message =>
      <li key={message.id} className={message.isAgent ? 'agent' : ''}>
        <div className="text-bubble">
          <Meta message={message}/>
          <AgentAvatar isAgent={message.isAgent} />
          {message.text}
        </div>
      </li>
    );

    return (
      <div>
        <div className="scroll">
          <ul>{messages}</ul>
        </div>
        <form onSubmit={e => this.sendMessage(e)}>
          <input
            type="text"
            placeholder="Message"
            value={this.state.message}
            onChange={this.changeMessageState} />
        </form>
      </div>
    );
  }
}

export default ChatRoom;
