var scores, rolledScore, activePlayer, isGameActive;

reset();

document.querySelector('.btn-roll-dice').addEventListener('click', function () {
	if (isGameActive) {
		//Random number
		var dice = Math.floor((Math.random() * 6) + 1);
		//Display result
		var diceObj1 = document.querySelector('#dice-1');
		var diceObj2 = document.querySelector('#dice-2');
		diceObj1.style.display = 'block';
		diceObj2.style.display = 'block';
		diceObj1.src = 'dice' + dice + '.png';
		diceObj2.src = 'dice' + dice + '.png';
		/* TODO */
		//Update round score if the rolled number is not 1
		if (dice !== 1) {
			//Add score
			rolledScore = rolledScore + dice;
			document.querySelector('#current-' + activePlayer).textContent = rolledScore;
		} else {
			nextPlayer();
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function () {
	if (isGameActive) {
		//Add rolled score to the player main score
		scores[activePlayer - 1] = scores[activePlayer - 1] + rolledScore;

		//Update and display the player main score
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer - 1];

		//Check if the player won the game
		if (scores[activePlayer - 1] >= 10) {
			//id="name-1"
			document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';

			document.querySelector('#dice-1').style.display = 'none';
			document.querySelector('#dice-2').style.display = 'none';

			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

			isGameActive = false;
		} else {
			nextPlayer();
		}
	}
});

document.querySelector('.btn-new-game').addEventListener('click', reset);

function nextPlayer() {
	document.getElementById('current-1').textContent = '0';
	document.getElementById('current-2').textContent = '0';

	rolledScore = 0;

	activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;

	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.player-2-panel').classList.toggle('active');

	document.querySelector('#dice-1').style.display = 'none';
	document.querySelector('#dice-2').style.display = 'none';
}

function reset() {
	scores = [0, 0];
	rolledScore = 0;
	activePlayer = 1;

	isGameActive = true;

	document.querySelector('#name-1').textContent = 'PLAYER 1';
	document.querySelector('#name-2').textContent = 'PLAYER 2';

	document.querySelector('#dice-1').style.display = 'none';
	document.querySelector('#dice-2').style.display = 'none';

	document.getElementById('score-1').textContent = '0';
	document.getElementById('score-2').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('current-2').textContent = '0';

	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-2-panel').classList.remove('winner');

	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-2-panel').classList.remove('active');

	document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}


///////
// document.querySelector('#current-' + activePlayer).textContent = dice; //Select the element
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
