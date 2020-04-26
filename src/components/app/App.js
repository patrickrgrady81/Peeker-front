import React, { Component } from 'react';
import './App.css';
import Deck from './Deck.js';

// eslint-disable-next-line
// const deck = new Deck();

class App extends Component {

  
  render() { 
    return (
      <div>
        <h1>Welcome to Peeker</h1>
        <h2>A React Video Poker Trainer</h2>
        <Deck />
      </div>
    );
  }
}

export default App;
