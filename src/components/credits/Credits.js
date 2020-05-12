import React, { Component } from 'react'

export default class Credits extends Component {

  render() { 
    return (
      <div className="credits">
        <h1 className="credits-header">Credits: {this.props.credits}</h1>
        <h2 className="bet">Current Bet</h2>
        <div className="betGroup">
          <button className="bordered" onClick={this.minus}>-</button>
          <input readOnly type="text" className="bordered" value={this.props.bet}></input>
          <button className="bordered" onClick={this.plus}>+</button>
        </div>
      </div>
    )
  }

  minus = () => { 
    if (this.props.bet > 1) {
      this.props.updateBet(this.props.bet - 1);
    }
  }

  plus = () => { 
    if (this.props.bet < 5) {
      this.props.updateBet(this.props.bet + 1);
    }
  }
}