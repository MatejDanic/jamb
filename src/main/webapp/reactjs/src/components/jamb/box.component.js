import React, { Component } from "react";
import "./box.css"

export default class Box extends Component {
    constructor() {
        super();

        this.state = {
            filled: false,
            available: true,
            value: ""
        }
        this.boxClick = this.boxClick.bind(this);
    }

    render() {
        let disabled = this.props.variables.disabled;
        let value = this.props.variables.value;
        return (
            <button disabled={disabled} className="box" onClick={this.boxClick} >{value}</button>
        )
    }

    boxClick() {
        console.log("clicked: (" + this.props.variables.column + ", " + this.props.variables.box + ")");
        this.fillBox();
    }

    fillBox() {
        this.props.onFillBox(this.props.variables.column*13+this.props.variables.box, this.checkScore());
    }

    checkScore() {
        var box = this.props.variables.box;
        var dice = this.props.dice;
        var score = 0;
        var i, j, num, result;
        if (box <= 5) {
            box = box + 1;
            for (i = 0; i < dice.length; i++) {
                if (box === dice[i].value) {
                    score += dice[i].value;
                }
            }
        } else if (box === 6 || box === 7) {
            for (i = 0; i < dice.length; i++) {
                score += dice[i].value;
            }
        } else if (box === 8) {
            for (i = 0; i < dice.length; i++) {
                num = 1;
                result = dice[i].value;
                for (j = 0; j < dice.length; j++) {
                    if (dice[i].value !== dice[j].value && dice[i].value === dice[j].value) {
                        num++;
                        if (num <= 3) result += dice[j].value;
                    }
                }
                if (num >= 3) {
                    score = result + 10;
                    break;
                }
            }
        } else if (box === 9) {
            var straight = [2, 3, 4, 5];
            var hasStraight = true;
            var diceResults = [];
            for (i = 0; i < dice.length; i++) {
                diceResults.push(dice[i].value);
            }

            for (i = 0; i < straight.length; i++) {
                if (!diceResults.includes(straight[i])) {
                    hasStraight = false;
                }
            }
            if (hasStraight) {
                if (diceResults.includes(1)) {
                    score = 35;
                } else if (diceResults.includes(6)) {
                    score = 45;
                } else {
                    score = 0;
                }
            }
        } else if (box === 10) {
            var hasPair = false;
            var hasTrips = false;
            for (i = 0; i < dice.length; i++) {
                num = 1;
                result = dice[i].value;
                for (j = 0; j < dice.length; j++) {
                    if (dice[i].value !== dice[j].value && dice[i].value === dice[j].value) {
                        num++;
                        if (num <= 3) result += dice[j].value;
                    }
                }
                if (num === 2 && !hasPair) {
                    hasPair = true;
                    score += result
                } else if (num === 3 && !hasTrips) {
                    hasTrips = true;
                    score += result
                }
            }

            if (hasPair && hasTrips) {
                score += 30;
            } else {
                score = 0;
            }

        } else if (box === 11) {
            for (i = 0; i < dice.length; i++) {
                num = 1;
                result = dice[i].value;
                for (j = 0; j < dice.length; j++) {
                    if (dice[i].value !== dice[j].value && dice[i].value === dice[j].value) {
                        num++;
                        if (num <= 4) result += dice[j].value;
                    }
                }
                if (num >= 4) {
                    score = result + 40;
                    break;
                }
            }
        } else if (box === 12) {
            for (i = 0; i < dice.length; i++) {
                num = 1;
                result = dice[i].value;
                for (j = 0; j < dice.length; j++) {
                    if (dice[i].value !== dice[j].value && dice[i].value === dice[j].value) {
                        num++;
                        result += dice[j].value;
                    }
                }
                if (num === 5) {
                    score = result + 50;
                    break;
                }
            }
        }
        console.log(score);
        return score;
    }
}
