import axios from 'axios';
import React, { Component } from 'react'
import Card from "../card/Card";
import DeckJS from "./js/deck.js"

export default class Table extends Component { 
  constructor() { 
    super();

    const newDeck = this.start()
        
    this.state = {
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
        <div className="buttonDiv">
          <button className="draw-btn" onClick={this.oneClick}>BET ONE</button>
          <button className="draw-btn" onClick={this.play}>{this.props.gameState}</button>
          <button className="draw-btn" onClick={this.maxClick}>BET MAX</button>
        </div>
      </div>
    );
  }

   oneClick = async () => { 
    await this.props.updateBet(1);
    this.play();
  }

  maxClick = async () => { 
    await this.props.updateBet(5);
    this.play();
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
      cards.push(<li key={i}><Card card={theCard} gameState={this.props.gameState} /></li>);
    }
    return cards
  }

  sendHand = async () => { 
    axios.request({
      url: 'http://localhost:3001/api/v1/send',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      data: {
        hand: this.state.hand,
        gameState: this.props.gameState
      }
    }).then((response) => {
      const handValue = response.data.handValue;
      this.props.updateHandValue(handValue);
    

    })
    .catch(function (error) {
        console.log(error);
    });
  }

  play = async () => {
    
    if (this.props.gameState === "START" || this.props.gameState === "DEAL") {
      await this.getCards();
      await this.props.updateGameState("DRAW")
    } else {
      await this.getNewHand();
      await this.props.updateGameState("DEAL")
    }
    
    this.sendHand();
    
  }

  getCards = async () => { 
    this.props.updateCredits(-this.props.bet);

    let newDeck = this.start();

    // player's hand is the first 5 cards in the deck
    let pHand = newDeck.slice(0, 5);
    for (let card of pHand) { 
      card.held = false;
    }

    // the deck with first 5 cards removed
    newDeck = newDeck.slice(4, -1);

    this.setState(state => {
      return {
        deck: newDeck,
        hand: pHand,
      }
    });
  }

  getNewHand = async () => { 
    let newHand = [...this.state.hand];
    let newDeck = [...this.state.deck];

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
      }
    });
  }
}