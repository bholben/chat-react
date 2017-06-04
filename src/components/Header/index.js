import React from 'react';
import Avatar from '../common/Avatar';
import * as theme from '../common/styles/theme-variables';
import logo from '../common/images/logo.png';
import './styles/Header.animation.css';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 80,
  backgroundColor: theme.colors.brand1,
  color: 'white',
};

const headerImageStyle = {
  height: 40,
  animation: 'logo-spin-animation infinite 10s linear'
};

const titleStyle = {
  marginLeft: 10,
  fontSize: 24,
  textTransform: 'uppercase',
};

function Header(props) {
  return (
    <header style={headerStyle}>

      <div style={{padding: '5px 5px 5px 15px', fontSize: 28, cursor: 'pointer'}}>
        <i className="fa fa-bars"></i>
      </div>

      <div style={{display: 'flex', alignItems: 'center'}}>
        <img src={logo} style={headerImageStyle} alt="logo" />
        <span style={titleStyle}>Chat Support</span>
      </div>

      <div style={{padding: '5px 15px 5px 5px', textAlign: 'right', cursor: 'pointer'}}>
        <Avatar user={props.user} />
      </div>

    </header>
  );
}

export default Header;
