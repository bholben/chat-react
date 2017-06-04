import React, { Component } from 'react';
import Remedy from './Remedy';
import * as theme from '../common/styles/theme-variables';

class Inventory extends Component {
    render() {
      return (
        <div style={{padding: '0 10px 10px', overflowY: 'auto', color: theme.colors.brand1}}>
          <Remedy />
          <Remedy />
          <Remedy />
        </div>
      );
    }
}

export default Inventory;
