<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Dice Game</title>
	<link href="//fonts.googleapis.com/css?family=Lato:100,300,600" rel="stylesheet" type="text/css">
	<link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css">
	<link href="./style.css" rel="stylesheet" type="text/css">

	<meta property="fb:admins" content="XXXXXXXXX-fb-admin-id"/>
	<meta property="og:locale" content="en_US"/>
	<meta property="og:title" content="Ken Vilar - Dice Game"/>
	<meta property="og:description" content="A simple dice game using pure JavaScript"/>
	<meta property="og:type" content="website"/>
	<meta property="og:url" content="//github.com/kenvilar/dice-game"/>
	<meta property="og:image" content="//raw.githubusercontent.com/kenvilar/dice-game/master/dice.png"/>
	<meta property="og:image:width" content="200"/>
	<meta property="og:image:height" content="200"/>
</head>
<body>

<div class="wrapper clearfix">

	<div class="player-1-panel active">
		<div class="player-name" id="name-1"></div>
		<div class="player-score" id="score-1"></div>
		<div class="player-current-box">
			<div class="player-current-label">Current</div>
			<div class="player-current-score" id="current-1"></div>
		</div>
	</div>

	<div class="player-2-panel">
		<div class="player-name" id="name-2"></div>
		<div class="player-score" id="score-2"></div>
		<div class="player-current-box">
			<div class="player-current-label">Current</div>
			<div class="player-current-score" id="current-2"></div>
		</div>
	</div>

	<button class="btn-new-game"><i class="ion-ios-plus-outline"></i>New game</button>
	<button class="btn-roll-dice"><i class="ion-ios-loop"></i>Roll dice</button>
	<button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>

	<input type="text" placeholder="Final score" class="player-final-score">

	<img src="dice6.png" alt="mydice" class="dice" id="dice-1">
	<img src="dice6.png" alt="mydice" class="dice" id="dice-2">

</div>

<script src="./main.js"></script>

</body>
</html>