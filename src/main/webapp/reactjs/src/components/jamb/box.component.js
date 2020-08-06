import React, { PureComponent } from "react";
import "./box.css"

export default class Box extends PureComponent {
    render() {
        const label = this.props.variables.label;
        let disabled = this.props.boxesDisabled || !this.props.variables.available;
        let value = this.props.variables.filled ? this.props.variables.value : "";
        return (
            <button label={label} disabled={disabled} className="box" onClick={() => this.props.onBoxClick(label)} >{value}</button>
        )
    }
}
