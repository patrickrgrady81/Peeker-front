import React, { Component } from 'react';
import './App.css';
import '../deck/Deck.css';
import '../card/Card.css';
import '../table/Table.css';
import Table from '../table/Table.js';

// eslint-disable-next-line
// const deck = new Deck();

class App extends Component {

  
  render() { 
    return (
      <div>
        <h1>Welcome to Peeker</h1>
        <h2>A React Video Poker Trainer</h2>
        <Table />
      </div>
    );
  }
}

export default App;
