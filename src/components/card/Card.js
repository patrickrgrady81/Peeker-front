import React, { Component } from 'react'
import './Card.css'


export default class Card extends Component { 
  // constructor(props) {
  //   super(props)
  // }

  showCards = () => {

    let cardImage;

    if (this.props.gameState === "Draw") {
      cardImage = this.props.card.image;
    } else { 
      cardImage = this.image = '/img/cards/blue_back.png';
    }

    // const cardImage = this.props.card.image;
    
    return(
      <img className="card" src={`${cardImage}`} alt="card"></img>
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