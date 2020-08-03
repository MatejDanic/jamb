import React, { Component } from "react";
import "./dice-button.css"

export default class DiceButton extends Component {
    constructor() {
        super();

        this.state = {
            black: true
        }
    }
    toggleDice() {
        console.log("toggle");
        this.setState({
            black: !this.state.black
        })
    }
    render() {
        let btnClass = this.state.black ? "black-border" : "red-border";
        return (
            <button className={"dice-button " + btnClass} onClick={this.toggleDice.bind(this)} />
        )
    }
}
