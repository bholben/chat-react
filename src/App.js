import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatRoom from './components/ChatRoom';

class App extends Component {
  constructor(props) {
    super(props);
    this.user = { firstName: 'Anonymous' };
  }
  render() {
    return (
      <div>
        <div className="header">
          <img src={logo} className="header-logo" alt="logo" />
          <span className="header-text">React Firebase Chat App</span>
        </div>
        <ChatRoom user={this.user}/>
      </div>
    );
  }
}

export default App;
