import React, { Component } from 'react'

const payTable =
  [
    ["Credits", "Royal Flush", "Straight Flush", "Four of a Kind", "Full House",
      "Flush", "Straight", "Three of a Kind", "Two Pair", "Jacks or Better"],
    [1, 250, 50, 25, 9, 6, 4, 3, 2, 1],
    [2, 500, 100, 50, 18, 12, 8, 6, 4, 2],
    [3, 750, 150, 75, 27, 18, 12, 9, 6, 3],
    [4, 1000, 200, 100, 36, 24, 16, 12, 8, 4],
    [5, 4000, 250, 125, 45, 30, 20, 15, 10, 5]
  ];

export default class Payouts extends Component {

  render() {
    return (
      <div className="payouts">
        <h3 className="paytable">Pay Table</h3>
        <table className="pay">
          <thead>
            <tr>
            {payTable.map((cols, i) => (
              <th key={i} className={this.getClassName(i)}>{cols[0]}</th>
            ))}
            </tr>
          </thead>
          <tbody>
            <tr>
            {payTable.map((cols, i) => (
              <td key={i} className={this.getClassName(i)}>{cols[1]}</td>
            ))}
            </tr>
            <tr>
              {payTable.map((cols, i) => (
                <td key={i} className={this.getClassName(i)}>{cols[2]}</td>
            ))}
            </tr>
            <tr>
            {payTable.map((cols, i) => (
              <td key={i} className={this.getClassName(i)}>{cols[3]}</td>
            ))}
            </tr>
            <tr>
            {payTable.map((cols, i) => (
              <td key={i} className={this.getClassName(i)}>{cols[4]}</td>
            ))}
            </tr>
            <tr>
            {payTable.map((cols, i) => (
              <td key={i} className={this.getClassName(i)}>{cols[5]}</td>
            ))}
            </tr>
            <tr>
            {payTable.map((cols, i) => (
              <td key={i} className={this.getClassName(i)}>{cols[6]}</td>
            ))}
            </tr>
            <tr>
            {payTable.map((cols, i) => (
              <td key={i} className={this.getClassName(i)}>{cols[7]}</td>
            ))}
            </tr>
            <tr>
            {payTable.map((cols, i) => (
              <td key={i} className={this.getClassName(i)}>{cols[8]}</td>
            ))}
            </tr>
            <tr>
            {payTable.map((cols, i) => (
              <td key={i} className={this.getClassName(i)}>{cols[9]}</td>
            ))}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  getClassName = (i) => { 
    return i === this.props.bet ? "active" : "payTableCol"
  }

  showPayTable() { 

  }
}