import 'phaser';

var cursors;
var fish;
export default class GameScene extends Phaser.Scene{
  constructor(){
    super('Game');
  }
  create(){
    this.bg = this.add.image(240,320, 'background');
    cursors = this.input.keyboard.createCursorKeys();
  }
   makePlayer(x,y) {
     
    this.player = this.add.image(480,283,'player');
    fish = this.add.sprite(50, 640, 'spriteFish');
   }
  update(){
    if (cursors.left.isDown)
    {
        fish.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
    }
    else
    {
        

    }

    if (cursors.up.isDown && fish.body.touching.down)
    {
         this.sound.play('jump');   
        
    }
   
  }
}