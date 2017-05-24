import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.animation.css';

const headerStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: '20px 5px',
  backgroundColor: 'rgba(230, 230, 230, .95)',
  color: '#1e3f80',
  boxShadow: '0 1px 5px #bbb',
};

const headerImageStyle = {
  height: 40,
  marginRight: 5,
  animation: 'logo-spin-animation infinite 16s linear'
};

function Header(props) {
  return (
    <div style={headerStyle}>
      <img src={logo} style={headerImageStyle} alt="logo" />
      <span style={{textTransform: 'uppercase'}}>
        React Firebase Chat App
      </span>
    </div>
  );
}

export default Header;
