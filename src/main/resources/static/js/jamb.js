var diceRolls;
var diceButtons;
var rollDiceButton;
var gridItems;
var scores;
var announcement;
var counter;
var formId;
var nickname;

window.onload = function () {
	diceRolls = 0;
	diceButtons = document.querySelectorAll('button[class^=dice-button]');
	rollDiceButton = document.getElementById('roll-dice');
	gridItems = [];
	scores = [];
	announcement = -1;
	counter = 0;

	for (var i = 0; i < diceButtons.length; i++) {
		diceButtons[i].style.backgroundColor = 'rgb(220, 220, 220)';
		diceButtons[i].innerHTML = "<img src='../images/dice/6.bmp'>";
		diceButtons[i].value = 6;
		diceButtons[i].disabled = true;
		diceButtons[i].hold = false;
	}
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 13; j++) {
			gridItems.push(document.getElementById(i*13+j));
			gridItems[i*13+j].disabled = true;
			gridItems[i*13+j].written = false;
			gridItems[i*13+j].available = false;
			gridItems[i*13+j].value = 0;
		}
	}

	for (var i = 0; i < 3; i++) {
		var name;
		if (i == 0) {
			name = 'upper';
		} else if (i == 1) {
			name = 'middle';
		} else if (i == 2) {
			name = 'lower';
		}
		for (var j = 0; j < 5; j ++) {
//			console.log(name+j);
			scores.push(document.getElementById(name+j))
			scores[i*5+j].value = 0;
//			console.log(i*5+j, scores[i*3+j].value)
		}
	}
	scores.push(document.getElementById('final'));
	scores[15].value = 0;
	initializeGrid();
	recordGame();
}

function initializeGrid() {
	gridItems[0].available = true;

	gridItems[25].available = true;

	for (var j = 0; j < 26; j++) {
		gridItems[26+j].available = true;
	}
//	calculateSums();
}

function replyClick(id) {
	var elem = document.getElementById(id);
	elem.hold = !elem.hold;
	if (elem.style.backgroundColor == 'rgb(220, 220, 220)') {
		elem.style.backgroundColor = 'rgb(105, 105, 105)';
	} else {
		elem.style.backgroundColor = 'rgb(220, 220, 220)';
	}
}

function announce(id) {
	announcement = id;
	document.getElementById(id).style.border = '2px solid red';
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 13; j++) {
			if (i*13+j == id) {
				gridItems[i*13+j].disabled = false;
			} else {
				gridItems[i*13+j].disabled = true;
			}
		}
	}
}

function toggleButtons() {
	var onlyAnnouncementLeft=true;
	for (var i = 0; i < 39; i++) {
		if (!gridItems[i].written){
			onlyAnnouncementLeft=false;
			break;
		}
	}

	if (diceRolls == 0) {
		rollDiceButton.disabled = false;
		for (var i = 0; i < gridItems.length; i++) {
			gridItems[i].disabled = true;
			for (var j = 0; j < diceButtons.length; j++) {
				diceButtons[j].disabled = true;
				diceButtons[j].style.backgroundColor = 'rgb(220, 220, 220)';

			}
		}
		
	} else if (diceRolls == 1) {
		for (var i = 0; i < gridItems.length; i++) {
			if (gridItems[i].available == true) {
				gridItems[i].disabled = false;
			}
		}
		for (var i = 0; i < diceButtons.length; i++) {
			diceButtons[i].disabled = false;
		}
		if (onlyAnnouncementLeft) {
			rollDiceButton.disabled = true;
		}
	} else if (diceRolls == 2) {
		for(var i = 39; i < 52; i++) {
			if (i != announcement) {
				gridItems[i].disabled = true;
			}
		}
	} else if (diceRolls == 3) {
		for (var i = 0; i < diceButtons.length; i++) {
			diceButtons[i].disabled = true;
			rollDiceButton.disabled = true;
		}
	} 
}

function fillBox(id) {
	var column = 1
	if (id <= 12) column = 0;
	else if ( id >= 39) column = 3;
	else if (id >= 26) column = 2;
	console.log(column);
	var box = id % 13;
	console.log(box);
	
	var http = new XMLHttpRequest();
//	var url = 'https://jamb-remote.herokuapp.com/forms/' + formId + '/roll';
	var url = 'http://localhost:8080/forms/' + formId + '/columns/' + column + '/boxes/' + box + '/update';

	http.open('PUT', url, true);

	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			var response = JSON.parse(http.responseText);
			console.log(response);
			
			document.getElementById(id).value = value;
			document.getElementById(finalSum).style.border = response.finalSum;
		}
	}
	http.send();
}

function rollDice() {
	diceRolls++;
	if (diceRolls == 1) {
		rollDiceButton.className = 'roll-dice-button gradient_1';
	} else if (diceRolls == 2) {
		rollDiceButton.className = 'roll-dice-button gradient_2';
	} else if (diceRolls == 3) {
		rollDiceButton.className = 'roll-dice-button gradient_3';
	}
	
	var text = '{';
	for (var i = 0; i < diceButtons.length; i++) {
		text += '"' + i + '"' + ':' + '"';
		text += !diceButtons[i].hold;
		text += '",';
	}
	text = text.substring(0, text.length - 1) + '}';
//	console.log(text);
	
	var http = new XMLHttpRequest();
//	var url = 'https://jamb-remote.herokuapp.com/forms/' + formId + '/roll';
	var url = 'http://localhost:8080/forms/' + formId + '/roll';

	http.open('PUT', url, true);
	http.setRequestHeader("Content-Type", "application/json");

	
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			var response = JSON.parse(http.responseText);
//			console.log(response)
			for (var i = 0; i < response.length; i++){
				var obj = response[i];
				diceButtons[obj.ordinalNumber].value = obj.value;
			}
			startDiceAnimation();
			toggleButtons();
		}
	}

	http.send(text);
}

function startDiceAnimation() {
	for (var i = 0; i < diceButtons.length; i++) {
//		if (diceButtons[i].style.backgroundColor == 'rgb(220, 220, 220)') {
		if (!diceButtons[i].hold) {
			$(diceButtons[i]).animateRotate(360, {
				duration: 700,
				easing: 'linear',
				complete: function () {},
				step: function () {}
			});
			$(diceButtons[i]).html("<img src='../images/dice/" + diceButtons[i].value + ".bmp'>");
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
//	var url = 'https://jamb-remote.herokuapp.com/scores/leaderboard';
	var url = 'http://localhost:8080/scores/leaderboard';
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

function showAllScores() {
	var r = confirm('Pregled rezultata resetira igru.\nZelite li nastaviti?');
	if (r == true) {
//		location.href='https://jamb-remote.herokuapp.com/scores';
		location.href='http://localhost:8080/scores'
	}
}