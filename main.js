var scores, roundScore, activePlayer;

scores = [0, 0]; // Player 1 and Player 2
roundScore = 0; // Initial Score for round score
activePlayer = 1; // Current active player

document.querySelector('#dice-1').style.display = 'none';
document.querySelector('#dice-2').style.display = 'none';

document.querySelector('.btn-roll-dice').addEventListener('click', function () {
	/* TODO */
	//Random number
	var dice = Math.floor((Math.random() * 6) + 1);
	//Display result
	document.querySelector('#dice-1').style.display = 'block';
	document.querySelector('#dice-2').style.display = 'block';
	document.querySelector('#dice-1').src = 'dice' + dice + '.png';
	document.querySelector('#dice-2').src = 'dice' + dice + '.png';
});


///////
// document.querySelector('#current-' + activePlayer).textContent = dice; //Select the element
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
