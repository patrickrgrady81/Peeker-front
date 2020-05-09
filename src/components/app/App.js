import React, { Component } from 'react';
import './App.css';
import '../deck/Deck.css';
import '../card/Card.css';
import '../table/Table.css';
import '../odds/Odds.css';
import '../payouts/Payouts.css';
import '../credits/Credits.css';
import '../currentHand/CurrentHand.css';
import '../bestPlays/BestPlays.css';
import Table from '../table/Table.js';
import Odds from '../odds/Odds.js';
import Payouts from '../payouts/Payouts.js';
import Credits from '../credits/Credits.js';
import CurrentHand from '../currentHand/CurrentHand.js';
import BestPlays from '../bestPlays/BestPlays.js';

// eslint-disable-next-line
// const deck = new Deck();

class App extends Component {

  
  render() { 
    return (
      <div>
        <h2 className="peeker">Peeker</h2>
        <div className="comWrapper">
          <Odds className="o"/>
          <Table className="t"/>
          <Payouts className="p" />
          <Credits className="c"/>
          <CurrentHand className="ch"/>
          <BestPlays className="bp"/>
        </div>
      </div>
    );
  }
}

export default App;
