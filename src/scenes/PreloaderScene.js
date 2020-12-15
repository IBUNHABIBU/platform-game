import logoImg from "../assets/logo.png";
export default class PreloaderScene extends Phaser.Scene{
  constructor(){
    super('Preloader');
  }
  preload(){
    this.load.image("logo", logoImg);
  }
  create(){
    this.add.image(400, 300, 'logo');
  }
}