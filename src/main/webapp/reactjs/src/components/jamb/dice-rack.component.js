import React, { Component } from "react";
import DiceButton from "./dice-button.component";
import RollDiceButton from "./roll-dice-button.component";
import "./game.css"

export default class DiceRack extends Component {

    render() {
        let dice = this.props.dice;
        let rollDisabled = this.props.rollDisabled;
        let diceDisabled = this.props.diceDisabled;
        return (
            <div className="dice-rack">
                <DiceButton disabled={diceDisabled} variables={dice[0]} onToggleDice={(e) => this.props.onToggleDice(e.target.name)} />
                <DiceButton disabled={diceDisabled} variables={dice[1]} onToggleDice={(e) => this.props.onToggleDice(e.target.name)} />
                <DiceButton disabled={diceDisabled} variables={dice[2]} onToggleDice={(e) => this.props.onToggleDice(e.target.name)} />
                <DiceButton disabled={diceDisabled} variables={dice[3]} onToggleDice={(e) => this.props.onToggleDice(e.target.name)} />
                <DiceButton disabled={diceDisabled} variables={dice[4]} onToggleDice={(e) => this.props.onToggleDice(e.target.name)} />

                <div>
                    <RollDiceButton rollsLeft={this.props.rollsLeft}
                        disabled={rollDisabled}
                        onRollDice={this.props.onRollDice} />
                </div>
            </div>
        )
    }
}