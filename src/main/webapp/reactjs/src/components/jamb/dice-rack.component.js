import React, { Component } from "react";
import DiceButton from "./dice-button.component";
import RollDiceButton from "./roll-dice-button.component";
import "./game.css"

export default class DiceRack extends Component {

    constructor() {
        super();

        this.state = {
            dice: [
                { value: 6, hold: false, name: 0 },
                { value: 6, hold: false, name: 1 },
                { value: 6, hold: false, name: 2 },
                { value: 6, hold: false, name: 3 },
                { value: 6, hold: false, name: 4 },
            ],
            rollDisabled: false,
            diceDisabled: true,
            rollsLeft: 3
        }

        this.rollDice = this.rollDice.bind(this);
        this.toggleDice = this.toggleDice.bind(this)
    }

    render() {
        return (
            <div className="dice-rack">
                <DiceButton disabled={this.state.diceDisabled} variables={this.state.dice[0]} onToggleDice={(e) => this.toggleDice(e.target.name)} />
                <DiceButton disabled={this.state.diceDisabled} variables={this.state.dice[1]} onToggleDice={(e) => this.toggleDice(e.target.name)} />
                <DiceButton disabled={this.state.diceDisabled} variables={this.state.dice[2]} onToggleDice={(e) => this.toggleDice(e.target.name)} />
                <DiceButton disabled={this.state.diceDisabled} variables={this.state.dice[3]} onToggleDice={(e) => this.toggleDice(e.target.name)} />
                <DiceButton disabled={this.state.diceDisabled} variables={this.state.dice[4]} onToggleDice={(e) => this.toggleDice(e.target.name)} />

                <div>
                    <RollDiceButton rollsLeft={this.state.rollsLeft}
                        disabled={this.state.rollDisabled}
                        onRollDice={this.rollDice} />
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