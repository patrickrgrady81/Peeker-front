import React, { Component } from 'react'
import './Card.css'


export default class Card extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      held: false,
      class: "card-btn"
    }

    this.holdMessage = "READY";
  }

  componentDidUpdate = () => { 
    if (this.props.gameState === "DEAL") {
      if (this.state.held) {
        this.setState({ held: false });
      } 
    }
  }

  render() { 
    return (
      <div>
        {this.showCards()}
      </div>
    )
  }

  showCards = () => {
    let cardImage;
    let key;
    if (this.props.gameState === "START") {
      cardImage = '/img/cards/blue_back.png';
      key = null;
      this.holdMessage = "READY";
    } else { 
      cardImage = this.props.card.image;
      key = this.props.card.key
      this.holdMessage = "HOLD";
    }
    const id = key
    

    return (
      <div className="cardWrapper">
        <img className="card" src={cardImage} alt="card"></img>
        <button onClick={this.holdButton} key={key} id={id} className={this.state.class}>{this.holdMessage}</button>
      </div>
    )
  }

  holdButton = () => {
    if (this.props.gameState !== "DRAW") return;
    this.props.card.held = !this.props.card.held
    this.setState( state => {
      return {
        held: !this.state.held,
      }
    });
    if (this.holdMessage === "HOLD") {
      // debugger
      this.holdMessage = "HOLDING";
    } else {
      this.holdMessage = "HOLD";
    }
  }
}