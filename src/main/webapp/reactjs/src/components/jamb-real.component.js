import React, { Component } from "react";
import AuthService from "../services/auth.service";
import "../jamb.css"
var diceRolls, buttonDice, buttonRollDice, gridItems, sums, announcement, counter, formId;
export default class JambReal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }

    componentDidMount() {
        console.log("JambReal - componentDidMount");
        this.start();
    }

    render() {
        return (
            <div>
                <title>Jamb</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
                <meta name="viewport" content="height=device-height, initial-scale=1, minimum-scale=1" />
                <link rel="icon" src="favicon.png" />
                <div className="game">
                    <div className="dice-rack">
                        <button className="button-dice" id="dice1" onClick={(e) => toggleDiceHold(e.target.id)} />
                        <button className="button-dice" id="dice2" onClick={(e) => toggleDiceHold(e.target.id)} />
                        <button className="button-dice" id="dice3" onClick={(e) => toggleDiceHold(e.target.id)} />
                        <button className="button-dice" id="dice4" onClick={(e) => toggleDiceHold(e.target.id)} />
                        <button className="button-dice" id="dice5" onClick={(e) => toggleDiceHold(e.target.id)} />
                    </div>
                    <div className="button-container">
                        <button className="button-roll-dice" id="roll-dice" onClick={rollDice.bind(this)}>BACI KOCKICE</button>
                    </div>
                    <div className="form">
                        <div className="empty-item" />
                        <img className="label-image" src="../images/field/downwards.bmp" alt="jamb" />
                        <img className="label-image" src="../images/field/upwards.bmp" alt="jamb" />
                        <img className="label-image" src="../images/field/any_direction.bmp" alt="jamb" />
                        <div className="label">NAJAVA</div>
                        <div className="empty-item" />
                        <img className="label-image" src="../images/dice/1.bmp" alt="jamb" />
                        <button className="box" id="0" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="13" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="26" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="39" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <div className="empty-item" />
                        <img className="label-image" src="../images/dice/2.bmp" alt="jamb" />
                        <button className="box" id="1" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="14" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="27" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="40" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <div className="empty-item" />
                        <img className="label-image" src="../images/dice/3.bmp" alt="jamb" />
                        <button className="box" id="2" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="15" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="28" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="41" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <div className="empty-item" />
                        <img className="label-image" src="../images/dice/4.bmp" alt="jamb" />
                        <button className="box" id="3" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="16" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="29" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="42" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <div className="empty-item" />
                        <img className="label-image" src="../images/dice/5.bmp" alt="jamb" />
                        <button className="box" id="4" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="17" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="30" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="43" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <div className="empty-item" />
                        <img className="label-image" src="../images/dice/6.bmp" alt="jamb" />
                        <button className="box" id="5" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="18" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="31" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="44" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <div className="empty-item" />
                        <div className="label-sum">SUM</div>
                        <div className="label-number" id="DOWNWARDS-numberSum" />
                        <div className="label-number" id="UPWARDS-numberSum" />
                        <div className="label-number" id="ANY_DIRECTION-numberSum" />
                        <div className="label-number" id="ANNOUNCEMENT-numberSum" />
                        <div className="label-number" id="numberSum" />
                        <div className="label">MAX</div>
                        <button className="box" id="6" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="19" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="32" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="45" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <div className="empty-item" />
                        <div className="label">MIN</div>
                        <button className="box" id="7" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="20" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="33" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="46" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <div className="empty-item" />
                        <div className="label-sum">SUM</div>
                        <div className="label-number" id="DOWNWARDS-diffSum" />
                        <div className="label-number" id="UPWARDS-diffSum" />
                        <div className="label-number" id="ANY_DIRECTION-diffSum" />
                        <div className="label-number" id="ANNOUNCEMENT-diffSum" />
                        <div className="label-number" id="diffSum" />
                        <div className="label">TRIS</div>
                        <button className="box" id="8" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="21" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="34" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="47" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <div className="empty-item" />
                        <div className="label">SKALA</div>
                        <button className="box" id="9" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="22" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="35" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="48" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <div className="empty-item" />
                        <div className="label">FULL</div>
                        <button className="box" id="10" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="23" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="36" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="49" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <div className="empty-item" />
                        <div className="label">POKER</div>
                        <button className="box" id="11" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="24" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="37" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="50" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <div className="empty-item" />
                        <div className="label">JAMB</div>
                        <button className="box" id="12" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="25" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="38" onClick={(e) => boxClick.bind(this)(e.target.id)} />
                        <button className="box" id="51" onClick={(e) => boxClick.bind(this)(e.target.id)} />
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
                </div>
            </div>
        );
    }

    start() {
        diceRolls = 0;
        buttonDice = document.querySelectorAll("button[class^=button-dice]");
        buttonRollDice = document.getElementById("roll-dice");
        gridItems = [];
        sums = [];
        announcement = -1;
        counter = 0;
        var i, j;
        for (i = 0; i < buttonDice.length; i++) {
            buttonDice[i].style.border = "4px solid gray";
            buttonDice[i].style.backgroundImage = 'url(../images/dice/6.bmp)';
            buttonDice[i].value = 6;
            buttonDice[i].disabled = true;
        }
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 13; j++) {
                gridItems.push(document.getElementById(i * 13 + j));
                gridItems[i * 13 + j].disabled = true;
                gridItems[i * 13 + j].filled = false;
                gridItems[i * 13 + j].available = false;
            }
        }

        var name;
        for (i = 0; i < 4; i++) {
            switch (i) {
                case 0:
                    name = 'DOWNWARDS';
                    break;
                case 1:
                    name = 'UPWARDS';
                    break;
                case 2:
                    name = 'ANY_DIRECTION';
                    break;
                case 3:
                    name = 'ANNOUNCEMENT';
                    break;
                default:
                    name = 'DOWNWARDS';
            }
            for (j = 0; j < 3; j++) {
                switch (j) {
                    case 0:
                        name += "-numberSum";
                        break;
                    case 1:
                        name += "-diffSum";
                        break;
                    case 2:
                        name += "-labelSum";
                        break;
                    default:
                        name += "-numberSum";
                }
                sums.push(document.getElementById(name))
                sums[i * 3 + j].innerText = 0;
                name = name.split("-")[0];
            }
        }
        sums.push(document.getElementById('numberSum'));
        sums.push(document.getElementById('diffSum'));
        sums.push(document.getElementById('labelSum'));
        sums.push(document.getElementById('finalSum'));
        sums[12].innerText = 0;
        sums[13].innerText = 0;
        sums[14].innerText = 0;
        sums[15].innerText = 0;
        this.initializeGrid();
        this.recordGame();
    }

    initializeGrid() {
        gridItems[0].available = true;

        gridItems[25].available = true;

        for (var i = 0; i < 26; i++) {
            gridItems[26 + i].available = true;
        }
    }

    toggleButtons() {
        var isAnnouncementRequired = true;
        var i;
        for (i = 0; i < 39; i++) {
            if (!gridItems[i].filled) {
                isAnnouncementRequired = false;
                break;
            }
        }
        if (diceRolls === 0) {
            buttonRollDice.disabled = false;
            buttonRollDice.className = 'button-roll-dice';
            for (i = 0; i < gridItems.length; i++) {
                gridItems[i].disabled = true;
            }
            for (i = 0; i < buttonDice.length; i++) {
                buttonDice[i].disabled = true;
                buttonDice[i].style.border = "4px solid gray";
                buttonDice[i].hold = false;
            }
        } else if (diceRolls === 1) {
            for (i = 0; i < buttonDice.length; i++) {
                buttonDice[i].style.border = "4px solid black";
            }
            for (i = 0; i < gridItems.length; i++) {
                if (gridItems[i].available === true) {
                    gridItems[i].disabled = false;
                }
            }
            for (i = 0; i < buttonDice.length; i++) {
                buttonDice[i].disabled = false;
            }
            if (isAnnouncementRequired) {
                buttonRollDice.disabled = true;
            }
        } else if (diceRolls === 2) {
            for (i = 39; i < 52; i++) {
                if (i !== announcement) {
                    gridItems[i].disabled = true;
                }
            }
        } else if (diceRolls === 3) {
            for (i = 0; i < buttonDice.length; i++) {
                buttonDice[i].disabled = true;
            }
            buttonRollDice.disabled = true;
        }
    }

    fillBox(id) {
        var column = 1
        if (id <= 12) column = 0;
        else if (id >= 39) column = 3;
        else if (id >= 26) column = 2;
        var box = id % 13;

        var http = new XMLHttpRequest();
        //	var url = 'https://jamb-remote.herokuapp.com/forms/' + formId + '/roll';
        var url = 'http://localhost:8080/forms/' + formId + '/columns/' + column + '/boxes/' + box + '/fill';

        http.open('PUT', url, true);
        http.setRequestHeader("Content-Type", "application/json");

        http.addEventListener('load', () => {
            if (http.readyState === 4 && http.status === 200) {
                var response = JSON.parse(http.responseText);
                document.getElementById(id).innerText = response.boxValue;
                this.updateSums(response);

                gridItems[id].available = false;
                gridItems[id].filled = true;
                if (id <= 11) {
                    gridItems[parseInt(id, 10) + 1].available = true;
                } else if (id >= 14 && id <= 25) {
                    gridItems[parseInt(id, 10) - 1].available = true;
                }
                diceRolls = 0;
                this.toggleButtons();
                counter++;
                if (counter === 52) {
                    setTimeout(() => {
                        this.endGame();
                    }, 1000);
                }
            }
        });
        http.send();
    }

    announce(id) {
        var http = new XMLHttpRequest();
        announcement = id;
        var boxTypeOrdinal = announcement % 13

        //	var url = 'https://jamb-remote.herokuapp.com/forms/' + formId + '/announce';
        var url = 'http://localhost:8080/forms/' + formId + '/announce';

        http.open('PUT', url, true);
        http.setRequestHeader("Content-Type", "application/json");

        http.addEventListener('load', () => {
            if (http.readyState === 4 && http.status === 200) {
                document.getElementById(id).style.border = "2px solid red";
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 13; j++) {
                        gridItems[i * 13 + j].disabled = true;
                    }
                }
                gridItems[id].disabled = false;
            }
        });
        http.send(boxTypeOrdinal);
    }

    updateSums(json) {
        document.getElementById('DOWNWARDS-numberSum').innerText = json['DOWNWARDS-numberSum'];
        document.getElementById('DOWNWARDS-diffSum').innerText = json['DOWNWARDS-diffSum'];
        document.getElementById('DOWNWARDS-labelSum').innerText = json['DOWNWARDS-labelSum'];
        document.getElementById('UPWARDS-numberSum').innerText = json['UPWARDS-numberSum'];
        document.getElementById('UPWARDS-diffSum').innerText = json['UPWARDS-diffSum'];
        document.getElementById('UPWARDS-labelSum').innerText = json['UPWARDS-labelSum'];
        document.getElementById('ANY_DIRECTION-numberSum').innerText = json['ANY_DIRECTION-numberSum'];
        document.getElementById('ANY_DIRECTION-diffSum').innerText = json['ANY_DIRECTION-diffSum'];
        document.getElementById('ANY_DIRECTION-labelSum').innerText = json['ANY_DIRECTION-labelSum'];
        document.getElementById('ANNOUNCEMENT-numberSum').innerText = json['ANNOUNCEMENT-numberSum'];
        document.getElementById('ANNOUNCEMENT-diffSum').innerText = json['ANNOUNCEMENT-diffSum'];
        document.getElementById('ANNOUNCEMENT-labelSum').innerText = json['ANNOUNCEMENT-labelSum'];
        document.getElementById('numberSum').innerText = json['numberSum'];
        document.getElementById('diffSum').innerText = json['diffSum'];
        document.getElementById('labelSum').innerText = json['labelSum'];
        document.getElementById('finalSum').innerText = json['finalSum'];
    }

    startDiceAnimation() {
        for (var i = 0; i < buttonDice.length; i++) {
            if (!buttonDice[i].hold) {
                // document(buttonDice[i]).animateRotate(360, {
                //     duration: 700,
                //     easing: 'linear',
                //     complete:  () { },
                //     step:  () { }
                // });
                buttonDice[i].style.backgroundImage = "url('../images/dice/" + buttonDice[i].value + ".bmp')";
            }
        }
    }

    // document.fn.animateRotate =  (angle, duration, easing, complete) {
    //     var args = document.speed(duration, easing, complete);
    //     var step = args.step;
    //     return this.each( (i, e) {
    //         args.complete = document.proxy(args.complete, e);
    //         args.step =  (now) {
    //             document.style(e, 'transform', 'rotate(' + now + 'deg)');
    //             if (step) return step.apply(e, arguments);
    //         };
    //         document({ deg: 0 }).animate({ deg: angle }, args);
    //     });
    // };

    recordGame() {

        const { currentUser } = this.state;
        var http = new XMLHttpRequest();
        //	var url = 'https://jamb-remote.herokuapp.com/forms';
        var url = 'http://localhost:8080/forms';
        var token = 'Bearer ' + currentUser.accessToken;
        http.open('POST', url, true);
        http.setRequestHeader('Content-type', 'application/json');
        http.setRequestHeader('Authorization', token);
        http.addEventListener('load', () => {
            if (http.readyState === 4 && http.status === 200) {
                formId = http.responseText;
                console.log(formId);
            }
        });

        http.send();
    }

    endGame() {
        alert("Cestitamo, vas rezultat je " + sums[15].value);
        // if (confirm("Cestitamo, vas rezultat je " + sums[15].value + "\nZapocni novu igru?")) {
        //     location.reload();
        // }
    }
}

function toggleDiceHold(id) {
    var elem = document.getElementById(id);
    elem.hold = !elem.hold;
    if (elem.hold) {
        elem.style.border = "4px solid red";
    } else {
        elem.style.border = "4px solid black";
    }
}

function rollDice() {
    diceRolls++;
    if (diceRolls === 1) {
        buttonRollDice.className = 'button-roll-dice gradient-1';
    } else if (diceRolls === 2) {
        buttonRollDice.className = 'button-roll-dice gradient-2';
    } else if (diceRolls === 3) {
        buttonRollDice.className = 'button-roll-dice gradient-3';
    }

    var text = '{';
    for (var i = 0; i < buttonDice.length; i++) {
        text += '"' + i + '" : "';
        text += !buttonDice[i].hold;
        text += '",';
    }
    text = text.substring(0, text.length - 1) + '}';

    var http = new XMLHttpRequest();
    //	var url = 'https://jamb-remote.herokuapp.com/forms/' + formId + '/roll';
    var url = 'http://localhost:8080/forms/' + formId + '/roll';

    http.open('PUT', url, true);
    http.setRequestHeader("Content-Type", "application/json");


    http.addEventListener('load', () => {
        if (http.readyState === 4 && http.status === 200) {
            var response = JSON.parse(http.responseText);
            for (var i = 0; i < response.length; i++) {
                var obj = response[i];
                buttonDice[obj.ordinalNumber].value = obj.value;
            }
            this.startDiceAnimation();
            this.toggleButtons();
        }
    });

    http.send(text);
}

function boxClick(id) {
    var i, j;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 13; j++) {
            if (id === i * 13 + j && i === 3) {
                if (announcement === -1) {
                    this.announce(id);
                    buttonRollDice.disabled = false;
                } else {
                    document.getElementById(id).style.border = "1px solid black";
                    announcement = -1;
                    break;
                }
            }
        }
    }
    if (announcement === -1) {
        this.fillBox(id);
    }
}

function showRules() {
    alert('Bacanjem kockica postižu se odredeni rezultati koji se upisuju u obrazac. Na kraju igre postignuti se rezultati zbrajaju.\n' +
        'Nakon prvog bacanja, igrac gleda u obrazac i odlucuje hoce li nešto odmah upisati ili ce igrati dalje.\n' +
        'U jednom potezu igrac može kockice (sve ili samo one koje izabere) bacati tri puta\n' +
        'Prvi stupac obrasca upisuje se odozgo prema dolje, a drugom obrnuto. U treci stupac rezultati se upisuju bez odredenog redosljeda.\n' +
        'Cetvrti stupac mora se popunjavati tako da se nakon prvog bacanja najavljuje igra za odredeni rezultat.\n' +
        'Igrac je obavezan u to polje upisati ostvareni rezultat bez obzira da li mu to nakon tri bacanja odgovara ili ne.\n' +
        'Rezultat se može, ali ne mora upisati u cetvrti stupac nakon prvog bacanja.');
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