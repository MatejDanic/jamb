import React, { Component } from "react";
import "./button.css"

export default class DiceButton extends Component {
    constructor() {
        super();

        this.state = {
            hold: false
        }
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    toggleDice() {
        this.setState({
            hold: !this.state.hold
        })
    }
    
    render() {
        let btnClass = this.state.hold ? "red-border" : "black-border";
        let imgUrl = 'url(images/dice/' + this.props.value + '.bmp)';
        return (
            <button className={"dice-button " + btnClass} onClick={this.toggleDice.bind(this)} style={{ backgroundImage: imgUrl }} />
        )
    }
}
