import 'phaser';

export default class GameScene extends Phaser.Scene{
  constructor(){
    super('Game');
  }
  create(){
    this.bg = this.add.image(240,320, 'background');
    this.fish = this.add.image(138,283,'fish');
    this.player = this.add.sprite(40, this.sys.config.height/2, 'player');
  }

  update(){
   
  }
}