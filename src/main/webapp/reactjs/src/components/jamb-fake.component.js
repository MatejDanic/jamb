import React, { Component } from "react";
import Jamb from './jamb.component';
var diceRolls, buttonDice, buttonRollDice, gridItems, sums, announcement, counter;
export default class JambFake extends Component {
    componentDidMount() {
        console.log("JambFake - componentDidMount");
        start()
    }
    render() {
        return (
            <Jamb></Jamb>
        )
    }
}
function start () {
    console.log("JambFake - onload")
    
    diceRolls = 0;
    buttonDice = document.querySelectorAll('button[class^=button-dice]');
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
        buttonDice[i].hold = false;
    }
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 13; j++) {
            gridItems.push(document.getElementById(i * 13 + j));
            gridItems[i * 13 + j].disabled = true;
            gridItems[i * 13 + j].filled = false;
            gridItems[i * 13 + j].available = false;
            gridItems[i * 13 + j].value = 0;
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
            sums[i * 3 + j].value = 0;
            name = name.split("-")[0];
        }
    }
    sums.push(document.getElementById('numberSum'));
    sums.push(document.getElementById('diffSum'));
    sums.push(document.getElementById('labelSum'));
    sums.push(document.getElementById('finalSum'));
    sums[12].value = 0;
    sums[13].value = 0;
    sums[14].value = 0;
    sums[15].value = 0;
    initializeGrid();
}


function initializeGrid() {
    gridItems[0].available = true;

    gridItems[25].available = true;

    for (var j = 0; j < 26; j++) {
        gridItems[26 + j].available = true;
    }
    updateSums();
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

function toggleButtons() {
    var i;
    var isAnnouncementRequired = true;
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

function boxClick(id) {
    var i, j;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 13; j++) {
            if (id === i * 13 + j && i === 3) {
                if (announcement === -1) {
                    announce(id);
                    buttonRollDice.disabled = false;
                } else {
                    document.getElementById(id).style.border = "1px solid black";
                    announcement = -1;
                    document.getElementById(id).value = checkScore(j);
                    break;
                }
            }
        }
    }
    if (announcement === -1) {
        fillBox(id);
    }
}

function fillBox(id) {
    document.getElementById(id).innerText = document.getElementById(id).value;
    updateSums();

    gridItems[id].available = false;
    gridItems[id].filled = true;
    if (id <= 11) {
        gridItems[parseInt(id, 10) + 1].available = true;
    } else if (id >= 14 && id <= 25) {
        gridItems[parseInt(id, 10) - 1].available = true;
    }
    diceRolls = 0;
    toggleButtons();
    counter++;
    if (counter === 52) {
        setTimeout(function () {
            endGame();
        }, 1000);
    }
}

function announce(id) {
    announcement = id;
    document.getElementById(id).style.border = "2px solid red";
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 13; j++) {
            gridItems[i * 13 + j].disabled = true;
        }
    }
    gridItems[id].disabled = false;
}

function updateSums() {
    var i, j;
    var array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 6; j++) {
            array[i] += parseInt(gridItems[i * 13 + j].value, 10);
        }
        if (array[i] >= 60) {
            array[i] += 30;
        }
        if (gridItems[i * 13 + 0].filled && gridItems[i * 13 + 6].filled && gridItems[i * 13 + 7].filled) {
            array[i + 5] = gridItems[i * 13 + 0].value * (gridItems[i * 13 + 6].value - gridItems[i * 13 + 7].value);
        }
        for (j = 8; j < 13; j++) {
            array[i + 10] += parseInt(gridItems[i * 13 + j].value, 10);
        }
    }
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 4; j++) {
            array[i * 5 + 4] += array[i * 5 + j];
        }
        array[15] += array[i * 5 + 4];
    }
    for (i = 0; i < sums.length; i++) {
        sums[i].innerHTML = array[i];
        sums[i].value = array[i];
    }
}

function rollDice() {
    var number;
    diceRolls++;
    if (diceRolls === 1) {
        buttonRollDice.className = 'button-roll-dice gradient_1';
    } else if (diceRolls === 2) {
        buttonRollDice.className = 'button-roll-dice gradient_2';
    } else if (diceRolls === 3) {
        buttonRollDice.className = 'button-roll-dice gradient_3';
    }
    for (var i = 0; i < buttonDice.length; i++) {
        if (buttonDice[i].style.backgroundColor === "rgb(220, 220, 220)") {
            number = Math.floor(Math.random() * (7 - 1)) + 1;
            buttonDice[i].html('<img src="../images/dice/' + number + '.bmp">');
            buttonDice[i].value = number;
        }
    }
    startDiceAnimation();
    toggleButtons();
}

function startDiceAnimation() {
    for (var i = 0; i < buttonDice.length; i++) {
        if (!buttonDice[i].hold) {
            // buttonDice[i].animateRotate(360, {
            //     duration: 700,
            //     easing: 'linear',
            //     complete: function () { },
            //     step: function () { }
            // });
            buttonDice[i].style.backgroundImage = "url('../images/dice/" + buttonDice[i].value + ".bmp')";
        }
    }
}

// document.elem.animateRotate = function (angle, duration, easing, complete) {
//     var args = document.speed(duration, easing, complete);
//     var step = args.step;
//     return document.each(function (i, e) {
//         args.complete = document.proxy(args.complete, e);
//         args.step = function (now) {
//             document.style(e, 'transform', 'rotate(' + now + 'deg)');
//             if (step) return step.apply(e, arguments);
//         };
//         ({ deg: 0 }).animate({ deg: angle }, args);
//     });
// };

function checkScore(boxNum) {
    var score = 0;
    var i, j, num, result;

    if (boxNum <= 5) {
        for (i = 0; i < buttonDice.length; i++) {
            if (boxNum + 1 === buttonDice[i].value) {
                score += parseInt(buttonDice[i].value, 10);
            }
        }
    } else if (boxNum === 6 || boxNum === 7) {
        for (i = 0; i < buttonDice.length; i++) {
            score += parseInt(buttonDice[i].value, 10);
        }
    } else if (boxNum === 8) {
        for (i = 0; i < buttonDice.length; i++) {
            num = 1;
            result = parseInt(buttonDice[i].value, 10);
            for (j = 0; j < buttonDice.length; j++) {
                if (buttonDice[i] !== buttonDice[j] && buttonDice[i].value === buttonDice[j].value) {
                    num++;
                    if (num <= 3) result += parseInt(buttonDice[j].value, 10);
                }
            }
            if (num >= 3) {
                score = result + 10;
                break;
            }
        }
    } else if (boxNum === 9) {
        var straight = [2, 3, 4, 5];
        var hasStraight = true;
        var diceResults = [];
        for (i = 0; i < buttonDice.length; i++) {
            diceResults.push(parseInt(buttonDice[i].value, 10));
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
    } else if (boxNum === 10) {
        var hasPair = false;
        var hasTrips = false;
        for (i = 0; i < buttonDice.length; i++) {
            num = 1;
            result = parseInt(buttonDice[i].value, 10);
            for (j = 0; j < buttonDice.length; j++) {
                if (buttonDice[i] !== buttonDice[j] && buttonDice[i].value === buttonDice[j].value) {
                    num++;
                    if (num <= 3) result += parseInt(buttonDice[j].value, 10);
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

    } else if (boxNum === 11) {
        for (i = 0; i < buttonDice.length; i++) {
            num = 1;
            result = parseInt(buttonDice[i].value, 10);
            for (j = 0; j < buttonDice.length; j++) {
                if (buttonDice[i] !== buttonDice[j] && buttonDice[i].value === buttonDice[j].value) {
                    num++;
                    if (num <= 4) result += parseInt(buttonDice[j].value, 10);
                }
            }
            if (num >= 4) {
                score = result + 40;
                break;
            }
        }
    } else if (boxNum === 12) {
        for (i = 0; i < buttonDice.length; i++) {
            num = 1;
            result = parseInt(buttonDice[i].value, 10);
            for (j = 0; j < buttonDice.length; j++) {
                if (buttonDice[i] !== buttonDice[j] && buttonDice[i].value === buttonDice[j].value) {
                    num++;
                    result += parseInt(buttonDice[j].value, 10);
                }
            }
            if (num === 5) {
                score = result + 50;
                break;
            }
        }
    }
    return score;
}

function endGame() {
    alert("Cestitamo, vas rezultat je " + sums[15].value);
    // if (confirm("Cestitamo, vas rezultat je " + sums[15].value + "\nZapocni novu igru?")) {
    //     location.reload();
    // }
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

    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {

            var response = JSON.parse(http.responseText);
            var text = '';
            for (var i = 0; i < response.length; i++) {
                var obj = response[i];
                text += (i + 1) + '. ' + obj.value + ' - ' + obj.name + '\n';
            }
            alert('Najbolji rezultati ovaj tjedan:\n' + text);
        }
    }
    http.send();
}
