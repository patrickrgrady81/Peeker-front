import React, { Component } from 'react'

export default class Credits extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      credits: 100,
      currentBet: 1
    }
  }

  minus = () => { 
    if (this.state.currentBet > 1) {
      document.getElementById("numCredits").value = this.state.currentBet - 1;
      this.setState( state => {
        return {
          currentBet: state.currentBet--
        }
      });
    }
  }

  plus = () => { 
    if (this.state.currentBet < 5) {
      document.getElementById("numCredits").value = this.state.currentBet + 1;
      this.setState( state => {
        return {
          currentBet: state.currentBet++
        }
      });
    }
  }

  slide = () => { 
    const amount = document.getElementById("numCredits").value;
    this.setState( state => {
      return {
        currentBet: amount
      }
    });
  }

  render() { 
    return (
      <div className="credits">
        <h1 className="credits-header">Credits: {this.state.credits}</h1>
        <h2 className="bet">Current Bet</h2>
        <div className="betGroup">
          <button className="bordered" onClick={this.minus}>-</button>
          <input readOnly type="text" className="bordered" value={this.state.currentBet}></input>
          <button className="bordered" onClick={this.plus}>+</button>
        </div>
        <input type="range" id="numCredits" name="numCredits" min="1" max="5" step="1" defaultValue="1" onChange={this.slide}></input>
      </div>
    )
  }
}