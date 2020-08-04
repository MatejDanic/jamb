
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
            boxes: [
                { disabled: false, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" },
                { disabled: true, value: "" }, 
                { disabled: true, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" }, 
                { disabled: false, value: "" },
                { disabled: false, value: "" },
                { disabled: false, value: "" }
            ],
            diceValues: null
        }
    }

    updateDiceValues(diceValues) {
        this.setState({ diceValues: diceValues })
    }

    render() {
        return (
            <div className="game">
                <DiceRack onRollDice={this.updateDiceValues.bind(this)} />

                <div className="form">

                    <div />
                    <Label labelClass={"label label-image"} imgUrl={"../images/field/downwards.bmp"} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/field/upwards.bmp"} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/field/any_direction.bmp"} />
                    <Label labelClass={"label"} name={"NAJAVA"} />
                    <button className="show-button leaderboard" onClick={showLeaderboard}>Lj E S T V I C A</button>

                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/1.bmp"} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[0]} disabled={this.state.boxes[0].disabled} column={0} box={0} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[13]} disabled={this.state.boxes[13].disabled} column={1} box={0} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[26]} disabled={this.state.boxes[26].disabled} column={2} box={0} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[39]} disabled={this.state.boxes[39].disabled} column={3} box={0} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/2.bmp"} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[1]} disabled={this.state.boxes[1].disabled} column={0} box={1} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[14]} disabled={this.state.boxes[14].disabled} column={1} box={1} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[27]} disabled={this.state.boxes[27].disabled} column={2} box={1} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[40]} disabled={this.state.boxes[40].disabled} column={3} box={1} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/3.bmp"} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[2]} disabled={this.state.boxes[2].disabled} column={0} box={2} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[15]} disabled={this.state.boxes[15].disabled} column={1} box={2} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[28]} disabled={this.state.boxes[28].disabled} column={2} box={2} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[41]} disabled={this.state.boxes[41].disabled} column={3} box={2} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/4.bmp"} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[3]} disabled={this.state.boxes[3].disabled} column={0} box={3} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[16]} disabled={this.state.boxes[16].disabled} column={1} box={3} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[29]} disabled={this.state.boxes[29].disabled} column={2} box={3} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[42]} disabled={this.state.boxes[42].disabled} column={3} box={3} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/5.bmp"} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[4]} disabled={this.state.boxes[4].disabled} column={0} box={4} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[17]} disabled={this.state.boxes[17].disabled} column={1} box={4} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[30]} disabled={this.state.boxes[30].disabled} column={2} box={4} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[43]} disabled={this.state.boxes[43].disabled} column={3} box={4} />
                    <Label labelClass={"label label-image"} imgUrl={"../images/dice/6.bmp"} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[5]} disabled={this.state.boxes[5].disabled} column={0} box={5} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[18]} disabled={this.state.boxes[18].disabled} column={1} box={5} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[31]} disabled={this.state.boxes[31].disabled} column={2} box={5} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[44]} disabled={this.state.boxes[44].disabled} column={3} box={5} />
                    <Label labelClass={"label label-sum"} name={"SUM"} />
                    <Label labelClass={"label label-sum-number"} id="DOWNWARDS-numberSum" />
                    <Label labelClass={"label label-sum-number"} id="UPWARDS-numberSum" />
                    <Label labelClass={"label label-sum-number"} id="ANY_DIRECTION-numberSum" />
                    <Label labelClass={"label label-sum-number"} id="ANNOUNCEMENT-numberSum" />
                    <Label labelClass={"label label-sum-number"} id="numberSum" />
                    <Label labelClass={"label"} name={"MAX"} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[6]} disabled={this.state.boxes[6].disabled} column={0} box={6} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[19]} disabled={this.state.boxes[19].disabled} column={1} box={6} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[32]} disabled={this.state.boxes[32].disabled} column={2} box={6} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[45]} disabled={this.state.boxes[45].disabled} column={3} box={6} />
                    <div />
                    <Label labelClass={"label"} name={"MIN"} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[7]} disabled={this.state.boxes[7].disabled} column={0} box={7} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[20]} disabled={this.state.boxes[20].disabled} column={1} box={7} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[33]} disabled={this.state.boxes[33].disabled} column={2} box={7} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[46]} disabled={this.state.boxes[46].disabled} column={3} box={7} />
                    <div />
                    <Label labelClass={"label label-sum"} name={"SUM"} />
                    <Label labelClass={"label label-sum-number"} id="DOWNWARDS-diffSum" />
                    <Label labelClass={"label label-sum-number"} id="UPWARDS-diffSum" />
                    <Label labelClass={"label label-sum-number"} id="ANY_DIRECTION-diffSum" />
                    <Label labelClass={"label label-sum-number"} id="ANNOUNCEMENT-diffSum" />
                    <Label labelClass={"label label-sum-number"} id="diffSum" />
                    <Label labelClass={"label"} name={"TRIS"} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[8]} disabled={this.state.boxes[8].disabled} column={0} box={8} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[21]} disabled={this.state.boxes[21].disabled} column={1} box={8} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[34]} disabled={this.state.boxes[34].disabled} column={2} box={8} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[47]} disabled={this.state.boxes[47].disabled} column={3} box={8} />
                    <div />
                    <Label labelClass={"label"} name={"SKALA"} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[9]} disabled={this.state.boxes[9].disabled} column={0} box={9} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[22]} disabled={this.state.boxes[22].disabled} column={1} box={9} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[35]} disabled={this.state.boxes[35].disabled} column={2} box={9} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[48]} disabled={this.state.boxes[48].disabled} column={3} box={9} />
                    <div />
                    <Label labelClass={"label"} name={"FULL"} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[10]} disabled={this.state.boxes[10].disabled} column={0} box={10} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[23]} disabled={this.state.boxes[23].disabled} column={1} box={10} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[36]} disabled={this.state.boxes[36].disabled} column={2} box={10} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[49]} disabled={this.state.boxes[49].disabled} column={3} box={10} />
                    <div />
                    <Label labelClass={"label"} name={"POKER"} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[11]} disabled={this.state.boxes[11].disabled} column={0} box={11} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[24]} disabled={this.state.boxes[24].disabled} column={1} box={11} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[37]} disabled={this.state.boxes[37].disabled} column={2} box={11} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[50]} disabled={this.state.boxes[50].disabled} column={3} box={11} />
                    <div />
                    <Label labelClass={"label"} name={"JAMB"} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[12]} disabled={this.state.boxes[12].disabled} column={0} box={12} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[25]} disabled={this.state.boxes[25].disabled} column={1} box={12} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[38]} disabled={this.state.boxes[38].disabled} column={2} box={12} />
                    <Box diceValues={this.state.diceValues} value={this.state.boxes[51]} disabled={this.state.boxes[51].disabled} column={3} box={12} />
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
