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
        <h2 className="peeker">Peeker</h2>
        <Table />
      </div>
    );
  }
}

export default App;
