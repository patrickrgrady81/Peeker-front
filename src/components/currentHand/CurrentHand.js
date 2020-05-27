import React, { Component } from 'react'

export default class CurrentHand extends Component {
  render() {
    let payMessage;
    if (this.props.gameState === "DEAL") { 
    if (this.props.payout > 0) {
        payMessage = `You Win ${this.props.payout} Credits`
      } else {
        payMessage = "Nice Try, Please Play Again"
      }
    }
    return (
      <div className="currentHand">
        <h1 className="hand">{this.props.handValue}</h1>{"\n"}
        <h1 className="payMsg">{payMessage}</h1>
      </div>
    )
  }
}