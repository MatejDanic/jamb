import React, { Component } from "react";
import DiceRack from "./jamb/dice-rack.component";
import Form from "./jamb/form.component";
import "../game.css"


export default class Game extends Component {

    render() {
        return (
            <div className="game">
                <DiceRack />
                <Form />
            </div>
        )
    }
}
