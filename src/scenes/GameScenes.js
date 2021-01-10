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
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('spriteFish', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'turn',
      frames: [ { key: 'spriteFish', frame: 4 } ],
      frameRate: 20
  });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('spriteFish', { start: 5, end: 7 }),
      frameRate: 10,
      repeat: -1
  });
  }
  update(){
    if (cursors.left.isDown)
    {
        fish.setVelocityX(-300);

        fish.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        fish.setVelocityX(300);

        fish.anims.play('right', true);
    }
    else
    {
        fish.setVelocityX(0);

        fish.anims.play('turn');
    }

    if (cursors.up.isDown && fish.body.touching.down)
    {
         this.sound.play('jump');   
        fish.setVelocityY(-750);
    }
   
  }
}