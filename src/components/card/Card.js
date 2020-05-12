import React, { Component } from 'react'
import './Card.css'


export default class Card extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      held: false,
      class: "card-btn"
    }
  }

  componentDidUpdate = () => { 
    if (this.props.gameState === "DEAL") {
      if (this.state.held) {
        this.setState({ held: false });
      }
    //   if (this.state.class === "card-btn") {
    //     this.setState({ class: "none" });
    //   }
    // } else if (this.props.gameState === "DRAW") { 
    //   if (this.state.class === "hide") {
    //     this.setState({ class: "card-btn" });
    //   }
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
    if (this.props.gameState === "START") {
      cardImage = '/img/cards/blue_back.png';
      return (
        <div className="cardWrapper">
          <img className="card" src={cardImage} alt="card"></img>
          <button onClick={this.holdButton} key={null} id={null} className={this.state.class}>READY</button>
        </div>
      )
    } else { 
      cardImage = this.props.card.image;
      return (
        <div className="cardWrapper">
          <img className="card" src={cardImage} alt="card"></img>
          <button onClick={this.holdButton} key={this.props.card.id} id={this.props.card.id} className={this.state.class}>{this.state.held ? "HOLDING" : "HOLD"}</button>
        </div>
      )
    }
  }

  holdButton = () => {
    if (this.props.gameState !== "DRAW") return;
      this.props.card.held = !this.props.card.held
      this.setState(state => {
        return {
          held: !this.state.held
        }
      });
  }
}