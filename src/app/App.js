import React, { Component } from 'react';
import Header from '../components/Chat/Header';
import CheapRouter from './CheapRouter';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CheapRouter />
      </div>
    );
  }
}

export default App;
