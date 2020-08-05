import React, { Component } from "react";
import "./button.css"

export default class DiceButton extends Component {
    render() {
        const name = this.props.variables.name;
        let disabled = this.props.disabled;
        let value = this.props.variables.value;
        let hold = this.props.variables.hold;
        let btnClass = disabled ? "gray-border" : hold ? "red-border" : "black-border";
        let imgUrl = 'url(images/dice/' + value + '.bmp)';

        return (
            <button name={name} disabled={disabled} className={"dice-button " + btnClass} onClick={this.props.onToggleDice} style={{ backgroundImage: imgUrl }} />
        )
    }
}
