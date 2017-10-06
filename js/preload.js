function preload() {
  game.load.image('sky', 'images/sky.png');
  game.load.audio('bgm', ['audio/toad.mp3', 'audio/toad.ogg']);
  game.load.image('ground', 'images/platform.png');
  game.load.image('cupcake', 'images/cupcake.png');
  game.load.spritesheet('dude', 'images/dude.png', 32, 48);
  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
}