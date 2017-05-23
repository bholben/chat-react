import React, { Component } from 'react';
import ChatRoom from './components/ChatRoom';

class CheapRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'CHAT_ROOM',
    };
  }

  render(props) {
    if (this.state.page === 'CHAT_ROOM') {
      return <ChatRoom />;
    }
  }
}

export default CheapRouter;
