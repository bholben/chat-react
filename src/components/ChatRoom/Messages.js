import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import onClickOutside from 'react-onclickoutside'
import Message from './Message';

const messagesStyle = {
  flexGrow: 1,
  overflowY: 'auto',
  borderTop: '1px solid #bbb',
  borderBottom: '1px solid #bbb',
};

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = { showDeleteX: false };
    this.toggleDeleteX = this.toggleDeleteX.bind(this);
  }

  componentDidUpdate() {
    const node = ReactDOM.findDOMNode(this.bottomElement);
    if (node) node.scrollIntoView({behavior: 'smooth'});
  }

  toggleDeleteX(e) {
    if (e.target.tagName !== 'BUTTON') {
      this.setState({ showDeleteX: !this.state.showDeleteX });
    }
  }

  handleClickOutside() {
    // This magical method is part of the onClickOutside HOC
    this.setState({ showDeleteX: false });
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
              showDeleteX={this.state.showDeleteX}
              toggleDeleteX={this.toggleDeleteX}
              deleteMessage={deleteMessage} />
        )}
        {/* This dummy element is used only to facilitate bottom scrolling */}
        <div ref={el => this.bottomElement = el}></div>
      </section>
    );
  }
}

export default onClickOutside(Messages);
