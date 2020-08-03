
import React, { Component } from "react";
import "./form.css"
import Box from "./box.component";
import LabelImage from "./label-image.component";

export default class Form extends Component {
    render() {
        return (
            <div className="form">
                <div className="empty-item" />
                <LabelImage imgUrl={"../images/field/downwards.bmp"} />
                <img className="label-image" src="../images/field/upwards.bmp" alt="jamb" />
                <img className="label-image" src="../images/field/any_direction.bmp" alt="jamb" />
                <div className="label">NAJAVA</div>
                <div className="empty-item" />
                <img className="label-image" src="../images/dice/1.bmp" alt="jamb" />
                <Box column={0} box={0}/>
                <Box column={1} box={0}/>
                <Box column={2} box={0}/>
                <Box column={3} box={0}/>
                <div className="empty-item" />
                <img className="label-image" src="../images/dice/2.bmp" alt="jamb" />
                <Box column={0} box={1}/>
                <Box column={1} box={1}/>
                <Box column={2} box={1}/>
                <Box column={3} box={1}/>
                <div className="empty-item" />
                <img className="label-image" src="../images/dice/3.bmp" alt="jamb" />
                <Box column={0} box={2}/>
                <Box column={1} box={2}/>
                <Box column={2} box={2}/>
                <Box column={3} box={2}/>
                <div className="empty-item" />
                <img className="label-image" src="../images/dice/4.bmp" alt="jamb" />
                <Box column={0} box={3}/>
                <Box column={1} box={3}/>
                <Box column={2} box={3}/>
                <Box column={3} box={3}/>
                <div className="empty-item" />
                <img className="label-image" src="../images/dice/5.bmp" alt="jamb" />
                <Box column={0} box={4}/>
                <Box column={1} box={4}/>
                <Box column={2} box={4}/>
                <Box column={3} box={4}/>
                <div className="empty-item" />
                <img className="label-image" src="../images/dice/6.bmp" alt="jamb" />
                <Box column={0} box={5}/>
                <Box column={1} box={5}/>
                <Box column={2} box={5}/>
                <Box column={3} box={5}/>
                <div className="empty-item" />
                <div className="label-sum">SUM</div>
                <div className="label-number" id="DOWNWARDS-numberSum" />
                <div className="label-number" id="UPWARDS-numberSum" />
                <div className="label-number" id="ANY_DIRECTION-numberSum" />
                <div className="label-number" id="ANNOUNCEMENT-numberSum" />
                <div className="label-number" id="numberSum" />
                <div className="label">MAX</div>
                <Box column={0} box={6}/>
                <Box column={1} box={6}/>
                <Box column={2} box={6}/>
                <Box column={3} box={6}/>
                <div className="empty-item" />
                <div className="label">MIN</div>
                <Box column={0} box={7}/>
                <Box column={1} box={7}/>
                <Box column={2} box={7}/>
                <Box column={3} box={7}/>
                <div className="empty-item" />
                <div className="label-sum">SUM</div>
                <div className="label-number" id="DOWNWARDS-diffSum" />
                <div className="label-number" id="UPWARDS-diffSum" />
                <div className="label-number" id="ANY_DIRECTION-diffSum" />
                <div className="label-number" id="ANNOUNCEMENT-diffSum" />
                <div className="label-number" id="diffSum" />
                <div className="label">TRIS</div>
                <Box column={0} box={8}/>
                <Box column={1} box={8}/>
                <Box column={2} box={8}/>
                <Box column={3} box={8}/>
                <div className="empty-item" />
                <div className="label">SKALA</div>
                <Box column={0} box={9}/>
                <Box column={1} box={9}/>
                <Box column={2} box={9}/>
                <Box column={3} box={9}/>
                <div className="empty-item" />
                <div className="label">FULL</div>
                <Box column={0} box={10}/>
                <Box column={1} box={10}/>
                <Box column={2} box={10}/>
                <Box column={3} box={10}/>
                <div className="empty-item" />
                <div className="label">POKER</div>
                <Box column={0} box={11}/>
                <Box column={1} box={11}/>
                <Box column={2} box={11}/>
                <Box column={3} box={11}/>
                <div className="empty-item" />
                <div className="label">JAMB</div>
                <Box column={0} box={12}/>
                <Box column={1} box={12}/>
                <Box column={2} box={12}/>
                <Box column={3} box={12}/>
                <div className="empty-item" />
                <div className="label-sum">SUM</div>
                <div className="label-number" id="DOWNWARDS-labelSum" />
                <div className="label-number" id="UPWARDS-labelSum" />
                <div className="label-number" id="ANY_DIRECTION-labelSum" />
                <div className="label-number" id="ANNOUNCEMENT-labelSum" />
                <div className="label-number" id="labelSum" />
                <button className="button-rules" onClick={showRules}>Pravila</button>
                <button className="button-leaderboard" onClick={showLeaderboard}>TOP</button>
                <div className="label-sum-final" id="finalSum" />
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
    //	var url = 'https://jamb-remote.herokuapp.com/sums';
    var url = 'http://localhost:8080/sums';
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
