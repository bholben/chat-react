import React, { Component } from 'react';
import Chat from '../components/Chat';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      displayName: 'Anonymous',
      messageText: '',
      messages: [],
    };
  }

  render() {
    return (
      <Chat user={this.state.user}
          displayName={this.state.displayName}
          messageText={this.state.messageText}
          messages={this.state.messages} />
    );
  }

}

export default ChatRoom;
