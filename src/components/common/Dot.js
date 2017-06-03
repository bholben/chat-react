import React from 'react';
import * as theme from './styles/theme-variables';

function Dot(props) {
  const dotStyle = {
    width: 18,
    height: 18,
    marginLeft: 5,
    borderRadius: '50%',
    border: `1px solid ${theme.colors.brand1}`,
    backgroundColor: props.color,
  };
  return <div style={dotStyle}></div>;
}

export default Dot;
