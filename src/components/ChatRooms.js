import React, { Component } from 'react';
import Header from './Header';
import ChatSessions from './ChatSessions';

const chatRoomsStyle = {
  flex: 1,
  minWidth: 320,
  overflowY: 'auto',
  borderRight: '1px solid #ddd',
};

class ChatRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={chatRoomsStyle}>
        <Header />
        <ChatSessions sessions={this.props.sessions}
            changeSession={this.props.changeSession}/>
      </div>
    );
  }
}

export default ChatRooms;
