import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Meta from './Meta';
import Avatar from './Avatar';

const ulStyle = {
  marginTop: 90,
  marginBottom: 40,
  padding: 0,
  overflowY: 'scroll',
}

const liCustomerStyle = {
  position: 'relative',
  float: 'right',
  clear: 'both',
  maxWidth: 220,
  margin: '20px 15px 10px',
  padding: 10,
  borderRadius: 20,
  backgroundColor: '#1e3f80',
  listStyle: 'none',
  color: 'white',
  fontWeight: 100,
};

const liAgentStyle = Object.assign({}, liCustomerStyle, {
  float: 'left',
  marginLeft: 45,
  backgroundColor: '#ddd',
  color: '#1e3f80',
  fontWeight: 400,
});

class Messages extends Component {
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.scrollBottom);
    node.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    return (
      <ul style={ulStyle}>
        {this.props.messages.map(message =>
          <li key={message.timestamp}
              style={message.isAgent ? liAgentStyle : liCustomerStyle}>
            <Meta message={message}/>
            <Avatar message={message} />
            <div style={{padding: '0 7px'}}>{message.text}</div>
          </li>
        )}
        {/* This dummy element is used only to facilitate bottom scrolling */}
        <li ref={el => this.scrollBottom = el}
            style={{float:'left', clear: 'both'}}>
        </li>
      </ul>
    );
  }
}

export default Messages;
