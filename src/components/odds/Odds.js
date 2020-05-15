import React, { Component } from 'react'


const hands = ["Royal Flush", "Straight Flush", "Four of a Kind", "Full House",
  "Flush", "Straight", "Three of a Kind", "Two Pair", "Jacks or Better"];

const odds = ["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"]

export default class Odds extends Component {
  render() { 
    return (
      <div className="odds">
        <h3 className="oddsHead">Odds</h3>
        {hands.map((hand, i) => (
          <p key={i} className="odd">{`${hand} = ${odds[i]}`}</p>
        ))}
      </div>
    )
  }

  show = () => { 
    return (
      <div>
        {hands.map((hand, i) => (
          <p key={i} className="hand">{hand}{" = "}</p>
        ))}
      </div>
    )
  }
}