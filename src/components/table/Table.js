import React, { Component } from 'react'
import Deck from '../deck/Deck.js';



export default class Table extends Component { 

  render() {
    return (
      <div className="table">
        <Deck />
      </div>
    )
   }

// =======================================

  // componentDidMount() {
  //   this.updateCanvas();
  // }
  // updateCanvas() {
  //   const ctx = this.refs.canvas.getContext('2d');
  //   ctx.fillStyle = "green"
  //   ctx.fillRect(0, 0, 800, 600);
  //   ctx.fillStyle = "red"
  //   ctx.fillRect(0,0, 300, 100);
  // }
  // render() {
  //   return (
  //       <canvas ref="canvas" width={800} height={600}/>
  //   );
  // }
}