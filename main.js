var scores, roundScore, activePlayer, dice;

scores = [0, 0]; // Player 1 and Player 2
roundScore = 0; // Initial Score for round score
activePlayer = 0; // Current active player

dice = Math.random(Math.floor() * 6);

document.querySelector('#current-1').textContent = dice; //Select the element
