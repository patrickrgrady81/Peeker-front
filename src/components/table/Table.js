import axios from 'axios';
import React, { Component } from 'react'
import Card from "../card/Card";
import DeckJS from "./js/deck.js"
import CardJS from "./js/card.js"

export default class Table extends Component { 
  constructor() { 
    super();

    const newDeck = this.start()
        
    this.state = {
      deck: newDeck,
      hand: []
    };

    this.injectCards = true;
  }

  render() { 
    return (
      <div className="wrapper table">
        <ul className="noBullet cards">
          {this.showCards()}
        </ul>
        <div className="buttonDiv">
          <button className="draw-btn" onClick={() => { this.minmaxClicked(1) }}>BET ONE</button>
          <button className="draw-btn" onClick={this.play}>{this.props.gameState}</button>
          <button className="draw-btn" onClick={() => { this.minmaxClicked(5) }}>BET MAX</button>
        </div>
      </div>
    );
  }

  minmaxClicked = async (bet) => { 
    if (this.props.gameState !== "DRAW") {
      await this.props.updateBet(bet);
      this.play();
    }
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
    const response = await axios.request({
      url: 'http://localhost:3001/api/v1/send',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      data: {
        hand: this.state.hand,
        gameState: this.props.gameState,
        bet: this.props.bet
      }
    })
    const hand = response.data.handValue;
    const payout = response.data.payout;
    console.log(payout);
    this.props.updateHandValue(hand);
    this.props.updateCredits(payout);
    this.props.updatePayout(payout);
  }

  inject = () => { 
    const injectTheseCards = [
      new CardJS("A", "S", 1),
      new CardJS("K", "S", 13),
      new CardJS("Q", "S", 12),
      new CardJS("J", "S", 11),
      new CardJS("T", "S", 10),
    ];
    this.setState({hand: injectTheseCards});
  }

  play = async () => {
    if (this.props.gameState === "START" || this.props.gameState === "DEAL") {
      await this.getCards();
      if (this.injectCards) { 
        this.inject();
      }
      await this.props.updateGameState("DRAW")
    } else {
      await this.getNewHand();
      if (this.injectCards) { 
        this.inject();
      }
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