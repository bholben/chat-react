import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheapRouter from './CheapRouter';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <img src={logo} className="header-logo" alt="logo" />
          <span className="header-text">React Firebase Chat App</span>
        </div>
        <CheapRouter />
      </div>
    );
  }
}

export default App;
