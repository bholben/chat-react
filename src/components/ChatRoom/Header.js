import React from 'react';
import Label from './Label';
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
  return (
    <header style={{margin: '0 auto', padding: 10, color: '#ddd'}}>
      <div style={headerStyle}>
        <div style={{textAlign: 'center'}}>
          <img src={logo} style={headerImageStyle} alt="logo" />
          <span style={{marginLeft: 15, fontSize: 18, textTransform: 'uppercase'}}>
            {props.isAgent ? props.user.displayName : 'Chat Room'}
          </span>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{flex: 1, width: 180, fontSize: '0.9em'}}>
            <div style={{display: 'flex', justifyContent: 'flex-end', margin: 5}}>
              <div style={{marginRight: 10}}>Assigned To</div>
              <Label text={'Addison'} color={'#1e3f80'} />
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', margin: 5}}>
              <div style={{marginRight: 10}}>Status</div>
              <Label text={'Open'} color={'#ddd'} />
            </div>
          </div>
          <div style={{flex: 1, width: 180, fontSize: '0.9em'}}>
            <div style={{display: 'flex', margin: 5}}>
              <Label text={'Critical'} color={'orange'} />
              <div style={{marginLeft: 10}}>Severity</div>
            </div>
            <div style={{display: 'flex', margin: 5}}>
              <Label text={'Silver'} color={'silver'} />
              <div style={{marginLeft: 10}}>Loyalty</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
