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
              activeTicketBounds={this.props.activeTicketBounds}
              setDraggingStatus={this.props.setDraggingStatus} />
          <Remedy
              activeTicketBounds={this.props.activeTicketBounds}
              setDraggingStatus={this.props.setDraggingStatus} />
          <Remedy
              activeTicketBounds={this.props.activeTicketBounds}
              setDraggingStatus={this.props.setDraggingStatus} />
        </div>
      );
    }
}

export default Inventory;
