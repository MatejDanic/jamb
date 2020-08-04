
import React, { Component } from "react";
import Box from "./box.component";
import Label from "./label.component";
import "./form.css"
import "./button.css"

export default class Form extends Component {
    render() {
        return (
            <div className="form">

                <div />
                <Label labelClass={"label label-image"} imgUrl={"../images/field/downwards.bmp"} />
                <Label labelClass={"label label-image"} imgUrl={"../images/field/upwards.bmp"} />
                <Label labelClass={"label label-image"} imgUrl={"../images/field/any_direction.bmp"} />
                <Label labelClass={"label"} name={"NAJAVA"} />
                <button className="show-button leaderboard" onClick={showLeaderboard}>Lj E S T V I C A</button>

                <Label labelClass={"label label-image"} imgUrl={"../images/dice/1.bmp"} />
                <Box column={0} box={0} />
                <Box column={1} box={0} />
                <Box column={2} box={0} />
                <Box column={3} box={0} />
                <Label labelClass={"label label-image"} imgUrl={"../images/dice/2.bmp"} />
                <Box column={0} box={1} />
                <Box column={1} box={1} />
                <Box column={2} box={1} />
                <Box column={3} box={1} />
                <Label labelClass={"label label-image"} imgUrl={"../images/dice/3.bmp"} />
                <Box column={0} box={2} />
                <Box column={1} box={2} />
                <Box column={2} box={2} />
                <Box column={3} box={2} />
                <Label labelClass={"label label-image"} imgUrl={"../images/dice/4.bmp"} />
                <Box column={0} box={3} />
                <Box column={1} box={3} />
                <Box column={2} box={3} />
                <Box column={3} box={3} />
                <Label labelClass={"label label-image"} imgUrl={"../images/dice/5.bmp"} />
                <Box column={0} box={4} />
                <Box column={1} box={4} />
                <Box column={2} box={4} />
                <Box column={3} box={4} />
                <Label labelClass={"label label-image"} imgUrl={"../images/dice/6.bmp"} />
                <Box column={0} box={5} />
                <Box column={1} box={5} />
                <Box column={2} box={5} />
                <Box column={3} box={5} />
                <Label labelClass={"label label-sum"} name={"SUM"} />
                <Label labelClass={"label label-sum-number"} id="DOWNWARDS-numberSum" />
                <Label labelClass={"label label-sum-number"} id="UPWARDS-numberSum" />
                <Label labelClass={"label label-sum-number"} id="ANY_DIRECTION-numberSum" />
                <Label labelClass={"label label-sum-number"} id="ANNOUNCEMENT-numberSum" />
                <Label labelClass={"label label-sum-number"} id="numberSum" />
                <Label labelClass={"label"} name={"MAX"} />
                <Box column={0} box={6} />
                <Box column={1} box={6} />
                <Box column={2} box={6} />
                <Box column={3} box={6} />
                <div />
                <Label labelClass={"label"} name={"MIN"} />
                <Box column={0} box={7} />
                <Box column={1} box={7} />
                <Box column={2} box={7} />
                <Box column={3} box={7} />
                <div />
                <Label labelClass={"label label-sum"} name={"SUM"} />
                <Label labelClass={"label label-sum-number"} id="DOWNWARDS-diffSum" />
                <Label labelClass={"label label-sum-number"} id="UPWARDS-diffSum" />
                <Label labelClass={"label label-sum-number"} id="ANY_DIRECTION-diffSum" />
                <Label labelClass={"label label-sum-number"} id="ANNOUNCEMENT-diffSum" />
                <Label labelClass={"label label-sum-number"} id="diffSum" />
                <Label labelClass={"label"} name={"TRIS"} />
                <Box column={0} box={8} />
                <Box column={1} box={8} />
                <Box column={2} box={8} />
                <Box column={3} box={8} />
                <div />
                <Label labelClass={"label"} name={"SKALA"} />
                <Box column={0} box={9} />
                <Box column={1} box={9} />
                <Box column={2} box={9} />
                <Box column={3} box={9} />
                <div />
                <Label labelClass={"label"} name={"FULL"} />
                <Box column={0} box={10} />
                <Box column={1} box={10} />
                <Box column={2} box={10} />
                <Box column={3} box={10} />
                <div />
                <Label labelClass={"label"} name={"POKER"} />
                <Box column={0} box={11} />
                <Box column={1} box={11} />
                <Box column={2} box={11} />
                <Box column={3} box={11} />
                <div />
                <Label labelClass={"label"} name={"JAMB"} />
                <Box column={0} box={12} />
                <Box column={1} box={12} />
                <Box column={2} box={12} />
                <Box column={3} box={12} />
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
        )
    }
}


// start() {
//     diceRolls = 0;
// var buttonDice = document.querySelectorAll('DiceButton');
//     buttonRollDice = document.getElementById("roll-dice");
//     gridItems = [];
//     sums = [];
//     announcement = -1;
//     counter = 0;
//     var i, j;

// for (var i = 0; i < buttonDice.length; i++) {
//     buttonDice[i].style.border = "4px solid gray";
//     buttonDice[i].style.backgroundImage = 'url(images/dice/6.bmp)';
//     buttonDice[i].value = 6;
//     buttonDice[i].disabled = true;
//     buttonDice[i].hold = false;
// }
//     for (i = 0; i < 4; i++) {
//         for (j = 0; j < 13; j++) {
//             gridItems.push(document.getElementById(i * 13 + j));
//             gridItems[i * 13 + j].disabled = true;
//             gridItems[i * 13 + j].filled = false;
//             gridItems[i * 13 + j].available = false;
//             gridItems[i * 13 + j].value = 0;
//         }
//     }

//     var name;
//     for (i = 0; i < 4; i++) {
//         switch (i) {
//             case 0:
//                 name = 'DOWNWARDS';
//                 break;
//             case 1:
//                 name = 'UPWARDS';
//                 break;
//             case 2:
//                 name = 'ANY_DIRECTION';
//                 break;
//             case 3:
//                 name = 'ANNOUNCEMENT';
//                 break;
//             default:
//                 name = 'DOWNWARDS';
//         }
//         for (j = 0; j < 3; j++) {
//             switch (j) {
//                 case 0:
//                     name += "-numberSum";
//                     break;
//                 case 1:
//                     name += "-diffSum";
//                     break;
//                 case 2:
//                     name += "-labelSum";
//                     break;
//                 default:
//                     name += "-numberSum";
//             }
//             sums.push(document.getElementById(name))
//             sums[i * 3 + j].value = 0;
//             name = name.split("-")[0];
//         }
//     }
//     sums.push(document.getElementById('numberSum'));
//     sums.push(document.getElementById('diffSum'));
//     sums.push(document.getElementById('labelSum'));
//     sums.push(document.getElementById('finalSum'));
//     sums[12].value = 0;
//     sums[13].value = 0;
//     sums[14].value = 0;
//     sums[15].value = 0;
//     this.initializeGrid();
// }

// initializeGrid() {
//     gridItems[0].available = true;

//     gridItems[25].available = true;

//     for (var j = 0; j < 26; j++) {
//         gridItems[26 + j].available = true;
//     }
//     this.updateSums();
// }

// toggleButtons() {
//     var i;
//     var isAnnouncementRequired = true;
//     for (i = 0; i < 39; i++) {
//         if (!gridItems[i].filled) {
//             isAnnouncementRequired = false;
//             break;
//         }
//     }
//     if (diceRolls === 0) {
//         buttonRollDice.disabled = false;
//         buttonRollDice.className = 'button-roll-dice';
//         for (i = 0; i < gridItems.length; i++) {
//             gridItems[i].disabled = true;
//         }
//         for (i = 0; i < buttonDice.length; i++) {
//             buttonDice[i].disabled = true;
//             buttonDice[i].style.border = "4px solid gray";
//             buttonDice[i].hold = false;
//         }
//     } else if (diceRolls === 1) {
//         for (i = 0; i < buttonDice.length; i++) {
//             buttonDice[i].style.border = "4px solid black";
//         }
//         for (i = 0; i < gridItems.length; i++) {
//             if (gridItems[i].available === true) {
//                 gridItems[i].disabled = false;
//             }
//         }
//         for (i = 0; i < buttonDice.length; i++) {
//             buttonDice[i].disabled = false;
//         }
//         if (isAnnouncementRequired) {
//             buttonRollDice.disabled = true;
//         }
//     } else if (diceRolls === 2) {
//         for (i = 39; i < 52; i++) {
//             if (i !== announcement) {
//                 gridItems[i].disabled = true;
//             }
//         }
//     } else if (diceRolls === 3) {
//         for (i = 0; i < buttonDice.length; i++) {
//             buttonDice[i].disabled = true;
//         }
//         buttonRollDice.disabled = true;
//     }
// }

// fillBox(id) {
//     document.getElementById(id).value = this.checkScore(id%13);
//     document.getElementById(id).innerText = document.getElementById(id).value;
//     this.updateSums();

//     gridItems[id].available = false;
//     gridItems[id].filled = true;
//     if (id <= 11) {
//         gridItems[parseInt(id, 10) + 1].available = true;
//     } else if (id >= 14 && id <= 25) {
//         gridItems[parseInt(id, 10) - 1].available = true;
//     }
//     diceRolls = 0;
//     this.toggleButtons();
//     counter++;
//     if (counter === 52) {
//         setTimeout(() => {
//             this.endGame();
//         }, 1000);
//     }
// }

// announce(id) {
//     announcement = id;
//     document.getElementById(id).style.border = "2px solid red";
//     for (var i = 0; i < 4; i++) {
//         for (var j = 0; j < 13; j++) {
//             gridItems[i * 13 + j].disabled = true;
//         }
//     }
//     gridItems[id].disabled = false;
// }

// updateSums() {
//     var i, j;
//     var array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//     for (i = 0; i < 4; i++) {
//         for (j = 0; j < 6; j++) {
//             array[i] += parseInt(gridItems[i * 13 + j].value, 10);
//         }
//         if (array[i] >= 60) {
//             array[i] += 30;
//         }
//         if (gridItems[i * 13 + 0].filled && gridItems[i * 13 + 6].filled && gridItems[i * 13 + 7].filled) {
//             array[i + 5] = gridItems[i * 13 + 0].value * (gridItems[i * 13 + 6].value - gridItems[i * 13 + 7].value);
//         }
//         for (j = 8; j < 13; j++) {
//             array[i + 10] += parseInt(gridItems[i * 13 + j].value, 10);
//         }
//     }
//     for (i = 0; i < 3; i++) {
//         for (j = 0; j < 4; j++) {
//             array[i * 5 + 4] += array[i * 5 + j];
//         }
//         array[15] += array[i * 5 + 4];
//     }
//     for (i = 0; i < sums.length; i++) {
//         sums[i].innerHTML = array[i];
//         sums[i].value = array[i];
//     }
// }
// }

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
