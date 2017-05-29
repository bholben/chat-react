import React from 'react';
import logo from './Header.logo.png';
import './Header.animation.css';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  height: 80,
  marginBottom: 3,
  paddingLeft: 10,
  backgroundColor: '#eee',
  color: '#1e3f80',
  boxShadow: '0 1px 5px #bbb',
};

const headerImageStyle = {
  height: 40,
  animation: 'logo-spin-animation infinite 10s linear'
};

function Header(props) {
  return (
    <header style={headerStyle}>
      <img src={logo} style={headerImageStyle} alt="logo" />
      <span style={{marginLeft: 10, textTransform: 'uppercase'}}>
        Chat Sessions
      </span>
    </header>
  );
}

export default Header;
