$(document).ready(set_button);

function set_button(){
console.log('Inside set_button');
$('#start').click(start);
$('#reset').click(reset);
}
function start(){
  console.log('start_game');

}
function reset_game(){
  new Phaser.Game(800, 600, Phaser.CANVAS, 'location', {
    preload: preload,
    create: create,
    update: update,
    render: render
  });
}
function reset(){
  console.log('reset_game');
  clear();
reset_game();
}
