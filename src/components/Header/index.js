import React, { Component } from 'react';
import Avatar from '../common/Avatar';
import Menu from '../common/Menu';
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

const leftMenuStyle = {
  padding: '5px 5px 5px 15px',
  fontSize: 28,
  cursor: 'pointer',
};

const centerTitleStyle = {
  display: 'flex',
  alignItems: 'center',
};

const headerImageStyle = {
  height: 40,
  animation: 'logo-spin-animation infinite 10s linear',
};

const titleStyle = {
  marginLeft: 10,
  fontSize: 24,
  textTransform: 'uppercase',
};

const rightMenuStyle = {
  position: 'relative',
};

const avatarStyle = {
  padding: '5px 15px 5px 5px',
  cursor: 'pointer',
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { showUserMenu: false };
    this.clickAvatar = this.clickAvatar.bind(this);
    this.clickUserMenuItem = this.clickUserMenuItem.bind(this);
  }

  clickAvatar(e) {
    this.setState({ showUserMenu: !this.state.showUserMenu });
  }

  clickUserMenuItem(id) {
    const selected = this.props.userMenuItems.find(item => item.id === id);
    if (selected.action) this.props[selected.action]();
    this.setState({ showUserMenu: false });
  }

  render() {
    return (
      <header style={headerStyle}>

        <div style={leftMenuStyle}>
          <i className="fa fa-bars"></i>
        </div>

        <div style={centerTitleStyle}>
          <img src={logo} style={headerImageStyle} alt="logo" />
          <span style={titleStyle}>Chat Support</span>
        </div>

        <div style={rightMenuStyle}>
          <div style={avatarStyle} onClick={this.clickAvatar}>
            <Avatar user={this.props.user} />
          </div>
          {this.state.showUserMenu ?
          <Menu
              userMenuItems={this.props.userMenuItems}
              clickUserMenuItem={this.clickUserMenuItem} />
          : null}
        </div>

      </header>
    );
  }
}

export default Header;
