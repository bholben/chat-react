import React from 'react';
import Avatar from './Avatar';
import 'font-awesome/css/font-awesome.css'

function getStyle(backgroundColor) {
  return {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 18,
    padding: '7px 20px 7px 7px',
    borderRadius: 2,
    backgroundColor,
    color: 'white',
    fontSize: '0.9em',
    fontWeight: 700,
  };
}

const iconStyle = {
  position: 'absolute',
  top: 7,
  right: 5,
  fontSize: '1.5em',
};

function onMouseOver(e) {
  const div = e.target.tagName === 'DIV' ? e.target : e.target.parentNode;
  div.style.fontSize = '0.95em';
}

function onMouseLeave(e) {
  const div = e.target.tagName === 'DIV' ? e.target : e.target.parentNode;
  div.style.fontSize = '0.9em';
}

function Tag(props) {
  const { text, color, user } = props;
  if (user) {
    return (
      <div style={getStyle(color)}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave} >
        <Avatar user={user} size={25} />
        <div style={{marginLeft: 5}}>{user.displayName}</div>
        <i className="fa fa-caret-down"
            style={iconStyle}
            aria-hidden="true">
        </i>
      </div>
    );
  } else {
    return (
      <div style={getStyle(color)}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave} >
        <div>{text}</div>
        <i className="fa fa-caret-down"
            style={iconStyle}
            aria-hidden="true">
        </i>
      </div>
    );
  }
}

export default Tag;
