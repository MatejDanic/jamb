import React, { Component } from "react";
import "./button.css"

export default class RollDiceButton extends Component {

  render() {
    let btnClass = this.getBtnClass(this.props.rollsLeft);
    return (
      <button disabled={this.props.disabled} className={"roll-dice-button " + btnClass} onClick={this.props.onRollDice}>BACI KOCKICE</button>
    )
  }

  getBtnClass(rollsLeft) {
    var btnClass;
    switch (rollsLeft) {
      case 0:
        btnClass = 'none-left';
        break;
      case 1:
        btnClass = 'one-left';
        break;
      case 2:
        btnClass = 'two-left';
        break;
      default:
        btnClass = "";

    }
    return btnClass;
  }
}
