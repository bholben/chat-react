import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ChatSession from './ChatSession';
import background from './images/ChatSessions.background.jpg';

const chatRoomsStyle = {
  flex: 5,
  minWidth: 300,
  maxWidth: 400,
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
};

class ChatSessions extends Component {
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.bottomElement);
    node.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    const { sessions, changeSession } = this.props;
    return (
      <div style={chatRoomsStyle}>
        <Header />
        <section style={{padding: 0, overflowY: 'auto'}}>
          {sessions.map(session =>
            <ChatSession
                key={session.messages[0].timestamp}
                session={session}
                changeSession={changeSession}
                changeVitalsItem={this.props.changeVitalsItem} />
          )}
          {/* This dummy element is used only to facilitate bottom scrolling */}
          <div ref={el => this.bottomElement = el}></div>
        </section>
      </div>
    );
  }
}

export default ChatSessions;
