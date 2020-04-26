import Card from "./Card";
import { Component } from 'react'


export default class Deck extends Component { 
  constructor(props) { 
    super(props);
    this.state = {};

    this.debug = true;
    this.cards = [];

    this.createDeck();
    this.shuffleDeck();
    if (this.debug) this.showDeck();
  }

  render() { 
    return null;
  }

  createDeck() {
    if (this.debug) console.log("Creating Deck....");
    const suits = ['h', 'd', 'c', 's'];
    const vals = ['a', '2', '3', '4', '5', '6', '7', '8', '9', 't', 'j', 'q', 'k']

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < vals.length; j++) {
        this.cards.push(new Card(vals[j], suits[i]));
      }
    }
    if (this.debug) console.log("Done Creating!");
  }

  showDeck() {
    for (let i = 0; i < this.cards.length; i++){
        console.log(`${this.cards[i].v} of ${this.cards[i].s}`);
      }
  }

  shuffleDeck() { 
    if (this.debug) console.log("Shuffling the Deck.......");

    for (let i = 0; i < this.cards.length; i++) {
      let pickACard = Math.floor(Math.random() * (this.cards.length));
      let temp = this.cards[i];
      this.cards[i] = this.cards[pickACard];
      this.cards[pickACard] = temp;
    }
    if (this.debug) console.log("Done Shuffling");
  }
}