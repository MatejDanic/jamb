
import React, { Component } from "react";
import Box from "./box.component";
import Label from "./label.component";
import DiceRack from "./dice-rack.component";
import ScoreUtil from "../../utils/score.util";
import RollDiceButton from "./roll-dice-button.component";
import "./game.css";
import "./button.css";

export default class Game extends Component {

    constructor() {
        super();

        this.state = {
            // apiURL: "http://localhost:8080/",
            apiURL: "http://www.jamb.com.hr",
            formId: null,
            boxesLeft: 52,
            annoucement: null,
            announcementRequired: false,
            rollsLeft: 3,
            rollDisabled: false,
            diceDisabled: true,
            boxesDisabled: true,
            sums: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            dice: [
                { value: 6, hold: false, label: 0 },
                { value: 6, hold: false, label: 1 },
                { value: 6, hold: false, label: 2 },
                { value: 6, hold: false, label: 3 },
                { value: 6, hold: false, label: 4 }
            ],
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
        this.initializeForm = this.initializeForm.bind(this);
    }

    componentDidMount() {
        if (this.props.user) {
            var user = this.props.user;
            //	var url = 'https://jamb-remote.herokuapp.com/forms';
            var url = this.state.apiURL + 'forms';
            var http = new XMLHttpRequest();
            http.open('PUT', url, true);
            http.setRequestHeader('Content-type', 'application/json');
            http.setRequestHeader('Authorization', user.tokenType + " " + user.accessToken);
            http.addEventListener('load', () => {
                if (http.readyState === 4 && http.status === 200) {
                    var form = JSON.parse(http.responseText);
                    // console.log(form);
                    this.initializeForm(form);
                }
            });
            http.send();
        }
    }

    initializeForm(form) {
        this.setState(state => {
            state.boxesLeft = 52;
            for (var column = 0; column < 4; column++) {
                for (var box = 0; box < 13; box++) {
                    state.boxes[column * 13 + box].value = form.columns[column].boxes[box].value;
                    state.boxes[column * 13 + box].filled = form.columns[column].boxes[box].filled;
                    if (form.columns[column].boxes[box].filled) state.boxesLeft--;
                    state.boxes[column * 13 + box].available = form.columns[column].boxes[box].available;
                }
            }
            for (var i = 0; i < form.dice.length; i++) {
                state.dice[i].value = form.dice[i].value;
            }
        });
        this.setState({
            formId: form.id,
            announcement: form.announcement,
            announcementRequired: form.announcementRequired,
            rollsLeft: 3 - form.rollCount,
            rollDisabled: form.rollCount === 3 || form.announcementRequired,
            diceDisabled: form.rollCount === 0 || form.rollCount === 3,
            boxesDisabled: form.rollCount === 0
        })
    }

    rollDice() {
        if (this.props.user) {
            var user = this.props.user;
            var url = this.state.apiURL + 'forms/' + this.state.formId + "/roll";
            var text = '{';
            for (var i = 0; i < this.state.dice.length; i++) {
                text += '"' + this.state.dice[i].label + '" : "';
                text += !this.state.dice[i].hold;
                text += '",';
            }
            text = text.substring(0, text.length - 1) + '}';
            var http = new XMLHttpRequest();
            http.open('PUT', url, true);
            http.setRequestHeader('Content-type', 'application/json');
            http.setRequestHeader('Authorization', user.tokenType + " " + user.accessToken);
            http.addEventListener('load', () => {
                if (http.readyState === 4 && http.status === 200) {
                    var dice = JSON.parse(http.responseText);
                    // console.log(dice);
                    this.setState(state => {
                        for (var i = 0; i < dice.length; i++) {
                            state.dice[i].value = dice[i].value;
                        }
                    });
                    this.setState({});
                }
            });
            http.send(text);
        } else {
            this.setState(state => {
                for (var i = 0; i < state.dice.length; i++) {
                    if (!state.dice[i].hold) state.dice[i].value = Math.round(1 + Math.random() * 5);
                }
            });
        }
        var announcementRequired = this.state.announcement == null;
        for (var column = 0; column < 3; column++) {
            for (var box = 0; box < 13; box++) {
                if (!this.state.boxes[column * 13 + box].filled)
                    announcementRequired = false;
                break;
            }
        }
        this.setState({ rollsLeft: this.state.rollsLeft - 1, rollDisabled: (this.state.rollsLeft === 1 || announcementRequired), diceDisabled: (this.state.rollsLeft === 1), boxesDisabled: false });
    }

    toggleDice(label) {
        this.setState(state => {
            state.dice[label].hold = !state.dice[label].hold;
            // console.log("Hold: dice " + label + " -> " + state.dice[label].hold);
        });
        this.setState({});
    }

    boxClick(label) {
        // console.log(label);
        // console.log("Clicked: (col " + parseInt(label / 13, 10) + ", box " + (label % 13) + ")\nLabel: " + label);
        var announced = false;
        if (label >= 39) {
            if (this.state.announcement == null) {
                announced = true;
                this.announce(label);
            }
        }
        if (!announced) {
            this.fillBox(label);
        }
    }

    announce(index) {
        if (this.props.user) {
            var user = this.props.user;
            var url = this.state.apiURL + 'forms/' + this.state.formId + "/announce";
            var http = new XMLHttpRequest();
            http.open('PUT', url, true);
            http.setRequestHeader('Content-type', 'application/json');
            http.setRequestHeader('Authorization', user.tokenType + " " + user.accessToken);
            http.addEventListener('load', () => {
                if (http.readyState === 4 && http.status === 200) {
                    var box = JSON.parse(http.responseText);
                    // console.log(box);
                    this.setState({announcement: box});
                }
            });
            http.send(index%13);
        } else {
            this.setState({ boxesDisabled: true, announcement: index, rollDisabled: false });
        }
    }

    fillBox(index) {
        if (this.props.user) {
            var user = this.props.user;
            var url = this.state.apiURL + 'forms/' + this.state.formId + "/columns/" + parseInt(index/13, 10) + "/boxes/" + index%13 + "/fill";
            var http = new XMLHttpRequest();
            http.open('PUT', url, true);
            http.setRequestHeader('Content-type', 'application/json');
            http.setRequestHeader('Authorization', user.tokenType + " " + user.accessToken);
            http.addEventListener('load', () => {
                if (http.readyState === 4 && http.status === 200) {
                    var value = JSON.parse(http.responseText);
                    // console.log(value);
                    this.setState(state => {
                        state.boxes[index].value = value
                        state.boxes[index].available = false;
                        state.boxes[index].filled = true;
                        if (index <= 11) {
                            state.boxes[index + 1].available = true;
                        } else if (index >= 14 && index <= 25) {
                            state.boxes[index - 1].available = true;
                        }
                    });
                    this.setState({});
                }
            });
            http.send();
        } else {
            var score = ScoreUtil.checkScore(index % 13, this.state.dice);
            this.setState(state => {
                state.boxes[index].value = score;
                state.boxes[index].available = false;
                state.boxes[index].filled = true;
                if (index <= 11) {
                    state.boxes[index + 1].available = true;
                } else if (index >= 14 && index <= 25) {
                    state.boxes[index - 1].available = true;
                }
            });
        }
        this.setState(state => {
            for (var i = 0; i < state.dice.length; i++) {
                state.dice[i].hold = false;
            }
        });
        this.setState({ rollsLeft: 3, rollDisabled: false, diceDisabled: true, boxesDisabled: true, boxesLeft: this.state.boxesLeft - 1, announcement: null }, () => {
            if (this.state.boxesLeft === 0) {
                this.endGame();
            }
        });
        this.updateSums(index);
    }

    updateSums(label) {
        var column = parseInt(label / 13, 10);
        var box = label % 13;
        var i;
        this.setState(state => {
            if (box <= 5) {
                state.sums[column] = 0;
                for (i = 0; i < 6; i++) {
                    state.sums[column] += state.boxes[column * 13 + i].value;
                }
                if (state.sums[column] >= 60) state.sums[column] += 30;
                state.sums[4] = 0;
                for (i = 0; i < 4; i++) {
                    state.sums[4] += state.sums[i]
                }
            } else if (box >= 8) {
                state.sums[column + 10] = 0;
                for (i = 8; i < 13; i++) {
                    state.sums[column + 10] += state.boxes[column * 13 + i].value;
                }
                state.sums[14] = 0;
                for (i = 0; i < 4; i++) {
                    state.sums[14] += state.sums[10 + i]
                }
            }
            if (state.boxes[column * 13].filled && state.boxes[column * 13 + 6].filled && state.boxes[column * 13 + 7].filled) {
                state.sums[column + 5] = state.boxes[column * 13].value * (state.boxes[column * 13 + 6].value - state.boxes[column * 13 + 7].value);
                state.sums[9] = 0;
                for (i = 0; i < 4; i++) {
                    state.sums[9] += state.sums[5 + i]
                }
            }
            state.sums[15] = state.sums[4] + state.sums[9] + state.sums[14];
        })
    }

    render() {
        let sums = this.state.sums;
        let boxes = this.state.boxes;
        let gameInfo = [this.state.announcement, this.state.boxesDisabled, this.state.rollsLeft]
        return (
            <div className="game" >
                {/* <DiceRack  rollDisabled={this.state.rollDisabled} rollsLeft={this.state.rollsLeft} diceDisabled={this.state.diceDisabled} dice={this.state.dice} 
                onToggleDice={this.toggleDice} /> */}
                <div className="form">
                    <a href="https://github.com/MatejDanic/jamb">
                        <Label labelClass={"label info"} value="matej" />
                    </a>
                    <Label labelClass={"label label-image"} imgUrl={"../images/field/downwards.bmp"} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/field/upwards.bmp"} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/field/any_direction.bmp"} />
                    <Label labelClass={"label"} value={"NAJAVA"} />
                    <button className="show-button leaderboard" onClick={() => this.showLeaderboard()}>Lj e s t v i c a</button>
                    {/* <div /> */}
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/1.bmp"} />
                    <Box gameInfo={gameInfo} variables={boxes[0]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[13]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[26]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[39]} onBoxClick={this.boxClick} />
                    {/* <div /> */}
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/2.bmp"} />
                    <Box gameInfo={gameInfo} variables={boxes[1]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[14]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[27]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[40]} onBoxClick={this.boxClick} />
                    {/* <div /> */}
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/3.bmp"} />
                    <Box gameInfo={gameInfo} variables={boxes[2]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[15]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[28]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[41]} onBoxClick={this.boxClick} />
                    {/* <div /> */}
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/4.bmp"} />
                    <Box gameInfo={gameInfo} variables={boxes[3]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[16]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[29]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[42]} onBoxClick={this.boxClick} />
                    {/* <div /> */}
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/5.bmp"} />
                    <Box gameInfo={gameInfo} variables={boxes[4]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[17]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[30]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[43]} onBoxClick={this.boxClick} />
                    {/* <div /> */}
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/6.bmp"} />
                    <Box gameInfo={gameInfo} variables={boxes[5]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[18]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[31]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[44]} onBoxClick={this.boxClick} />
                    {/* <div /> */}
                    <Label labelClass={"label label-sum"} value={"zbroj (1-6) + 30 ako >= 60"} />
                    <Label labelClass={"label label-sum-number"} number={sums[0]} id="DOWNWARDS-numberSum" />
                    <Label labelClass={"label label-sum-number"} number={sums[1]} id="UPWARDS-numberSum" />
                    <Label labelClass={"label label-sum-number"} number={sums[2]} id="ANY_DIRECTION-numberSum" />
                    <Label labelClass={"label label-sum-number"} number={sums[3]} id="ANNOUNCEMENT-numberSum" />
                    <Label labelClass={"label label-sum-number"} number={sums[4]} id="numberSum" />
                    <Label labelClass={"label"} value={"MAX"} />
                    <Box gameInfo={gameInfo} variables={boxes[6]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[19]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[32]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[45]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label"} value={"MIN"} />
                    <Box gameInfo={gameInfo} variables={boxes[7]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[20]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[33]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[46]} onBoxClick={this.boxClick} />
                    <div />
                    <Label labelClass={"label label-sum"} value={"(max-min) x jedinice"} />
                    <Label labelClass={"label label-sum-number"} number={sums[5]} id="DOWNWARDS-diffSum" />
                    <Label labelClass={"label label-sum-number"} number={sums[6]} id="UPWARDS-diffSum" />
                    <Label labelClass={"label label-sum-number"} number={sums[7]} id="ANY_DIRECTION-diffSum" />
                    <Label labelClass={"label label-sum-number"} number={sums[8]} id="ANNOUNCEMENT-diffSum" />
                    <Label labelClass={"label label-sum-number"} number={sums[9]} id="diffSum" />
                    <Label labelClass={"label"} value={"TRIS"} />
                    <Box gameInfo={gameInfo} variables={boxes[8]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[21]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[34]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[47]} onBoxClick={this.boxClick} />
                    <button className="show-button rules" onClick={() => this.showRules()}>P r a v i l a</button>
                    {/* <div /> */}
                    <Label labelClass={"label"} value={"SKALA"} />
                    <Box gameInfo={gameInfo} variables={boxes[9]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[22]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[35]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[48]} onBoxClick={this.boxClick} />
                    {/* <div /> */}
                    <Label labelClass={"label"} value={"FULL"} />
                    <Box gameInfo={gameInfo} variables={boxes[10]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[23]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[36]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[49]} onBoxClick={this.boxClick} />
                    {/* <div /> */}
                    <Label labelClass={"label"} value={"POKER"} />
                    <Box gameInfo={gameInfo} variables={boxes[11]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[24]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[37]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[50]} onBoxClick={this.boxClick} />
                    {/* <div /> */}
                    <Label labelClass={"label"} value={"JAMB"} />
                    <Box gameInfo={gameInfo} variables={boxes[12]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[25]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[38]} onBoxClick={this.boxClick} />
                    <Box gameInfo={gameInfo} variables={boxes[51]} onBoxClick={this.boxClick} />
                    {/* <div /> */}
                    <Label labelClass={"label label-sum"} value={"zbroj (tris‑jamb)"} /> {/* unicode hyphen! */}
                    <Label labelClass={"label label-sum-number"} number={sums[10]} id="DOWNWARDS-labelSum" />
                    <Label labelClass={"label label-sum-number"} number={sums[11]} id="UPWARDS-labelSum" />
                    <Label labelClass={"label label-sum-number"} number={sums[12]} id="ANY_DIRECTION-labelSum" />
                    <Label labelClass={"label label-sum-number"} number={sums[13]} id="ANNOUNCEMENT-labelSum" />
                    <Label labelClass={"label label-sum-number"} number={sums[14]} id="labelSum" />
                    <RollDiceButton rollsLeft={this.state.rollsLeft} disabled={this.state.rollDisabled} onRollDice={this.rollDice} />
                    {/* <button className="show-button rules" onClick={showRules}>Pravila</button>
                    <button className="show-button leaderboard" onClick={showLeaderboard}>Ljestvica</button> */}
                    <Label labelClass={"label label-sum-number-final"} number={sums[15]} id="labelSum" />
                </div>
                <DiceRack rollDisabled={this.state.rollDisabled} rollsLeft={this.state.rollsLeft} diceDisabled={this.state.diceDisabled} dice={this.state.dice}
                    onToggleDice={this.toggleDice} />
            </div>
        )
    }

    endGame() {
        // console.log("END");
    }
    
    showRules() {
        alert("Bacanjem kockica postižu se odredeni rezultati koji se upisuju u obrazac. Na kraju igre postignuti se rezultati zbrajaju.\n" +
            "Nakon prvog bacanja, igrac gleda u obrazac i odlucuje hoce li nešto odmah upisati ili ce igrati dalje.\n" +
            "U jednom potezu igrac može kockice (sve ili samo one koje izabere) bacati tri puta\n" +
            "Prvi stupac obrasca upisuje se odozgo prema dolje, a drugom obrnuto. U treci stupac rezultati se upisuju bez odredenog redosljeda.\n" +
            "Cetvrti stupac mora se popunjavati tako da se nakon prvog bacanja najavljuje igra za odredeni rezultat.\n" +
            "Igrac je obavezan u to polje upisati ostvareni rezultat bez obzira da li mu to nakon tri bacanja odgovara ili ne.\n" +
            "Rezultat se može, ali ne mora upisati u cetvrti stupac nakon prvog bacanja.");
    }
    
    showLeaderboard() {
        var http = new XMLHttpRequest();
        //	var url = 'https://jamb-remote.herokuapp.com/scores';
        var url = this.state.apiURL + 'scores';
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
}

