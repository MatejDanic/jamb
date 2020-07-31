var diceRolls;
var buttonDice;
var buttonRollDice;
var gridItems;
var sums;
var announcement;
var counter;
var formId;
var nickname;

window.onload = function () {
	diceRolls = 0;
	buttonDice = document.querySelectorAll("button[class^=button-dice]");
	buttonRollDice = document.getElementById("roll-dice");
	gridItems = [];
	sums = [];
	announcement = -1;
	counter = 0;

	for (var i = 0; i < buttonDice.length; i++) {
		buttonDice[i].style.border = "4px solid gray";
		buttonDice[i].style.backgroundImage = 'url(../images/dice/6.bmp)';
		buttonDice[i].value = 6;
		buttonDice[i].disabled = true;
	}
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 13; j++) {
			gridItems.push(document.getElementById(i*13+j));
			gridItems[i*13+j].disabled = true;
			gridItems[i*13+j].filled = false;
			gridItems[i*13+j].available = false;
		}
	}

	for (var i = 0; i < 4; i++) {
		var name;
		switch(i) {
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
		}
		for (var j = 0; j < 3; j ++) {
			switch(j) {
			case 0:
				name += "-numberSum";
				break;
			case 1:
				name += "-diffSum";
				break;
			case 2:
				name += "-labelSum";
				break;
			}
			sums.push(document.getElementById(name))
			sums[i*3+j].innerText = 0;
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
	initializeGrid();
	recordGame();
}

function initializeGrid() {
	gridItems[0].available = true;

	gridItems[25].available = true;

	for (var j = 0; j < 26; j++) {
		gridItems[26+j].available = true;
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

function toggleButtons() {
	var isAnnouncementRequired=true;
	for (var i = 0; i < 39; i++) {
		if (!gridItems[i].filled){
			isAnnouncementRequired=false;
			break;
		}
	}
	if (diceRolls == 0) {
		buttonRollDice.disabled = false;
		buttonRollDice.className = 'button-roll-dice';
		for (var i = 0; i < gridItems.length; i++) {
			gridItems[i].disabled = true;
		}
		for (var i = 0; i < buttonDice.length; i++) {
			buttonDice[i].disabled = true;
			buttonDice[i].style.border = "4px solid gray";
			buttonDice[i].hold = false;
		}
	} else if (diceRolls == 1) {
		for (var i = 0; i < buttonDice.length; i++) {
			buttonDice[i].style.border = "4px solid black";
		}
		for (var i = 0; i < gridItems.length; i++) {
			if (gridItems[i].available == true) {
				gridItems[i].disabled = false;
			}
		}
		for (var i = 0; i < buttonDice.length; i++) {
			buttonDice[i].disabled = false;
		}
		if (isAnnouncementRequired) {
			buttonRollDice.disabled = true;
		}
	} else if (diceRolls == 2) {
		for(var i = 39; i < 52; i++) {
			if (i != announcement) {
				gridItems[i].disabled = true;
			}
		}
	} else if (diceRolls == 3) {
		for (var i = 0; i < buttonDice.length; i++) {
			buttonDice[i].disabled = true;
		}
		buttonRollDice.disabled = true;
	} 
}

function boxClick (id) {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 13; j++) {
			if (id == i*13+j && i == 3) {
				if (announcement == -1) {
					announce(id);
					buttonRollDice.disabled = false;
				} else {
					document.getElementById(id).style.border = "1px solid black";
					announcement = -1;
				}
			}
		}
	}
	if (announcement == -1) {
		fillBox(id);
	}
}

function fillBox(id) {
	var column = 1
	if (id <= 12) column = 0;
	else if ( id >= 39) column = 3;
	else if (id >= 26) column = 2;
	var box = id % 13;

	var http = new XMLHttpRequest();
//	var url = 'https://jamb-remote.herokuapp.com/forms/' + formId + '/roll';
	var url = 'http://localhost:8080/forms/' + formId + '/columns/' + column + '/boxes/' + box + '/fill';

	http.open('PUT', url, true);
	http.setRequestHeader("Content-Type", "application/json");

	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			var response = JSON.parse(http.responseText);
			document.getElementById(id).innerText = response.boxValue;	
			updateSums(response);

			gridItems[id].available = false;
			gridItems[id].filled = true;
			if (id <= 11) {
				gridItems[parseInt(id, 10)+1].available = true;
			} else if (id >= 14 && id <= 25) {
				gridItems[parseInt(id, 10)-1].available = true;
			}
			diceRolls = 0;
			toggleButtons();
		}
	}
	http.send();
}

function announce(id) {
	var http = new XMLHttpRequest();
	announcement = id;
	boxTypeOrdinal = announcement%13

//	var url = 'https://jamb-remote.herokuapp.com/forms/' + formId + '/announce';
	var url = 'http://localhost:8080/forms/' + formId + '/announce' ;

	http.open('PUT', url, true);	
	http.setRequestHeader("Content-Type", "application/json");

	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			document.getElementById(id).style.border = "2px solid red";
			for (var i = 0; i < 4; i++) {
				for (var j = 0; j < 13; j++) {
					gridItems[i*13+j].disabled = true;
				}
			}
			gridItems[id].disabled = false;
		}
	}
	http.send(boxTypeOrdinal);
}

function updateSums(json) {
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

function rollDice() {
	diceRolls++;
	if (diceRolls == 1) {
		buttonRollDice.className = 'button-roll-dice gradient-1';
	} else if (diceRolls == 2) {
		buttonRollDice.className = 'button-roll-dice gradient-2';
	} else if (diceRolls == 3) {
		buttonRollDice.className = 'button-roll-dice gradient-3';
	}

	var text = '{';
	for (var i = 0; i < buttonDice.length; i++) {
		text += '"' + i + '"' + ':' + '"';
		text += !buttonDice[i].hold;
		text += '",';
	}
	text = text.substring(0, text.length - 1) + '}';

	var http = new XMLHttpRequest();
//	var url = 'https://jamb-remote.herokuapp.com/forms/' + formId + '/roll';
	var url = 'http://localhost:8080/forms/' + formId + '/roll';

	http.open('PUT', url, true);
	http.setRequestHeader("Content-Type", "application/json");


	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			var response = JSON.parse(http.responseText);
			for (var i = 0; i < response.length; i++){
				var obj = response[i];
				buttonDice[obj.ordinalNumber].value = obj.value;
			}
			startDiceAnimation();
			toggleButtons();
		}
	}

	http.send(text);
}

function startDiceAnimation() {
	for (var i = 0; i < buttonDice.length; i++) {
		if (!buttonDice[i].hold) {
			$(buttonDice[i]).animateRotate(360, {
				duration: 700,
				easing: 'linear',
				complete: function () {},
				step: function () {}
			});
			buttonDice[i].style.backgroundImage="url('../images/dice/" + buttonDice[i].value + ".bmp')";
		}
	}
	toggleButtons();
}

$.fn.animateRotate = function(angle, duration, easing, complete) {
	var args = $.speed(duration, easing, complete);
	var step = args.step;
	return this.each(function(i, e) {
		args.complete = $.proxy(args.complete, e);
		args.step = function(now) {
			$.style(e, 'transform', 'rotate(' + now + 'deg)');
			if (step) return step.apply(e, arguments);
		};
		$({deg: 0}).animate({deg: angle}, args);
	});
};

function recordGame() {
	nickname = prompt('Molimo unesite nadimak:');
	var http = new XMLHttpRequest();
//	var url = 'https://jamb-remote.herokuapp.com/forms';
	var url = 'http://localhost:8080/forms';

	http.open('POST', url, true);
	http.setRequestHeader('Content-type', 'application/json');

	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			formId = http.responseText;
		}
	}
	http.send(nickname);
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

	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {

			var response = JSON.parse(http.responseText);
			var text = '';
			for (var i = 0; i < response.length; i++){
				var obj = response[i];
				text += (i+1) + '. ' + obj.value + ' - ' + obj.name + '\n';
			}
			alert('Najbolji rezultati ovaj tjedan:\n' + text);
		}
	}
	http.send();
}