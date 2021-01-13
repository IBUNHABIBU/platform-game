import 'phaser';

export default class GameScene extends Phaser.Scene{
  constructor(){
    super('Game');
  }
  init(){
    this.playerSpeed = 1.5;
    this.enemySpeed = 2;
    this.enemyMaxX = 680;
    this.enemyMinX = 3;
  }
  create(){
    this.bg = this.add.image(240,320, 'background');
    // this.fish = this.add.image(138,3,'fish');
    this.player = this.add.sprite(40,this.sys.game.config.height/2,'fish');
    this.player.setScale(0.5);
    this.treasure = this.add.sprite(this.sys.game.config.height-80,this.sys.game.config.height/2,'treasure');
    this.treasure.setScale(0.5);
    this.enemies = this.add.group({
      key: 'food',
      repeat: 5,
      setXY: {
        x: 800,
        y: 10,
        stepX: 80,
        stepY: 100
      }
    });
    
    Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.5, -0.5);
    Phaser.Actions.Call(this.enemies.getChildren(), function (enemy) {
      enemy.speed = Math.random() * 2 + 1;
    }, this);
    this.playerLife = true;
    this.cameras.main.resetFX();
  }
  update(){
    if(!this.playerLife){
      return;
    }
   if(this.input.activePointer.isDown){
     this.player.x += this.playerSpeed ;
   }
   let up = this.input.keyboard.addKey('UP');
   let down = this.input.keyboard.addKey('DOWN');
   let left = this.input.keyboard.addKey('LEFT');
   let right = this.input.keyboard.addKey('RIGHT');
   if(up.isDown){
    this.player.y -= this.playerSpeed ;
   }
   if(down.isDown){
    this.player.y += this.playerSpeed ;
   }
   if(left.isDown){
    this.player.x -= this.playerSpeed ;
   }
   if(right.isDown){
    this.player.x += this.playerSpeed ;
   }
   if(Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(),this.treasure.getBounds())){
    this.gameOver();
  }
  let enemies = this.enemies.getChildren();
  let num = enemies.length;
  for(let i = 0; i < num; i++){
    enemies[i].x += enemies[i].speed;
    if (enemies[i].x >= this.enemyMaxX && enemies[i].speed > 0) {
      enemies[i].speed *= -1;
    } 
    else if(enemies[i].x < this.enemyMinY && enemies[i].speed < 0){
      console.log("hi");
    }
    // if(Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(),enemies[i].getBounds())){
    //   this.gameOver();
    //   break;
    // }
  }
  }
  gameOver(){
    this.playerLife = false;
    this.cameras.main.shake(500);
    this.time.delayedCall(250, function () {
      this.cameras.main.fade(250);
    },[], this)
    this.time.delayedCall(500, function () {
      this.scene.restart();
    },[], this)
  }
}