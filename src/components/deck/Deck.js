import Card from "../card/Card";
import React, { Component } from 'react'

export default class Deck extends Component { 
  constructor() { 
    super();

    const newDeck = this.start()
        
    this.state = {
      gameState: "START",
      deck: newDeck,
      hand: []
    };
  }

  render() { 
    return (
      <div className="wrapper">
        <ul className="noBullet cards">
          {this.showCards()}
        </ul>
        <button className="draw-btn" onClick={this.buttonClick}>{this.state.gameState}</button>
      </div>
    );
  }

  showCards = () => { 
    let cards = [];
    if (this.state.hand[0]) {
      // eslint-disable-next-line
      this.state.hand.map((card, i) => {
        cards.push(<li key={i}><Card card={card} gameState={this.state.gameState} /></li>);
      })
    } else { 
      for (let i = 0; i < 5; i++) { 
        cards.push(<li key={i}><Card card={null} gameState={this.state.gameState} /></li>);
      }
    }
    return cards
  }

  start = () => { 
    let deck = this.createDeck();
    this.shuffleDeck(deck);
    return deck;
  }


  buttonClick = () => {
    if (this.state.gameState === "START") {
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
          gameState: "DRAW"
        }
      });
      // =========================
      // send my cards to the server so I can get info back
      // about odds and stuff. 

    } else if (this.state.gameState === "DRAW") {
      // We started the game and have cards 
      // When we click again we get new cards for all 
      // cards that are !held
      let newHand = [...this.state.hand];
      let newDeck = [...this.state.deck]
      // debugger
      for (let i = 0; i < newHand.length; i++) {
        if (!newHand[i].held) {
          let newCard = newDeck[i];
          newHand.splice(i, 1, newCard);
        }
      }
      this.setState(state => {
        return {
          deck: newDeck,
          hand: newHand,
          gameState: "DEAL"
        }
      });
      // =========================
      // send my cards to the server so I can get info back
      // about fianl tallies. 
    } else { 
      // Deal new hand
      // create new deck 
      let newDeck = this.createDeck();
      this.shuffleDeck(newDeck);
      // create new player hand
      // add 5 cards to hand
      let pHand = newDeck.slice(0, 5);
      for (let card of pHand) { 
        card.held = false;
      }
      newDeck = newDeck.slice(4, -1);
      // gameState => Draw
      this.setState(state => {
        return {
          deck: newDeck,
          hand: pHand,
          gameState: "DRAW"
        }
      });
    }
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
    this.held = false;
  }
}