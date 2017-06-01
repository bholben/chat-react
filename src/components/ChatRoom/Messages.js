import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

const messagesStyle = {
  flexGrow: 1,
  overflowY: 'auto',
  borderTop: '1px solid #bbb',
  borderBottom: '1px solid #bbb',
};

class Messages extends Component {
  componentDidUpdate() {
    const node = ReactDOM.findDOMNode(this.bottomElement);
    if (node) node.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    const { user, messages, isAgent, deleteMessage } = this.props;
    return !messages ? null : (
      <section style={messagesStyle}>
        {messages.map(message =>
          <Message
              key={message.timestamp}
              isAgent={isAgent}
              user={user}
              message={message}
              deleteMessage={deleteMessage} />
        )}
        {/* This dummy element is used only to facilitate bottom scrolling */}
        <div ref={el => this.bottomElement = el}></div>
      </section>
    );
  }
}

export default Messages;
