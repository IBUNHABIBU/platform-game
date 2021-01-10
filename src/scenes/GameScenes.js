import 'phaser';
export default class GameScene extends Phaser.Scene{
  constructor(){
    super('Game');
  }
  create(){
    this.bg = this.add.image(240,320, 'background');
    this.player = this.add.image(480,283,'player');
    fish = this.physics.add.sprite(50, 640, 'fishSpritesheet');
  }
  update(){
   
  }
}