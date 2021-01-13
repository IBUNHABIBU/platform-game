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
    console.log(enemies[i].speed)
    enemies[i].y = enemies[i].speed;
    if(enemies[i].y>= this.enemyMaxY && enemies[i].speed > 0){
      enemies[i].speed *= -1;
      console.log(enemies[i].speed)
    } else if(enemies[i].y>= this.enemyMinY && enemies[i].speed < 0){
      enemies[i].speed *= -1;
      console.log("the second speed is",enemies[i].speed)
    }
  }
  }
  gameOver(){
    this.scene.restart();
  }
}