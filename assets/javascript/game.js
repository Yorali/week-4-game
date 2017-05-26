$(document).ready(function(){

//variables to hold goal number, user's added number
//variables for random numbers to assign to crystals
//a way to prevent random numbers from changing before numGoal is reached or exceeded


	goal = $("#numGoal");
	randGoal = 0;
	cache = 0;
	clear = $("#crystal-1");
	clearNum = {n:0};
	red = $("#crystal-2");
	redNum = {n:0};
	violet = $("#crystal-3");
	violetNum = {n:0};
	green = $("#crystal-4");
	greenNum = {n:0};
	score = $("#score");
	sum = 0;
	wins = $(".win");
	winCount = 0;
	losses = $(".loss");
	lossCount = 0;

// Start of game, rand num gen on randGoal and cache
// Assign values to crystals 	

//Conditions for if cache >= goal:
// Run rand num gen on randGoal and cache for each crystal
// 

// if cache < goal
// Do not allow for crystal values or randGoal to be overwritten


	// Create conditions that handle the score in all situations

	start();







	$("#crystal-1").click(function() {
			var arit = parseFloat($(score).text());
			sum = (arit + clearNum.n);
			score.html(sum);
			if (sum == randGoal) {
				alert('Success!!');
				winCount++;
				wins.html(winCount);
				start();
			}
			else if (sum > randGoal) {
				alert('Too much...');
				lossCount++;
				losses.html(lossCount);
				start();
			}
	});

	$("#crystal-2").click(function() {
			var arit = parseFloat($(score).text());
			sum = (arit + redNum.n);
			score.html(sum);
			if (sum == randGoal) {
				alert('Success!!');
				winCount++;
				wins.html(winCount);
				start();
			}
			else if (sum > randGoal) {
				alert('Too much...');
				lossCount++;
				losses.html(lossCount);
				start();
			}

	});

	$("#crystal-3").click(function() {
			var arit = parseFloat($(score).text());
			sum = (arit + violetNum.n);
			score.html(sum);
			if (sum == randGoal) {
				alert('Success!!');
				winCount++;
				wins.html(winCount);
				start();
			}
			else if (sum > randGoal) {
				alert('Too much...');
				lossCount++;
				losses.html(lossCount);
				start();
			}

	});

	$("#crystal-4").click(function() {
			var arit = parseFloat($(score).text());
			sum = (arit + greenNum.n);
			score.html(sum);
			if (sum == randGoal) {
				alert('Success!!');
				winCount++;
				wins.html(winCount);
				start();
			}
			else if (sum > randGoal) {
				alert('Too much...');
				lossCount++;
				losses.html(lossCount);
				start();
			}

	});		
	
	function start() {
		randGoal = Math.floor(Math.random()*(120 - 20 + 1) + 20);
		score.html(0);
		goal.innerHTML = randGoal;
		displayGoal();
		randomNum(clearNum);
		randomNum(redNum);
		randomNum(violetNum);
		randomNum(greenNum);
	};

	function randomNum(x) {
		x.n = Math.floor(Math.random() * (20 - 1 + 1) + 1);
		console.log(x.n);
	};

	function displayGoal() {
		goal.html(randGoal);
	}

	function displayScore() {
		score.html();
	}



})