var scores, rolledScore, activePlayer, isGameActive;

// The player looses his/her rolled scores if one of your two dices (or both of them) rolled two 6 in a row.
// Then it's the next player's turn
var lastRolledDice1, lastRolledDice2;

reset();

document.querySelector('.btn-roll-dice').addEventListener('click', function () {
	if (isGameActive) {
		var dice1 = Math.floor((Math.random() * 6) + 1);
		var dice2 = Math.floor((Math.random() * 6) + 1);

		//Display result
		var diceObj1 = document.querySelector('#dice-1');
		var diceObj2 = document.querySelector('#dice-2');

		diceObj1.src = 'dice' + dice1 + '.png';
		diceObj2.src = 'dice' + dice2 + '.png';

		diceObj1.style.display = 'block';
		diceObj2.style.display = 'block';

		//Update round score if the rolled number is not 1
		if (dice1 !== 1 && dice2 !== 1) {
			if ((dice1 === 6 && lastRolledDice1 === 6) || (dice2 === 6 && lastRolledDice2 === 6)) {
				// The player looses his/her rolled scores if one of your two dices (or both of them) rolled two 6 in a row.
				// Then it's the next player's turn
				nextPlayer();
			} else {
				//Add score
				rolledScore += dice1 + dice2;
				document.querySelector('#current-' + activePlayer).textContent = rolledScore;

				// The player looses his/her rolled scores if one of your two dices (or both of them) rolled two 6 in a row.
				// Then it's the next player's turn
				lastRolledDice1 = dice1;
				lastRolledDice2 = dice2;
			}
		} else {
			nextPlayer();
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function () {
	if (isGameActive) {
		//Add rolled score to the player main score
		scores[activePlayer - 1] += rolledScore;

		//Update and display the player main score
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer - 1];

		//Get the value of customize final score from the input text field
		var init_final_score, final_score;
		init_final_score = document.querySelector('.player-final-score').value;

		if (init_final_score) {
			final_score = init_final_score;
		} else {
			final_score = 20;
		}

		//Check if the player won the game
		if (scores[activePlayer - 1] >= final_score) {
			//id="name-1"
			document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';

			document.querySelector('#dice-1').style.display = 'none';
			document.querySelector('#dice-2').style.display = 'none';

			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

			isGameActive = false; //Stop the game and disables the buttons excluding the new game button
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

	// The player looses his/her rolled scores if one of your two dices (or both of them) rolled two 6 in a row.
	// Then it's the next player's turn
	lastRolledDice1 = 0;
	lastRolledDice2 = 0;

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

	// The player looses his/her rolled scores if one of your two dices (or both of them) rolled two 6 in a row.
	// Then it's the next player's turn
	lastRolledDice1 = 0;
	lastRolledDice2 = 0;

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
