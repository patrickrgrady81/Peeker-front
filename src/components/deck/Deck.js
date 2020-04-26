import Card from "../card/Card";
import React, { Component } from 'react'

export default class Deck extends Component { 
  constructor() { 
    super();
    this.state = {};

    this.debug = false;
    this.cards = [];

    this.createDeck();
    this.shuffleDeck();
    if (this.debug) this.showDeck();
  }

  render() { 
    return (
      <div>
        <ul className="noBullet">
          {this.cards.map((card, i) => {
            return <div><li key={i}><Card card={card}/></li><br /></div>
          })}
        </ul>
      </div>
    );
  }

  createDeck() {
    const suits = ['H', 'D', 'C', 'S'];
    const vals = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

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