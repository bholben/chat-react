import React, { Component } from 'react';
import Avatar from '../common/Avatar';
import Meta from './Meta';
import * as styles from './styles/Message.styles';

class Message extends Component {
  render() {
    const { isAgent, message } = this.props;
    const isOnRight = (isAgent && message.agent) || (!isAgent && !message.agent);
    return isOnRight ? this.getRightMessage() : this.getLeftMessage();
  }

  getRightMessage() {
    const { isAgent, user, message, showDeleteX, deleteMessage } = this.props;
    return (
      <div key={message.timestamp} style={styles.rightMessage}>
        <div style={styles.rightColumn}>
          <Meta user={user} message={message} showName={isAgent} />
          <div style={styles.getBubbleStyle(styles.rightBubble, message, showDeleteX)}
              className="bubble"
              onClick={this.props.toggleDeleteX}>
            {message.text}
            <button style={styles.getXButtonStyle(showDeleteX)} onClick={() => deleteMessage(message)}>
              &times;
            </button>
          </div>
        </div>
        {isAgent ?
        <div style={{padding: '0 15px 5px 0'}}>
          <Avatar user={message.agent} size={30} />
        </div>
        : null}
      </div>
    );
  }

  getLeftMessage() {
    const { isAgent, user, message, showDeleteX, deleteMessage } = this.props;
    return (
      <div key={message.timestamp} style={styles.leftMessage}>
        <div style={{padding: '0 0 5px 15px'}}>
          <Avatar user={isAgent ? user : message.agent} size={30} />
        </div>
        <div style={styles.leftColumn}>
          <Meta user={user} message={message} showName={true} />
          <div style={styles.getBubbleStyle(styles.leftBubble, message, showDeleteX)}
              className="bubble"
              onClick={this.props.toggleDeleteX}>
            {message.text}
            <button style={styles.getXButtonStyle(showDeleteX)} onClick={() => deleteMessage(message)}>
              &times;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
