import React, { Component } from 'react'


export default class Card extends Component { 
  // constructor(props) {
  //   super(props)
  // }

  showCards = () => {
    // return `${this.props.card.v} of ${this.props.card.s}`
    const cardImage = this.props.card.image;
    return(
      <img src={cardImage} alt="card"></img>
    )
  }

  render() { 

    return (
      <div>
        {this.showCards()}
      </div>
    )
  }
}