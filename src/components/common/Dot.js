import React from 'react';

function Dot(props) {
  const dotStyle = {
    width: 18,
    height: 18,
    marginLeft: 5,
    borderRadius: '50%',
    border: '1px solid #1e3f80',
    backgroundColor: props.color,
  };
  return <div style={dotStyle}></div>;
}

export default Dot;
