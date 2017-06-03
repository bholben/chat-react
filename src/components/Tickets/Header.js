import React from 'react';
import logo from '../common/images/logo.png';
import './styles/Header.animation.css';

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 80,
  paddingLeft: 10,
  backgroundColor: '#1e3f80',
  color: 'white',
};

const headerImageStyle = {
  height: 40,
  animation: 'logo-spin-animation infinite 10s linear'
};

const titleStyle = {
  margin: '0 25px 0 10px',
  fontSize: '1.5em',
  textTransform: 'uppercase',
};

function Header(props) {
  return (
    <header style={headerStyle}>
      <img src={logo} style={headerImageStyle} alt="logo" />
      <span style={titleStyle}>Chat Sessions</span>
    </header>
  );
}

export default Header;