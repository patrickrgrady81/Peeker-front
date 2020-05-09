import Card from "../card/Card";
import React, { Component } from 'react'

export default class Deck extends Component { 
  constructor() { 
    super();

    let deck = this.createDeck();
    this.shuffleDeck(deck);
    
    this.state = {
      deck: deck,
      hand: []
    };
  }


  draw = () => {
    for (let i = 0; i < 5; i++) {
      this.setState(state => {
        return {
          deck: state.deck.slice(1),
          hand: [...state.hand, state.deck[0]]
        }
      })
    }
  }

  render() { 
    return (
      <div>
        <ul className="noBullet">
          {this.state.hand.map((card, i) => {
            return <div><li key={i}><Card card={card}/></li><br /></div>
          })}
        </ul>
        <button onClick={this.draw}>Draw</button>
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
      // let temp = cards[i];
      // cards[i] = cards[pickACard];
      // cards[pickACard] = temp;
      [cards[i], cards[pickACard]] = [cards[pickACard], cards[i]];
    }
    console.log(cards)
  }
}

class localCard { 
  constructor(v, s) { 
    this.v = v;
    this.s = s;
    this.image = `img/${this.v}${this.s}.png`;
  }
}