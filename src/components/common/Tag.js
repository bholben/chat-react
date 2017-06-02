import React from 'react';
import Avatar from './Avatar';

function getStyle(backgroundColor) {
  return {
    display: 'flex',
    justifyContent: 'center',
    width: 140,
    height: 18,
    padding: '2px 6px',
    borderRadius: 2,
    backgroundColor,
    color: 'white',
    fontSize: '0.9em',
    fontWeight: 700,
  };
}

function Tag(props) {
  const { text, color, user } = props;
  if (user) {
    return (
      <div style={getStyle(color)}>
        <Avatar user={user} size={18} />
        <div style={{marginLeft: 5}}>{user.displayName}</div>
      </div>
    );
  } else {
    return <div style={getStyle(color)}>{text}</div>;
  }
}

export default Tag;
