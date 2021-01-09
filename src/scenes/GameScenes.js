import 'phaser';
export default class GameScene extends Phaser.Scene{
  constructor(){
    super('Game');
  }
  create(){
    this.bg = this.add.image(240,320, 'background');
    this.environment = this.add.image(240,320, 'environment');
  }
}