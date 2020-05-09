import React, { Component } from 'react'
import './Card.css'


export default class Card extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      hold: false 
    }
  }

  holdButton = () => { 
    this.setState(state => { 
      return {
        hold: !this.state.hold
      }
    });
  }

  showCards = () => {

    let cardImage;
    debugger

    if (this.props.gameState === "Draw") {
      cardImage = this.props.card.image;
    } else { 
      cardImage = this.image = '/img/cards/blue_back.png';
    }
    
    return (
      <div className="cardWrapper">
        <img className="card" src={`${cardImage}`} alt="card"></img>
        <button onClick={this.holdButton} key={this.props.card.id} id={this.props.card.id} className="card-btn">{this.state.hold ? "HELD" : "HOLD"}</button>
      </div>
    )
  }
  

  render() { 

    return (
      <div>
        {this.showCards()}
      </div>
    )
  }
}