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
  cursor: 'pointer',
};

function clickItem(e, props) {
  props.clickUserMenuItem(e.target.dataset.id);
}

function Menu(props) {
  return (
    <div style={menuStyle}>
      {props.userMenuItems.map(item => {
        return (
          <MenuItem
              key={item.id}
              item={item}
              clickUserMenuItem={props.clickUserMenuItem} />
        );
      })}
    </div>
  );
}

function MenuItem(props) {
  return (
    <div style={menuItemStyle}
        data-id={props.item.id}
        onClick={e => clickItem(e, props)}>
      {props.item.text}
    </div>
  );
}

export default Menu;
