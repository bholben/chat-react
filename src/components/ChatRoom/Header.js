import React from 'react';
import logo from './images/Header.logo.png';
import './styles/Header.animation.css';

const headerStyle = {
  width: 350,
  padding: '10px',
  borderRadius: 8,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  textAlign: 'center',
};

const headerImageStyle = {
  height: 30,
  animation: 'logo-spin-animation infinite 8s linear'
};

const titleStyle = {
  marginLeft: 15,
  fontSize: 18,
  textTransform: 'uppercase',
};

function Header(props) {
  const { isAgent } = props;
  return !isAgent ? (
    <header style={{margin: '0 auto', padding: 10, color: '#ddd'}}>
      <div style={headerStyle}>
        <img src={logo} style={headerImageStyle} alt="logo" />
        <span style={titleStyle}>Chat Room</span>
      </div>
    </header>
  ) : null;
}

export default Header;
