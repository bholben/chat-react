import React from 'react';
import Vitals from '../common/Vitals';
import logo from './images/Header.logo.png';
import './styles/Header.animation.css';

const headerStyle = {
  width: 350,
  padding: '10px',
  borderRadius: 8,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const headerImageStyle = {
  height: 30,
  animation: 'logo-spin-animation infinite 8s linear'
};

function Header(props) {
  const { isAgent, vitals, user } = props;
  return (
    <header style={{margin: '0 auto', padding: 10, color: '#ddd'}}>
      <div style={headerStyle}>
        <div style={{textAlign: 'center'}}>
          <img src={logo} style={headerImageStyle} alt="logo" />
          <span style={{marginLeft: 15, fontSize: 18, textTransform: 'uppercase'}}>
            {props.isAgent ? props.user.displayName : 'Chat Room'}
          </span>
        </div>
        {isAgent ? <Vitals vitals={vitals} hasLabels={true} /> : null}
      </div>
    </header>
  );
}

export default Header;
