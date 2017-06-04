import React, { Component } from 'react';

const itemStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 50,
  margin: '6px 3px',
  padding: '8px 8px 4px',
  backgroundColor: 'lightgreen',
  boxShadow: 'gray 1px 1px 5px',
  fontWeight: 700,
  textTransform: 'uppercase',
};

class RemedyItem extends Component {
    render() {
      return (
        <div style={itemStyle}>
          <div>Run</div>
        </div>
      );
    }
}

export default RemedyItem;
