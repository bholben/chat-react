import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheapRouter from './CheapRouter';

class App extends Component {
  constructor(props) {
    super(props);
    this.user = { name: 'Anonymous' };
  }
  render() {
    return (
      <div>
        <div className="header">
          <img src={logo} className="header-logo" alt="logo" />
          <span className="header-text">React Firebase Chat App</span>
        </div>
        <CheapRouter user={this.user}></CheapRouter>
      </div>
    );
  }
}

export default App;
