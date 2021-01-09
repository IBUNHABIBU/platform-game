import 'phaser';
import logoImg from "../assets/zenva_logo.png";
export default class GameScene extends Phaser.Scene{
  constructor(){
    super('Game');
  }
  preload(){
    // this.load.image("logo", logoImg);
  }
  create(){
    this.fish1 = this.add.image(400, 300, 'fish1');
    
    this.add.image(300, 300, 'fish2');
    this.add.image(200, 300, 'fish3');
    this.add.image(450, 220, 'sample');
  }
}