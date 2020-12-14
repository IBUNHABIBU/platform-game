import 'phaser';
export default class PreloaderScene extends Phaser.Scene{
  constructor(){
    super('Preloader');
  }
  preload(){
    this.add.image(400,200, 'logo');
    
  }
  create(){
    // this.scene.start('Game');
  }
}