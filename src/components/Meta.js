import React, { Component } from 'react';
import * as moment from 'moment';

const metaStyle = {
  position: 'absolute',
  top: -20,
  right: 10,
  width: 300,
  textAlign: 'right',
  color: 'gray',
  fontSize: 13
};

const agentMetaStyle = Object.assign({}, metaStyle, {
  left: 10,
  textAlign: 'left'
});

class Meta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRelativeTime: true,
    }
    this.clickMeta = this.clickMeta.bind(this);
  }

  render() {
    return this.props.message.isAgent ? this.getAgentMeta() : this.getCustomerMeta();
  }

  getAgentMeta() {
    return (
      <div style={agentMetaStyle} onClick={this.clickMeta}>
        <span style={{fontWeight: 700}}>{this.props.message.displayName}</span>
        <span> - {this.getTimeLabel()}</span>
      </div>
    );
  }

  getCustomerMeta() {
    return (
      <div style={metaStyle} onClick={this.clickMeta}>
        {this.getTimeLabel()}
      </div>
    );
  }

  getTimeLabel() {
    const time = moment(this.props.message.timestamp);
    return this.state.isRelativeTime ? time.fromNow() : time.format('llll');
  }

  clickMeta() {
    this.setState({isRelativeTime: !this.state.isRelativeTime});
  }
}

export default Meta;
