import React from 'react';
import * as theme from '../common/styles/theme-variables';

const menuStyle = {
  position: 'absolute',
  top: 60,
  right: 5,
  boxShadow: 'grey 2px 2px 5px',
};

const menuItemStyle = {
  width: 180,
  height: 45,
  padding: '0 10px',
  borderBottom: '1px solid #ddd',
  backgroundColor: '#f6f6f6',
  color: theme.colors.brand1,
  textAlign: 'left',
  lineHeight: 2.8,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

function Menu(props) {
  return (
    <div style={menuStyle}>
      {props.userMenuItems.map(item => <MenuItem item={item} />)}
    </div>
  );
}

function MenuItem(props) {
  return <div style={menuItemStyle}>{props.item.text}</div>;
}

export default Menu;
