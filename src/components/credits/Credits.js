import React, { Component } from 'react'

export default class Credits extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      currentBet: 1
    }
  }

  minus = () => { 
    if (this.state.currentBet > 1) {
      const newBet = this.state.currentBet - 1;
      this.setState( state => {
        return {
          currentBet: newBet
        }
      });
      this.props.updateBet(newBet);
    }
  }

  plus = () => { 
    if (this.state.currentBet < 5) {
      const newBet = this.state.currentBet + 1;
      this.setState( state => {
        return {
          currentBet: newBet
        }
      });
      this.props.updateBet(newBet);
    }
  }

  render() { 
    return (
      <div className="credits">
        <h1 className="credits-header">Credits: {this.props.credits}</h1>
        <h2 className="bet">Current Bet</h2>
        <div className="betGroup">
          <button className="bordered" onClick={this.minus}>-</button>
          <input readOnly type="text" className="bordered" value={this.state.currentBet}></input>
          <button className="bordered" onClick={this.plus}>+</button>
        </div>
      </div>
    )
  }
}