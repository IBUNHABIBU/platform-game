import 'phaser';

export default class GameScene extends Phaser.Scene{
  constructor(){
    super('Game');
  }
  init(){
    this.playerSpeed = 1.5;
    this.enemySpeed = 2;
    this.enemyMaxY = 680;
    this.ememyMinY = 3;
  }
  create(){
    this.bg = this.add.image(240,320, 'background');
    this.fish = this.add.image(138,3,'fish');
    this.player = this.add.sprite(40,this.sys.game.config.height/2,'player');
    this.player.setScale(0.5);
    this.treasure = this.add.sprite(this.sys.game.config.height/2-80,this.sys.game.config.height/2,'treasure');
    this.treasure.setScale(0.5);
    this.enemies = this.add.group({
      key: 'dragon',
      repeat: 5,
      setXY: {
        x: 100,
        y: 100,
        stepX: 80,
        stepY: 20
      }
    });
    Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.5, -0.5);
    Phaser.Actions.Call(this.enemies.getChildren(), function (enemy) {
      enemy.speed = Math.random() * 2 + 1;
    }, this)
  }
  update(){
   if(this.input.activePointer.isDown){
     this.player.x += this.playerSpeed ;
   }
  //  if(Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(),this.treasure.getBounds())){
  //   this.gameOver();
  // }
  let enemies = this.enemies.getChildren();
  let num = enemies.length;
  for(let i = 0; i < num; i++){
    enemies[i].y += enemies[i].speed;
    if(enemies[i].y>= this.enemyMaxY && enemies[i].speed > 0){
      console.log("max");
      enemies[i].speed *= -1;
    } else if(enemies[i].y <= this.enemyMinY && enemies[i].speed < 0){
      console.log("found");
      enemies[i].speed *= -1;
    }
    if(Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(),enemies[i].getBounds())){
      this.gameOver();
      break;
    }
  }
  }
  gameOver(){
    this.scene.restart();
  }
}