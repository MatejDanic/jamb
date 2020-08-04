import React, { Component } from "react";
import DiceButton from "./dice-button.component";
import RollDiceButton from "./roll-dice-button.component";
import "./game.css"

export default class DiceRack extends Component {

    constructor() {
        super();

        this.state = {
            dice: [
                { value: 6, hold: false },
                { value: 6, hold: false },
                { value: 6, hold: false },
                { value: 6, hold: false },
                { value: 6, hold: false }
            ],
            rollDisabled: false,
            diceDisabled: true,
            rollsLeft: 3
        }
    }

    render() {
        return (
            <div className="dice-rack">
                <DiceButton disabled={this.state.diceDisabled} value={this.state.dice[0].value} hold={this.state.dice[0].hold} onToggleDice={(e) => this.toggleDice.bind(this)(0)} />
                <DiceButton disabled={this.state.diceDisabled} value={this.state.dice[1].value} hold={this.state.dice[1].hold} onToggleDice={(e) => this.toggleDice.bind(this)(1)} />
                <DiceButton disabled={this.state.diceDisabled} value={this.state.dice[2].value} hold={this.state.dice[2].hold} onToggleDice={(e) => this.toggleDice.bind(this)(2)} />
                <DiceButton disabled={this.state.diceDisabled} value={this.state.dice[3].value} hold={this.state.dice[3].hold} onToggleDice={(e) => this.toggleDice.bind(this)(3)} />
                <DiceButton disabled={this.state.diceDisabled} value={this.state.dice[4].value} hold={this.state.dice[4].hold} onToggleDice={(e) => this.toggleDice.bind(this)(4)} />
                <div>
                    <RollDiceButton rollsLeft={this.state.rollsLeft}
                        disabled={this.state.rollDisabled}
                        onRollDice={this.rollDice.bind(this)} />
                </div>
            </div>
        )
    }
    rollDice() {
        if (this.state.rollsLeft > 0) {
            this.setState({ rollsLeft: this.state.rollsLeft - 1, diceDisabled: false }, function () {
                this.setState(state => {
                    for (var i = 0; i < state.dice.length; i++) {
                        if (!state.dice[i].hold) state.dice[i].value = Math.round(1 + Math.random() * 5);
                    }
                });
                this.setState({});
                if (this.state.rollsLeft === 0) {
                    this.setState({ rollDisabled: true, diceDisabled: true });
                }
            });
        }
        this.props.onRollDice(this.state.dice);
    }
    toggleDice(diceNumber) {
        this.setState(state => {
            state.dice[diceNumber].hold = !state.dice[diceNumber].hold;
            console.log("hold " + diceNumber + " -> " + state.dice[diceNumber].hold);
        });
        this.setState({});
    }
}