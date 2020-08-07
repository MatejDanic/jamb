import React, { Component } from "react";
import DiceButton from "./dice-button.component";
// import RollDiceButton from "./roll-dice-button.component";
import "./game.css"

export default class DiceRack extends Component {

    componentDidUpdate() {
        // console.log("UPDATE (DiceRack): dice -> ", this.props.dice);
    }

    render() {
        let dice = this.props.dice;
        // let rollDisabled = this.props.rollDisabled;
        let diceDisabled = this.props.diceDisabled;
        return (
            <div className="dice-rack">
                <DiceButton disabled={diceDisabled} variables={dice[0]} onToggleDice={this.props.onToggleDice.bind(this)} />
                <DiceButton disabled={diceDisabled} variables={dice[1]} onToggleDice={this.props.onToggleDice.bind(this)} />
                <DiceButton disabled={diceDisabled} variables={dice[2]} onToggleDice={this.props.onToggleDice.bind(this)} />
                <DiceButton disabled={diceDisabled} variables={dice[3]} onToggleDice={this.props.onToggleDice.bind(this)} />
                <DiceButton disabled={diceDisabled} variables={dice[4]} onToggleDice={this.props.onToggleDice.bind(this)} />
                {/* <div>
                    <RollDiceButton rollsLeft={this.props.rollsLeft} disabled={rollDisabled} onRollDice={this.props.onRollDice} />
                </div> */}
            </div>
        )
    }
}