import React, { Component } from 'react'
import Deck from '../deck/Deck.js';



export default class Table extends Component { 

  render() {
    return (
      <div className="table">
        <h1>I am a Table</h1>
        <Deck />
      </div>
    )
   }
}