var scores, roundScore, activePlayer, dice;

scores = [0, 0]; // Player 1 and Player 2
roundScore = 0; // Initial Score for round score
activePlayer = 1; // Current active player

dice = Math.floor((Math.random() * 6) + 1);

// document.querySelector('#current-' + activePlayer).textContent = dice; //Select the element
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
