import React, { PureComponent } from "react";
import "./button.css"

export default class DiceButton extends PureComponent {

    componentDidUpdate() {
        // console.log("UPDATE (DiceButton): dice ->", this.props.variables);
    }

    componentDidMount() {
        // console.log("MOUNT (DiceButton): dice -> ", this.props.variables);
    }

    render() {
        const label = this.props.variables.label;
        let value = this.props.variables.value;
        let hold = this.props.variables.hold;
        let disabled = this.props.disabled;
        let btnClass = disabled ? "gray-border" : hold ? "red-border" : "black-border";
        let imgUrl = 'url(images/dice/' + value + '.bmp)';

        return (
            <button label={label} disabled={disabled} className={"dice-button " + btnClass} onClick={() => this.props.onToggleDice(label)} style={{ backgroundImage: imgUrl }} />
        )
    }
}
