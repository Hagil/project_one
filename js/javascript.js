var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
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

WebFontConfig =
  //  'active' means all requested fonts have finished loading
  //  We set a 1 second delay before calling 'createText'.
  //  For some reason if we don't the browser cannot render the text the first time it's created.
  {
    active: function() {
      game.time.events.add(Phaser.Timer.SECOND, createText, this);
    },
    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Berkshire Swash']
    }
  }

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

}

function changeVolume(pointer) {
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