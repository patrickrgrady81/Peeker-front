import React, { Component } from 'react'
import './Card.css'


export default class Card extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      held: false 
    }
  }

  holdButton = () => {
    if (this.props.gameState === "Start") return;
    if (this.props.gameState === "Draw") {
      this.props.card.held = !this.props.card.held
      this.setState(state => {
        return {
          held: !this.state.held
        }
      });
    } else { 
      // this.setState({held: false});
    }
  }

  showCards = () => {

    let cardImage;

    if (this.props.gameState === "Start") {
      cardImage = '/img/cards/blue_back.png';
      return (
        <div className="cardWrapper">
          <img className="card" src={cardImage} alt="card"></img>
          <button onClick={this.holdButton} key={null} id={null} className="card-btn">READY</button>
        </div>
      )
    } else { 
      cardImage = this.props.card.image;
      return (
        <div className="cardWrapper">
          <img className="card" src={cardImage} alt="card"></img>
          <button onClick={this.holdButton} key={this.props.card.id} id={this.props.card.id} className="card-btn">{this.state.held ? "HOLDING" : "HOLD"}</button>
        </div>
      )
    }
    

  }
  

  render() { 

    return (
      <div>
        {this.showCards()}
      </div>
    )
  }
}