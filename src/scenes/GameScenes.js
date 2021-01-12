import 'phaser';

var cursors;
var fish;
export default class GameScene extends Phaser.Scene{
  constructor(){
    super('Game');
  }
  create(){
    this.bg = this.add.image(240,320, 'background');
    this.player = this.add.image(480,283,'player');
    fish = this.add.sprite(50, 640, 'spriteFish');
    
    cursors = this.input.keyboard.createCursorKeys();
  });

  }
  update(){
    if (cursors.left.isDown)
    {
        fish.x += 1;

        fish.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        fish.anims.play('right', true);
    }
    else
    {
        fish.x += 1;

        fish.anims.play('turn');
    }

    if (cursors.up.isDown && fish.body.touching.down)
    {
         this.sound.play('jump');   
        fish.x += 1;
    }
   
  }
}