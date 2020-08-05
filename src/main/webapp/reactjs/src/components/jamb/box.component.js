import React, { Component } from "react";
import "./box.css"

export default class Box extends Component {

    render() {
        const label = this.props.variables.label;
        let disabled = this.props.boxesDisabled || !this.props.variables.available;
        let value = this.props.variables.filled ? this.props.variables.value : "";
        return (
            <button name="name" label={label} disabled={disabled} className="box" onClick={() => this.props.onBoxClick(label)} >{value}</button>
        )
    }
}
