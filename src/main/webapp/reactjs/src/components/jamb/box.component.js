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
    }

    render() {
        return (
            <button disabled={this.props.disabled} className="box" onClick={this.boxClick.bind(this)} >{this.state.value}</button>
        )
    }

    boxClick() {
        console.log("clicked: (" + this.props.column + ", " + this.props.box + ")");
        this.fillBox();
    }

    fillBox() {
        this.setState({ filled: true, availabe: false }, () => {
            var score = this.checkScore();
            this.setState({ value: score });
        })
    }

    checkScore() {
        console.log("checking score");
        var box = this.props.box;
        var diceValues = this.props.diceValues;
        console.log(diceValues);
        var score = 0;
        var i, j, num, result;
        if (box <= 5) {
            box += 1;
            for (i = 0; i < diceValues.length; i++) {
                if (box.toString() === diceValues[i].value) {
                    score += parseInt(diceValues[i].value, 10);
                }
            }
        } else if (box === 6 || box === 7) {
            for (i = 0; i < diceValues.length; i++) {
                score += parseInt(diceValues[i].value, 10);
            }
        } else if (box === 8) {
            for (i = 0; i < diceValues.length; i++) {
                num = 1;
                result = parseInt(diceValues[i].value, 10);
                for (j = 0; j < diceValues.length; j++) {
                    if (diceValues[i] !== diceValues[j] && diceValues[i].value === diceValues[j].value) {
                        num++;
                        if (num <= 3) result += parseInt(diceValues[j].value, 10);
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
            for (i = 0; i < diceValues.length; i++) {
                diceResults.push(parseInt(diceValues[i].value, 10));
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
            for (i = 0; i < diceValues.length; i++) {
                num = 1;
                result = parseInt(diceValues[i].value, 10);
                for (j = 0; j < diceValues.length; j++) {
                    if (diceValues[i] !== diceValues[j] && diceValues[i].value === diceValues[j].value) {
                        num++;
                        if (num <= 3) result += parseInt(diceValues[j].value, 10);
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
            for (i = 0; i < diceValues.length; i++) {
                num = 1;
                result = parseInt(diceValues[i].value, 10);
                for (j = 0; j < diceValues.length; j++) {
                    if (diceValues[i] !== diceValues[j] && diceValues[i].value === diceValues[j].value) {
                        num++;
                        if (num <= 4) result += parseInt(diceValues[j].value, 10);
                    }
                }
                if (num >= 4) {
                    score = result + 40;
                    break;
                }
            }
        } else if (box === 12) {
            for (i = 0; i < diceValues.length; i++) {
                num = 1;
                result = parseInt(diceValues[i].value, 10);
                for (j = 0; j < diceValues.length; j++) {
                    if (diceValues[i] !== diceValues[j] && diceValues[i].value === diceValues[j].value) {
                        num++;
                        result += parseInt(diceValues[j].value, 10);
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
