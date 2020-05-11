import Card from "../card/Card";
import React, { Component } from 'react'
import DeckJS from "./js/deck.js"

export default class Table extends Component { 
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
      <div className="wrapper table">
        <ul className="noBullet cards">
          {this.showCards()}
        </ul>
        <button className="draw-btn" onClick={this.buttonClick}>{this.state.gameState}</button>
      </div>
    );
  }

  start = () => { 
    let deck = new DeckJS();
    let aDeck = deck.createDeck();
    deck.shuffleDeck(aDeck);
    return aDeck;
  }

  showCards = () => {
    let cards = [];
    let theCard;
    
    for (let i = 0; i < 5; i++) {
      this.state.hand[i] ? theCard = this.state.hand[i] : theCard = null;
      cards.push(<li key={i}><Card card={theCard} gameState={this.state.gameState} /></li>);
    }
    
    return cards
  }


  buttonClick = () => {
    if (this.state.gameState === "START") {
      this.props.updateCredits(-this.props.bet);
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
      let newHand = [...this.state.hand];
      let newDeck = [...this.state.deck]
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
      this.props.updateCredits(-this.props.bet);
      let deck = new DeckJS();
      let newDeck = deck.createDeck();
      deck.shuffleDeck(newDeck);
      let pHand = newDeck.slice(0, 5);
      for (let card of pHand) { 
        card.held = false;
      }
      newDeck = newDeck.slice(4, -1);
      this.setState(state => {
        return {
          deck: newDeck,
          hand: pHand,
          gameState: "DRAW"
        }
      });
    }
  }
}