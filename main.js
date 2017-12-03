var scores, roundScore, activePlayer;

scores = [0, 0]; // Player 1 and Player 2
roundScore = 0; // Initial Score for round score
activePlayer = 1; // Current active player

document.querySelector('#name-1').textContent = 'PLAYER 1';
document.querySelector('#name-2').textContent = 'PLAYER 2';

document.querySelector('#dice-1').style.display = 'none'; //Initial hide the dice
document.querySelector('#dice-2').style.display = 'none'; //Initial hide the dice

document.getElementById('score-1').textContent = '0';
document.getElementById('score-2').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('current-2').textContent = '0';

document.querySelector('.btn-roll-dice').addEventListener('click', function () {
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
});


///////
// document.querySelector('#current-' + activePlayer).textContent = dice; //Select the element
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
