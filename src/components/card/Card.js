import React, { Component } from 'react'
import './Card.css'


export default class Card extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      held: false 
    }
  }

  componentDidUpdate = () => { 
    if (this.props.gameState === "Deal") { 
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

  holdButton = () => {
    if (this.props.gameState !== "Draw") return;
      this.props.card.held = !this.props.card.held
      this.setState(state => {
        return {
          held: !this.state.held
        }
      });
  }
}