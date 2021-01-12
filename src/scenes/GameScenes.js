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
     
    // this.player = this.add.image(480,283,'player');
    const fish = this.add.sprite(x, y, 'spriteFish');
    return fish;
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