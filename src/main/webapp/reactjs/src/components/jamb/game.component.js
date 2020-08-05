
import React, { Component } from "react";
import Box from "./box.component";
import Label from "./label.component";
import DiceRack from "./dice-rack.component";
import "./game.css"
import "./button.css"

export default class Game extends Component {

    constructor() {
        super();

        this.state = {
            counter: 0,
            dice: null,
            boxes: [
                { disabled: false, value: null, column:0, box:0 },
                { disabled: true, value: null, column:1, box:0 },
                { disabled: true, value: null, column:2, box:0 },
                { disabled: true, value: null, column:3, box:0 },
                { disabled: true, value: null, column:0, box:1 },
                { disabled: true, value: null, column:1, box:1 },
                { disabled: true, value: null, column:2, box:1 },
                { disabled: true, value: null, column:3, box:1 },
                { disabled: true, value: null, column:0, box:2 },
                { disabled: true, value: null, column:1, box:2 },
                { disabled: true, value: null, column:2, box:2 },
                { disabled: true, value: null, column:3, box:2 },
                { disabled: true, value: null, column:0, box:3 },
                { disabled: true, value: null, column:1, box:3 },
                { disabled: true, value: null, column:2, box:3 },
                { disabled: true, value: null, column:3, box:3 }, 
                { disabled: true, value: null, column:0, box:4 }, 
                { disabled: false, value: null, column:1, box:4 }, 
                { disabled: false, value: null, column:2, box:4 },
                { disabled: false, value: null, column:3, box:4 },
                { disabled: false, value: null, column:0, box:5 },
                { disabled: false, value: null, column:1, box:5 },
                { disabled: false, value: null, column:2, box:5 },
                { disabled: false, value: null, column:3, box:5 },
                { disabled: false, value: null, column:0, box:6 },
                { disabled: false, value: null, column:1, box:6 },
                { disabled: false, value: null, column:2, box:6 },
                { disabled: false, value: null, column:3, box:6 },
                { disabled: false, value: null, column:0, box:7 },
                { disabled: false, value: null, column:1, box:7 },
                { disabled: false, value: null, column:2, box:7 },
                { disabled: false, value: null, column:3, box:7 },
                { disabled: false, value: null, column:0, box:8 },
                { disabled: false, value: null, column:1, box:8 },
                { disabled: false, value: null, column:2, box:8 },
                { disabled: false, value: null, column:3, box:8 },
                { disabled: false, value: null, column:0, box:9 },
                { disabled: false, value: null, column:1, box:9 },
                { disabled: false, value: null, column:2, box:9 },
                { disabled: false, value: null, column:3, box:9 },
                { disabled: false, value: null, column:0, box:10 },
                { disabled: false, value: null, column:1, box:10 },
                { disabled: false, value: null, column:2, box:10 },
                { disabled: false, value: null, column:3, box:10 },
                { disabled: false, value: null, column:0, box:11 }, 
                { disabled: false, value: null, column:1, box:11 },
                { disabled: false, value: null, column:2, box:11 },
                { disabled: false, value: null, column:3, box:11 },
                { disabled: false, value: null, column:0, box:12 }, 
                { disabled: false, value: null, column:1, box:12 },
                { disabled: false, value: null, column:2, box:12 },
                { disabled: false, value: null, column:3, box:12 }
            ]
        }
        this.handleBoxFill = this.handleBoxFill.bind(this);
        this.handleDiceUpdate = this.handleDiceUpdate.bind(this);
    }

    handleDiceUpdate(dice) {
        this.setState({ dice: dice })
    }

    handleBoxFill(index, value) {
        this.setState((state) => {
            state.boxes[index].value = value;
            state.boxes[index].available = false;
            state.boxes[index].filled = true;
            state.boxes[index].disabled = true;
        })
        this.setState({});
        this.setState({counter: this.state.counter + 1}, () => {
            if (this.state.counter === 52) {
                this.endGame();
            }
        });
        
    }

    render() {
        return (
            <div className="game">
                <DiceRack onRollDice={this.handleDiceUpdate} />

                <div className="form">

                    <div />
                    <Label labelClass={"label label-image"} imgUrl={"../images/field/downwards.bmp"} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/field/upwards.bmp"} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/field/any_direction.bmp"} />
                    <Label labelClass={"label"} name={"NAJAVA"} />
                    <button className="show-button leaderboard" onClick={showLeaderboard}>Lj E S T V I C A</button>

                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/1.bmp"} />
                    <Box dice={this.state.dice} variables={this.state.boxes[0]} onFillBox={this.handleBoxFill} />
                    <Box dice={this.state.dice} variables={this.state.boxes[13]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[26]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[39]} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/2.bmp"} />
                    <Box dice={this.state.dice} variables={this.state.boxes[1]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[14]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[27]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[40]} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/3.bmp"} />
                    <Box dice={this.state.dice} variables={this.state.boxes[2]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[15]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[28]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[41]} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/4.bmp"} />
                    <Box dice={this.state.dice} variables={this.state.boxes[3]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[16]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[29]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[42]} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/5.bmp"} />
                    <Box dice={this.state.dice} variables={this.state.boxes[4]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[17]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[30]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[43]} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/6.bmp"} />
                    <Box dice={this.state.dice} variables={this.state.boxes[5]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[18]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[31]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[44]} />
                    <Label labelClass={"label label-sum"} name={"SUM"} />
                    <Label labelClass={"label label-sum-number"} id="DOWNWARDS-numberSum" />
                    <Label labelClass={"label label-sum-number"} id="UPWARDS-numberSum" />
                    <Label labelClass={"label label-sum-number"} id="ANY_DIRECTION-numberSum" />
                    <Label labelClass={"label label-sum-number"} id="ANNOUNCEMENT-numberSum" />
                    <Label labelClass={"label label-sum-number"} id="numberSum" />
                    <Label labelClass={"label"} name={"MAX"} />
                    <Box dice={this.state.dice} variables={this.state.boxes[6]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[19]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[32]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[45]} />
                    <div />
                    <Label labelClass={"label"} name={"MIN"} />
                    <Box dice={this.state.dice} variables={this.state.boxes[7]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[20]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[33]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[46]} />
                    <div />
                    <Label labelClass={"label label-sum"} name={"SUM"} />
                    <Label labelClass={"label label-sum-number"} id="DOWNWARDS-diffSum" />
                    <Label labelClass={"label label-sum-number"} id="UPWARDS-diffSum" />
                    <Label labelClass={"label label-sum-number"} id="ANY_DIRECTION-diffSum" />
                    <Label labelClass={"label label-sum-number"} id="ANNOUNCEMENT-diffSum" />
                    <Label labelClass={"label label-sum-number"} id="diffSum" />
                    <Label labelClass={"label"} name={"TRIS"} />
                    <Box dice={this.state.dice} variables={this.state.boxes[8]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[21]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[34]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[47]} />
                    <div />
                    <Label labelClass={"label"} name={"SKALA"} />
                    <Box dice={this.state.dice} variables={this.state.boxes[9]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[22]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[35]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[48]} />
                    <div />
                    <Label labelClass={"label"} name={"FULL"} />
                    <Box dice={this.state.dice} variables={this.state.boxes[10]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[23]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[36]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[49]} />
                    <div />
                    <Label labelClass={"label"} name={"POKER"} />
                    <Box dice={this.state.dice} variables={this.state.boxes[11]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[24]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[37]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[50]} />
                    <div />
                    <Label labelClass={"label"} name={"JAMB"} />
                    <Box dice={this.state.dice} variables={this.state.boxes[12]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[25]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[38]} />
                    <Box dice={this.state.dice} variables={this.state.boxes[51]} />
                    <div />
                    <Label labelClass={"label label-sum"} name={"SUM"} />
                    <Label labelClass={"label label-sum-number"} id="DOWNWARDS-labelSum" />
                    <Label labelClass={"label label-sum-number"} id="UPWARDS-labelSum" />
                    <Label labelClass={"label label-sum-number"} id="ANY_DIRECTION-labelSum" />
                    <Label labelClass={"label label-sum-number"} id="ANNOUNCEMENT-labelSum" />
                    <Label labelClass={"label label-sum-number"} id="labelSum" />
                    <button className="show-button rules" onClick={showRules}>Pravila</button>
                    <Label labelClass={"label label-sum-number-final"} id="labelSum" />
                </div>
            </div>
        )
    }
    
    endGame() {
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
                text += (i + 1) + '. ' + obj.value + ' - ' + obj.name + '\n';
            }
            alert('Najbolji rezultati ovaj tjedan:\n' + text);
        }
    });
    http.send();
}
