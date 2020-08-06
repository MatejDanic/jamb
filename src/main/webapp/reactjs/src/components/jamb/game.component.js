
import React, { Component } from "react";
import Box from "./box.component";
import Label from "./label.component";
import DiceRack from "./dice-rack.component";
import "./game.css"
import "./button.css"
import ScoreUtil from "../../utils/score.util";

export default class Game extends Component {

    constructor() {
        super();

        this.state = {
            boxesLeft: 52,
            dice: [
                { value: 6, hold: false, label: 0 },
                { value: 6, hold: false, label: 1 },
                { value: 6, hold: false, label: 2 },
                { value: 6, hold: false, label: 3 },
                { value: 6, hold: false, label: 4 },
            ],
            annoucement: null,
            announcementMandatory: false,
            rollsLeft: 3,
            rollDisabled: false,
            diceDisabled: true,
            boxesDisabled: true,
            boxes: [
                { available: true, value: 0, filled: false, label: 0 },
                { available: false, value: 0, filled: false, label: 1 },
                { available: false, value: 0, filled: false, label: 2 },
                { available: false, value: 0, filled: false, label: 3 },
                { available: false, value: 0, filled: false, label: 4 },
                { available: false, value: 0, filled: false, label: 5 },
                { available: false, value: 0, filled: false, label: 6 },
                { available: false, value: 0, filled: false, label: 7 },
                { available: false, value: 0, filled: false, label: 8 },
                { available: false, value: 0, filled: false, label: 9 },
                { available: false, value: 0, filled: false, label: 10 },
                { available: false, value: 0, filled: false, label: 11 },
                { available: false, value: 0, filled: false, label: 12 },
                { available: false, value: 0, filled: false, label: 13 },
                { available: false, value: 0, filled: false, label: 14 },
                { available: false, value: 0, filled: false, label: 15 },
                { available: false, value: 0, filled: false, label: 16 },
                { available: false, value: 0, filled: false, label: 17 },
                { available: false, value: 0, filled: false, label: 18 },
                { available: false, value: 0, filled: false, label: 19 },
                { available: false, value: 0, filled: false, label: 20 },
                { available: false, value: 0, filled: false, label: 21 },
                { available: false, value: 0, filled: false, label: 22 },
                { available: false, value: 0, filled: false, label: 23 },
                { available: false, value: 0, filled: false, label: 24 },
                { available: true, value: 0, filled: false, label: 25 },
                { available: true, value: 0, filled: false, label: 26 },
                { available: true, value: 0, filled: false, label: 27 },
                { available: true, value: 0, filled: false, label: 28 },
                { available: true, value: 0, filled: false, label: 29 },
                { available: true, value: 0, filled: false, label: 30 },
                { available: true, value: 0, filled: false, label: 31 },
                { available: true, value: 0, filled: false, label: 32 },
                { available: true, value: 0, filled: false, label: 33 },
                { available: true, value: 0, filled: false, label: 34 },
                { available: true, value: 0, filled: false, label: 35 },
                { available: true, value: 0, filled: false, label: 36 },
                { available: true, value: 0, filled: false, label: 37 },
                { available: true, value: 0, filled: false, label: 38 },
                { available: true, value: 0, filled: false, label: 39 },
                { available: true, value: 0, filled: false, label: 40 },
                { available: true, value: 0, filled: false, label: 41 },
                { available: true, value: 0, filled: false, label: 42 },
                { available: true, value: 0, filled: false, label: 43 },
                { available: true, value: 0, filled: false, label: 44 },
                { available: true, value: 0, filled: false, label: 45 },
                { available: true, value: 0, filled: false, label: 46 },
                { available: true, value: 0, filled: false, label: 47 },
                { available: true, value: 0, filled: false, label: 48 },
                { available: true, value: 0, filled: false, label: 49 },
                { available: true, value: 0, filled: false, label: 50 },
                { available: true, value: 0, filled: false, label: 51 }
            ]
        }
        this.rollDice = this.rollDice.bind(this);
        this.toggleDice = this.toggleDice.bind(this);
        this.boxClick = this.boxClick.bind(this);
        this.fillBox = this.fillBox.bind(this);
    }

    rollDice() {
        this.setState(state => {
            for (var i = 0; i < state.dice.length; i++) {
                if (!state.dice[i].hold) state.dice[i].value = Math.round(1 + Math.random() * 5);
            }
        });
        this.setState({ rollsLeft: this.state.rollsLeft - 1, rollDisabled: this.state.rollsLeft === 1, diceDisabled: false, boxesDisabled: false })
    }

    toggleDice(label) {
        this.setState(state => {
            state.dice[label].hold = !state.dice[label].hold;
            console.log("Hold: dice ", label, " -> ", state.dice[label].hold);
        });
    }

    boxClick(label) {
        console.log("Clicked: (col ", parseInt(label/13, 10), ", box ", label%13, ")");
        this.fillBox(label);
    }

    fillBox(label) {
        var score = ScoreUtil.checkScore(label % 13, this.state.dice);
        this.setState((state) => {
            state.boxes[label].value = score;
            state.boxes[label].available = false;
            state.boxes[label].filled = true;
            if (label <= 11) {
                state.boxes[label + 1].disabled = false;
            } else if (label >= 14 && label <=25) {
                state.boxes[label - 1].disabled = false;
            }
            for (var i = 0; i < state.dice.length; i++) {
                state.dice[i].hold = false;
            }
        });
        this.setState({ rollsLeft: 3, rollDisabled: false, diceDisabled: true, boxesDisabled: true, boxesLeft: this.state.boxesLeft - 1 }, () => {
            if (this.state.boxesLeft === 0) {
                this.endGame();
            }
        });
    }

    render() {
        return (
            <div className="game">
                <DiceRack onToggleDice={this.toggleDice} onRollDice={this.rollDice} rollsDisabled={this.state.rollDisabled}
                    rollsLeft={this.state.rollsLeft} diceDisabled={this.state.diceDisabled} dice={this.state.dice} />
                <div className="form">
                    <div />
                    <Label labelClass={"label label-image"} imgUrl={"../images/field/downwards.bmp"} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/field/upwards.bmp"} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/field/any_direction.bmp"} />
                    <Label labelClass={"label"} value={"NAJAVA"} />
                    <div />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/1.bmp"} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[0]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[13]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[26]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[39]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/2.bmp"} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[1]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[14]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[27]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[40]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/3.bmp"} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[2]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[15]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[28]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[41]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/4.bmp"} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[3]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[16]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[29]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[42]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/5.bmp"} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[4]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[17]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[30]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[43]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/6.bmp"} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[5]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[18]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[31]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[44]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label label-sum"} value={"SUM"} />
                    <Label labelClass={"label label-sum-number"} id="DOWNWARDS-numberSum" />
                    <Label labelClass={"label label-sum-number"} id="UPWARDS-numberSum" />
                    <Label labelClass={"label label-sum-number"} id="ANY_DIRECTION-numberSum" />
                    <Label labelClass={"label label-sum-number"} id="ANNOUNCEMENT-numberSum" />
                    <Label labelClass={"label label-sum-number"} id="numberSum" />
                    <Label labelClass={"label"} value={"MAX"} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[6]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[19]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[32]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[45]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label"} value={"MIN"} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[7]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[20]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[33]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[46]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label label-sum"} value={"SUM"} />
                    <Label labelClass={"label label-sum-number"} id="DOWNWARDS-diffSum" />
                    <Label labelClass={"label label-sum-number"} id="UPWARDS-diffSum" />
                    <Label labelClass={"label label-sum-number"} id="ANY_DIRECTION-diffSum" />
                    <Label labelClass={"label label-sum-number"} id="ANNOUNCEMENT-diffSum" />
                    <Label labelClass={"label label-sum-number"} id="diffSum" />
                    <Label labelClass={"label"} value={"TRIS"} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[8]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[21]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[34]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[47]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label"} value={"SKALA"} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[9]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[22]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[35]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[48]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label"} value={"FULL"} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[10]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[23]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[36]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[49]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label"} value={"POKER"} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[11]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[24]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[37]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[50]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label"} value={"JAMB"} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[12]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[25]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[38]} onBoxClick={this.boxClick} />
                    <Box  boxesDisabled={this.state.boxesDisabled} variables={this.state.boxes[51]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label label-sum"} value={"SUM"} />
                    <Label labelClass={"label label-sum-number"} id="DOWNWARDS-labelSum" />
                    <Label labelClass={"label label-sum-number"} id="UPWARDS-labelSum" />
                    <Label labelClass={"label label-sum-number"} id="ANY_DIRECTION-labelSum" />
                    <Label labelClass={"label label-sum-number"} id="ANNOUNCEMENT-labelSum" />
                    <Label labelClass={"label label-sum-number"} id="labelSum" />
                    <button className="show-button rules" onClick={showRules}>Pravila</button>
                    <button className="show-button leaderboard" onClick={showLeaderboard}>Ljestvica</button>
                    <Label labelClass={"label label-sum-number-final"} id="labelSum" />
                </div>
            </div>
        )
    }

    endGame = () => {
        console.log("END");
    }
}

function showRules() {
    alert("Bacanjem kockica postižu se odredeni rezultati koji se upisuju u obrazac. Na kraju igre postignuti se rezultati zbrajaju.\n" +
        "Nakon prvog bacanja, igrac gleda u obrazac i odlucuje hoce li nešto odmah upisati ili ce igrati dalje.\n" +
        "U jednom potezu igrac može kockice (sve ili samo one koje izabere) bacati tri puta\n" +
        "Prvi stupac obrasca upisuje se odozgo prema dolje, a drugom obrnuto. U treci stupac rezultati se upisuju bez odredenog redosljeda.\n" +
        "Cetvrti stupac mora se popunjavati tako da se nakon prvog bacanja najavljuje igra za odredeni rezultat.\n" +
        "Igrac je obavezan u to polje upisati ostvareni rezultat bez obzira da li mu to nakon tri bacanja odgovara ili ne.\n" +
        "Rezultat se može, ali ne mora upisati u cetvrti stupac nakon prvog bacanja.");
}

function showLeaderboard() {
    var http = new XMLHttpRequest();
    //	var url = 'https://jamb-remote.herokuapp.com/scores';
    var url = 'http://localhost:8080/scores';
    http.open('GET', url, true);

    http.addEventListener('load', () => {
        if (http.readyState === 4 && http.status === 200) {

            var response = JSON.parse(http.responseText);
            var text = '';
            for (var i = 0; i < response.length; i++) {
                var obj = response[i];
                text += (i + 1) + '. ' + obj.value + ' - ' + obj.value + '\n';
            }
            alert('Najbolji rezultati ovaj tjedan:\n' + text);
        }
    });
    http.send();
}
