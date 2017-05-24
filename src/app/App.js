import React, { Component } from 'react';
import Header from '../components/Header';
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
