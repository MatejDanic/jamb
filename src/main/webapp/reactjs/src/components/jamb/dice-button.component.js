import React, { Component } from "react";
import "./button.css"

export default class DiceButton extends Component {
    render() {
        let btnClass = this.props.disabled ? "gray-border" : this.props.hold ? "red-border" : "black-border";
        let imgUrl = 'url(images/dice/' + this.props.value + '.bmp)';
        return (
            <button disabled={this.props.disabled} className={"dice-button " + btnClass} onClick={this.props.onToggleDice} style={{ backgroundImage: imgUrl }} />
        )
    }
}
