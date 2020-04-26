import Card from "./Card";
import React, { Component } from 'react'


export default class Deck extends Component { 
  constructor() { 
    super();
    this.state = {};

    this.debug = true;
    this.cards = [];

    this.createDeck();
    this.shuffleDeck();
    if (this.debug) this.showDeck();
  }

  render() { 
    return (
      <ul>
      {this.cards.map((card, i) => {
        return <li key={i}><Card card={card}/></li>
      })}
      </ul>
    );
  }

  createDeck() {
    const suits = ['h', 'd', 'c', 's'];
    const vals = ['a', '2', '3', '4', '5', '6', '7', '8', '9', 't', 'j', 'q', 'k']

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < vals.length; j++) {
        this.cards.push(new localCard(vals[j], suits[i]));
      }
    }
  }

  showDeck() {
    for (let i = 0; i < this.cards.length; i++){
        console.log(`${this.cards[i].v} of ${this.cards[i].s}`);
      }
  }

  shuffleDeck() { 
    for (let i = 0; i < this.cards.length; i++) {
      let pickACard = Math.floor(Math.random() * (this.cards.length));
      let temp = this.cards[i];
      this.cards[i] = this.cards[pickACard];
      this.cards[pickACard] = temp;
    }
  }
}

class localCard { 
  constructor(v, s) { 
    this.v = v
    this.s = s;
  }
}