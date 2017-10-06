var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'location', {
  preload: preload,
  create: create,
  update: update,
  render: render
});

var score = 0;
var scoreText;
var bgm;
var timer;
var total = 0;
var playerOne = 'Player 1',
  playerTwo = 'Player 2';
var currentPlayer = playerOne;
var playerOneScore, playerTwoScore;

console.log(playerOne + ' turn');

WebFontConfig = {
  //  The Google Fonts we want to load (specify as many as you like in the array)
  google: {
    families: ['Berkshire Swash']
  }
}
console.log(WebFontConfig);

function render() {
  game.debug.text('Time until event: ' + timer.duration.toFixed(0), 550, 40);
  game.debug.text('Loop Count: ' + total, 550, 60);
}

function updateCounter() {
  total++;
  console.log('Change Player');
  changePlayer()
}

function changePlayer() {
  if (currentPlayer == playerOne) {
    console.log(currentPlayer);
    //record score of player 1
    playerOneScore = score;
    score = 0;
    currentPlayer = playerTwo;
    var temp = document.getElementById("location");
    temp.innerHTML = "";
    game.world.removeAll();
    //reset cupcakes, score counter
    game = new Phaser.Game(800, 600, Phaser.CANVAS, 'location', {
      preload: preload,
      create: create,
      update: update,
      render: render
    });
  }
  //switch to player 2
  else if (currentPlayer == playerTwo) {
    console.log(currentPlayer);
    playerTwoScore = score;
    currentPlayer = 'finished';
  } else if (currentPlayer == 'finished') {
    console.log('playerOneScore ' + playerOneScore + 'playerTwoScore ' + playerTwoScore);
    game.world.removeAll();
    timer.removeAll();
    var winner = (playerOneScore > playerTwoScore) ? playerOne : playerTwo;
    alert('The winner is ' + winner + '!!!');
    console.log({name:winner});
    $.get('data.php',{name:winner}).done(success).fail(fail);
    return;
  }
}
function success(data){
  console.log('success');
console.log(data);

}
function fail(faildata){
  console.log('fail');

}
function bgmPause(pointer) {
  if (pointer.y < 300) {
    bgm.pause();
  } else {
    bgm.resume();
  }
}

function collectCupcake(player, cupcake) {
  // Removes the cupcakes from the screen
  cupcake.kill();
  score += 10;
  scoreText.text = 'Score: ' + score;
}
