import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { isShortEmojiString } from '../utils/strings'
import Meta from './Meta';
import Avatar from './Avatar';

const ulStyle = {
  marginTop: 90,
  marginBottom: 40,
  padding: 0,
  overflowY: 'scroll',
}

const liBaseStyle = {
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

const liAgentStyle = Object.assign({}, liBaseStyle, {
  float: 'left',
  marginLeft: 45,
  backgroundColor: '#ddd',
  color: '#1e3f80',
  fontWeight: 400,
});

const bigEmojiStyle = {
  padding: 0,
  backgroundColor: 'none',
  fontSize: 48,
};

const xStyle = {
  display: 'none',
  position: 'absolute',
  top: -1,
  right: 7,
  color: 'rgba(255, 255, 255, 0.5)',
  fontSize: 24,
};

const getLiStyle = (message) => {
  const liStyle = message.isAgent ? liAgentStyle : liBaseStyle;

  if (isShortEmojiString(message.text, 6)) {
    return Object.assign({}, liStyle, bigEmojiStyle);
  } else {
    return liStyle;
  }
}

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReadOnly: true,
    };
    this.toggleDelete = this.toggleDelete.bind(this);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.scrollBottom);
    node.scrollIntoView({behavior: 'smooth'});
  }

  toggleDelete(e) {
    const li = e.target.tagName === 'LI' ? e.target : e.target.parentNode;
    const messageDiv = [...li.children].filter(child => child.tagName === 'DIV').reverse()[0];
    const button = [...li.children].find(child => child.tagName === 'BUTTON');

    li.style.maxWidth = this.state.isReadOnly ? '245px' : '220px';
    messageDiv.style.paddingRight = this.state.isReadOnly ? '32px' : '7px';
    button.style.display = this.state.isReadOnly ? 'block' : 'none';

    this.setState({isReadOnly: !this.state.isReadOnly});
  }

  render() {
    return (
      <ul style={ulStyle}>
        {this.props.messages.map(message =>
          <li key={message.timestamp}
              style={getLiStyle(message)}
              onClick={this.toggleDelete}>
            <Meta message={message}/>
            <Avatar message={message} />
            <div style={{padding: '0 7px'}}>{message.text}</div>
            <button style={xStyle} onClick={() => this.props.deleteMessage(message)}>&times;</button>
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
