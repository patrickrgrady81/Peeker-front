import React, { Component } from 'react'

export default class Credits extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      credits: 100
    }
  }
  render() { 
    return (
      <div className="credits">
        <h1 className="credits-header">Credits: {this.state.credits}</h1>
        <h2 className="bet">Current Bet</h2>
      </div>
    )
  }
}