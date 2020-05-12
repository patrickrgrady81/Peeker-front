import React, { Component } from 'react'

export default class CurrentHand extends Component {
  render() { 
    return (
      <div className="currentHand">
        <h1 className="hand">{this.props.handValue}</h1>
      </div>
    )
  }
}