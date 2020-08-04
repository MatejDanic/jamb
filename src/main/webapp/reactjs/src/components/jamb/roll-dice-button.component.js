import React, { Component } from "react";
import "./button.css"

export default class RollDiceButton extends Component {
  render() {
    return (
      <button className="roll-dice-button" onClick={this.props.onRollDice}>BACI KOCKICE</button>
    )
  }
}
