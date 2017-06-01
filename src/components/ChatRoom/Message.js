import React, { Component } from 'react';
import Avatar from '../common/Avatar';
import Meta from './Meta';
import * as styles from './styles/Message.styles';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { hideX: true };
    this.toggleDelete = this.toggleDelete.bind(this);
  }

  toggleDelete(e) {
    if (!this.props.isAgent) return;

    const bubble = e.target;
    bubble.style.paddingRight = this.state.hideX ? '40px' : '15px';
    const button = bubble.children[0];
    if (button) button.style.display = this.state.hideX ? 'block' : 'none';

    this.setState({hideX: !this.state.hideX});
  }

  render() {
    const { isAgent, message } = this.props;
    const isOnRight = (isAgent && message.agent) || (!isAgent && !message.agent);
    return isOnRight ? this.getRightMessage() : this.getLeftMessage();
  }

  getRightMessage() {
    const { user, message, deleteMessage } = this.props;
    return (
      <div key={message.timestamp} style={styles.rightMessage}>
        <div style={styles.rightColumn}>
          <Meta user={user} message={message} isOnRight={true} />
          <div style={styles.getBubbleStyle(styles.rightBubble, message)}
              onClick={this.toggleDelete}>
            {message.text}
            <button style={styles.x} onClick={() => deleteMessage(message)}>
              &times;
            </button>
          </div>
        </div>
      </div>
    );
  }

  getLeftMessage() {
    const { isAgent, user, message, deleteMessage } = this.props;
    return (
      <div key={message.timestamp} style={styles.leftMessage}>
        <div style={{padding: '0 0 5px 15px'}}>
          <Avatar user={isAgent ? user : message.agent} size={30} />
        </div>
        <div style={styles.leftColumn}>
          <Meta user={user} message={message} isOnRight={false} />
          <div style={styles.getBubbleStyle(styles.leftBubble, message)}
              onClick={this.toggleDelete}>
            {message.text}
            <button style={styles.x} onClick={() => deleteMessage(message)}>
              &times;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
