
  var buttonColours = ["red", "blue", "green", "yellow"];

  var gamePattern = [];
  var userClickedPattern = [];

  var started = false;
  var level = 0;
  var score = 0;

  var timeoutFunction;
  var gameIsOn = false;
  var previousColor;

  var interval;

  $(document).keydown(function() {
    if(!started) {
      $("#level-title").text("Score " + score);
      started = true;
      // Start the initial action
      setTimeout(callNextSequence, 2000); // Random interval between 1 and 5 seconds
    }
  });

  function getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function callNextSequence() {
    if(started === true) {
      nextSequence();
      var intervalOne;
      var intervaltwo;
      if(score < 6) {
        intervalOne = 1000;
        intervaltwo = 1500;
      }
      if(score > 5 && score < 11) {
        intervalOne = 800;
        intervaltwo = 1300;
      }
      if(score > 10 && score < 16) {
        intervalOne = 600;
        intervaltwo = 1000;
      }
      if(score > 15 && score < 21) {
        intervalOne = 400;
        intervaltwo = 800;
      }
      if(score > 20) {
        intervalOne = 200;
        intervaltwo = 600;
      }
      intervalOne += 300;
      intervaltwo += 300;
      setTimeout(callNextSequence, getRandomInterval(intervalOne, intervaltwo)); // Random interval between 1 and 5 seconds
    }
  } 


  $(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playClickedSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
  });

  function checkAnswer(currentLevel) {

    if(gamePattern.length < userClickedPattern.length) {
      wrongAnswer();
      return; 
    }

    var checkableGamePattern = gamePattern.slice(0, userClickedPattern.length);
    var checkableUserPattern = userClickedPattern;

    for(var i = 0; i < checkableGamePattern.length; i++) {
      if (checkableGamePattern[i] !== checkableUserPattern[i]) {
        wrongAnswer();
        return; 
      }
    }

    score++;
    $("#level-title").text("Score " + score);
  }

  function wrongAnswer() {
    playWrongSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over - Your Score " + score + "");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }

  function nextSequence() {
    //userClickedPattern = [];
      var randomNumber = Math.floor(Math.random() * 4);
      if(previousColor === randomNumber){
        if(randomNumber === 0) {randomNumber = 3};
        if(randomNumber === 1) {randomNumber = 0};
        if(randomNumber === 2) {randomNumber = 1};
        if(randomNumber === 3) {randomNumber = 2};
      }
      previousColor = randomNumber;
      var randomChosenColour = buttonColours[randomNumber];
      gamePattern.push(randomChosenColour);
    
      animateActive(randomChosenColour);
      //playAnimationSound(randomChosenColour);
  }

  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

  function animateActive(currentColor) {
    $("#" + currentColor).addClass("active");
    setTimeout(function () {
      $("#" + currentColor).removeClass("active");
    }, 500);
  }

  function playAnimationSound(name) {
    var audio = new Audio("sounds/red.mp3");
    audio.play();
  }

  function playWrongSound(name) {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
  }

  function playClickedSound(name) {
    var audio = new Audio("sounds/yellow.mp3");
    audio.play();
  }

  function startOver() {
    score = 0;
    gamePattern = [];
    userClickedPattern = [];
    clearInterval(interval);
    started = false;
  }
