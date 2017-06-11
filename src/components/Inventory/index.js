import React, { Component } from 'react';
import Remedy from './Remedy';
import * as theme from '../common/styles/theme-variables';

const inventoryStyle = {
  flex: 1,
  minWidth: 200,
  padding: '0 10px 10px',
  overflowY: 'auto',
  color: theme.colors.brand1,
};

class Inventory extends Component {
    render() {
      return (
        <div style={inventoryStyle}>
          <Remedy
              ticket={this.props.ticket}
              activeTicketBounds={this.props.activeTicketBounds}
              setDraggingStatus={this.props.setDraggingStatus}
              saveRemedyItem={this.props.saveRemedyItem} />
          <Remedy
              ticket={this.props.ticket}
              activeTicketBounds={this.props.activeTicketBounds}
              setDraggingStatus={this.props.setDraggingStatus}
              saveRemedyItem={this.props.saveRemedyItem} />
          <Remedy
              ticket={this.props.ticket}
              activeTicketBounds={this.props.activeTicketBounds}
              setDraggingStatus={this.props.setDraggingStatus}
              saveRemedyItem={this.props.saveRemedyItem} />
        </div>
      );
    }
}

export default Inventory;
