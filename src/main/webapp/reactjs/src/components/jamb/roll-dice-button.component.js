import React, { Component } from "react";
import "./roll-dice-button.css"

export default class RollDiceButton extends Component {
      render(){
          return (
            <button class="roll-dice-button" onClick={this.rollDice.bind(this)}>BACI KOCKICE</button>
          )
      }
      rollDice() {
        // var number;
        // diceRolls++;
        // if (diceRolls === 1) {
        //     buttonRollDice.className = 'roll-dice-button two-left';
        // } else if (diceRolls === 2) {
        //     buttonRollDice.className = 'roll-dice-button one-left';
        // } else if (diceRolls === 3) {
        //     buttonRollDice.className = 'roll-dice-button none-left';
        // }
        // for (var i = 0; i < buttonDice.length; i++) {
        //     if (!buttonDice[i].hold) {
        //         number = Math.floor(Math.random() * (7 - 1)) + 1;
        //         buttonDice[i].value = number;
        //     }
        // }
        // this.startDiceAnimation();
        // this.toggleButtons();
    }
  }
  