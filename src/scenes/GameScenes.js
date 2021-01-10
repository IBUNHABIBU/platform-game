import 'phaser';
export default class GameScene extends Phaser.Scene{
  constructor(){
    super('Game');
  }
  create(){
    this.bg = this.add.image(240,320, 'background');
    this.player = this.add.image(480,283,'player');
    //   this.player.x += 1;
  }
  update(){
    var keyObj = this.input.keyboard.addKey('LEFT');
    var isDown = keyObj.isDown;
    if(isDown){
      this.player.x -= 1;
    }
   
  }
}