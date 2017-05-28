import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatSession from './ChatSession';

const chatSessionsStyle = {
  marginTop: 80,
  padding: 0,
  overflowY: 'auto',
}

class ChatSessions extends Component {
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.bottomElement);
    node.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    return (
      <div style={chatSessionsStyle}>
        {this.props.sessions.map(session =>
          <ChatSession
              key={session.messages[0].timestamp}
              session={session}
              changeSession={this.props.changeSession}/>
        )}
        {/* This dummy element is used only to facilitate bottom scrolling */}
        <div ref={el => this.bottomElement = el}></div>
      </div>
    );
  }
}

export default ChatSessions;
