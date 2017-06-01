import React from 'react';

function getStyle(backgroundColor) {
  return {
    width: 60,
    height: 18,
    padding: '2px 6px',
    borderRadius: 2,
    backgroundColor,
    color: 'white',
    fontSize: '0.9em',
    fontWeight: 700,
    textAlign: 'center',
  };
}

function Label(props) {
  return (
    <div style={getStyle(props.color)}>{props.text}</div>
  );
}

export default Label;
