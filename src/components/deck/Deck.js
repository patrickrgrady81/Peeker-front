import Card from "../card/Card";
import React, { Component } from 'react'

export default class Deck extends Component { 
  constructor() { 
    super();

    const newDeck = this.start()
        
    this.state = {
      gameState: "Start",
      deck: newDeck,
      hand: []
    };
  }

  start = () => { 
    let deck = this.createDeck();
    this.shuffleDeck(deck);
    return deck;
  }


  draw = () => {
    if (this.state.gameState === "Start") {
      for (let i = 0; i < 5; i++) {
        this.setState(state => {
          return {
            deck: state.deck.slice(1),
            hand: [...state.hand, state.deck[0]],
          }
        });
      }
      this.setState(state => {
        return {
          gameState: "Draw"
        }
      });
    } else { 

    }
  }

  render() { 
    return (
      <div className="wrapper">
        <ul className="noBullet cards">
          {this.state.hand.map((card, i) => {
            return <li key={i}><Card card={card} gameState={this.state.gameState}/></li>
          })}
        </ul>
        <button className="draw-btn" onClick={this.draw}>{this.state.gameState}</button>
      </div>
    );
  }

  createDeck() {
    const cards = []
    const suits = ['H', 'D', 'C', 'S'];
    const vals = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < vals.length; j++) {
        cards.push(new localCard(vals[j], suits[i]));
      }
    }
    return cards
  }

  showDeck() {
    for (let i = 0; i < this.state.deck.length; i++){
        console.log(`${this.cards[i].v} of ${this.cards[i].s}`);
      }
  }

  shuffleDeck(cards) { 
    for (let i = 0; i < cards.length; i++) {
      let pickACard = Math.floor(Math.random() * (cards.length));
      [cards[i], cards[pickACard]] = [cards[pickACard], cards[i]];
    }
  }
}

class localCard { 
  constructor(v, s) { 
    this.v = v;
    this.s = s;
    this.image = `img/cards/${this.v}${this.s}.png`;
    this.id = `${this.v.toLowerCase()}${this.s.toLowerCase()}`;
  }
}