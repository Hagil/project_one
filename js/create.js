function create() {

  //  We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE);

  //  A simple background
  game.add.sprite(0, 0, 'sky');

  //  Create our Timer
  timer = game.time.create(false);

  //  Set a TimerEvent to occur after 2 seconds
  timer.loop(20000, updateCounter, this);

  //  Start the timer running - this is important!
  //  It won't start automatically, allowing you to hook it to button events and the like.
  timer.start();

  bgm = game.add.audio('bgm');

  bgm.play();

  game.input.onDown.add(bgmPause, this);
  //  The platforms group contains the ground and the 2 ledges we can jump on
  platforms = game.add.group();

  //  We will enable physics for any object that is created in this group
  platforms.enableBody = true;

  // Here we create the ground.
  var ground = platforms.create(0, game.world.height - 64, 'ground');

  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  ground.scale.setTo(2, 2);

  //  This stops it from falling away when you jump on it
  ground.body.immovable = true;

  //  Now let's create two ledges
  var ledge = platforms.create(400, 400, 'ground');

  ledge.body.immovable = true;

  ledge = platforms.create(-150, 250, 'ground');

  ledge.body.immovable = true;
  player = game.add.sprite(32, game.world.height - 150, 'dude');

  //  We need to enable physics on the player
  game.physics.arcade.enable(player);

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  //  Our two animations, walking left and right.
  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);

  cursors = game.input.keyboard.createCursorKeys();

  cupcakes = game.add.group();

  cupcakes.enableBody = true;

  //  Here we'll create 12 of them evenly spaced apart
  for (var i = 0; i < 12; i++) {
    //  Create a cupcake inside of the 'cupcakes' group
    var cupcake = cupcakes.create(i * 70, 0, 'cupcake');

    //  Let gravity do its thing
    cupcake.body.gravity.y = 6;

    //  This just gives each cupcake a slightly random bounce value
    cupcake.body.bounce.y = 0.7 + Math.random() * 0.2;
  }
  scoreText = game.add.text(16, 16, 'score: 0', {
    fontSize: '32px',
    fill: '#b3ffb3',
    font: WebFontConfig.google.families[0]
  });
}
