import 'phaser';

export default class GameScene extends Phaser.Scene{
  constructor(){
    super('Game');
  }
  init(){
    this.playerSpeed = 1.5;
    this.enemySpeed = 2;
    this.enemyMaxY = 280;
    this.ememyMinY = 80;
  }
  create(){
    this.bg = this.add.image(240,320, 'background');
    this.fish = this.add.image(138,283,'fish');
    this.player = this.add.sprite(40,this.sys.game.config.height/2,'player');
    this.player.setScale(0.5);
    this.treasure = this.add.sprite(this.sys.game.config.height/2-80,this.sys.game.config.height/2,'treasure');
    this.treasure.setScale(0.5);
    this.enemy = this.add.group({
      key: 'dragon',
      repeat: 5,
      setXY: {
        x: 100,
        y: 100,
        stepX: 80,
        stepY: 20
      }
    });
    Phaser.Actions.ScaleXY(this.enemy.getChildren(), -0.5, -0.5);
  }
  update(){
   if(this.input.activePointer.isDown){
     this.player.x += this.playerSpeed ;
   }
   if(Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(),this.treasure.getBounds())){
    this.gameOver();
  }
  }
  gameOver(){
    this.scene.restart();
  }
}