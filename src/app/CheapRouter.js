import React, { Component } from 'react';
import Chat from '../components/Chat';

class CheapRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'CHAT_ROOM',
    };
  }

  render(props) {
    if (this.state.page === 'CHAT_ROOM') {
      return <Chat />;
    }
  }
}

export default CheapRouter;
