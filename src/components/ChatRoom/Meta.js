import React, { Component } from 'react';
import * as moment from 'moment';

const metaStyle = {
  margin: '0 10px',
  color: 'white',
  fontSize: '0.8em',
  cursor: 'pointer',
};

class Meta extends Component {
  constructor(props) {
    super(props);
    this.state = { isTimeFromNow: true };
    this.clickMeta = this.clickMeta.bind(this);
  }

  render() {
    const { user, message, isOnRight} = this.props;
    return isOnRight ? this.getRightMeta(message) : this.getLeftMeta(user, message);
  }

  getRightMeta(message) {
    return (
      <div style={metaStyle} onClick={this.clickMeta}>
        {this.getTime(message)}
      </div>
    );
  }

  getLeftMeta(user, message) {
    return (
      <div style={metaStyle} onClick={this.clickMeta}>
        <span style={{fontWeight: 700}}>{this.getName(user, message)}</span>
        <span> - {this.getTime(message)}</span>
      </div>
    );
  }

  getTime(message) {
    const time = moment(message.timestamp);
    return this.state.isTimeFromNow ? time.fromNow() : time.format('llll');
  }

  getName(user, message) {
    if (message.agent) {
      return message.agent.displayName || 'Anonymous Agent';
    } else {
      return user.displayName || 'Anonymous User';
    }
  }

  clickMeta() {
    this.setState({isTimeFromNow: !this.state.isTimeFromNow});
  }
}

export default Meta;
