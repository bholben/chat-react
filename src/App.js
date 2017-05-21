import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatRoom from './components/ChatRoom';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <ChatRoom />
      </div>
    );
  }
}

export default App;
