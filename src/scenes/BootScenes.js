import Phaser from 'phaser';

import logo from"../assets/images/logo.jpg";
export default class BootScene extends Phaser.Scene{
  constructor(){
    super('Boot');
  }
  preload () {
    this.load.image('logo', logo);
  }
   
  create () {
    this.scene.start('Preloader');
    this.add.image(400,300, logo);
  }
};