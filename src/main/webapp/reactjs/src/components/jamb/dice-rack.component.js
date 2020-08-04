import React, { Component } from "react";
import DiceButton from "./dice-button.component";
import RollDiceButton from "./roll-dice-button.component";
import "./dice-rack.css"

export default class DiceRack extends Component {
    render() {
        return (
            <div className="dice-rack">
                <DiceButton value={6} />
                <DiceButton value={6} />
                <DiceButton value={6} />
                <DiceButton value={6} />
                <DiceButton value={6} />
                <div><RollDiceButton onRollDice={this.rollDice.bind(this)} /></div>
            </div>
        )
    }

    rollDice() {
        console.log("rolling dice");
    }

}
