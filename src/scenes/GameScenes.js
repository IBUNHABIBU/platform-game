import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene{
  constructor(){
    super('Game');
  }
  init(){
    this.playerSpeed = 21.5;
    this.enemySpeed = 22;
    this.enemyMaxX = 680;
    this.enemyMinX = 3;
    this.scoreCredit = 0;
    this.count = 3;
    this.width = this.sys.game.config.width;
    this.height = this.sys.game.config.height;
    this.score = 0;
  }
  create(){
    this.bg = this.add.image(240,320, 'background');
    this.player = this.add.sprite(40,this.sys.game.config.height/2,'fish');
    this.player.setScale(0.5);
   
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
    this.displayMessage(30,30,"Score:"+this.score);
    if(this.count <= 0){
      this.gameOver();
    }
    if(!this.playerLife){
      return;
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
    this.player.x -= this.playerSpeed;
    this.player.flipX = true;
   }
   if(right.isDown){
    this.player.x += this.playerSpeed ;
    this.player.flipX = false;
   }
  
  let enemies = this.enemies.getChildren();
  let num = enemies.length;
  this.model = this.sys.game.globals.model;
  for(let i = 0; i < num; i++){
    enemies[i].flipX = true;
    enemies[i].x += enemies[i].speed;
    if (enemies[i].x >= this.enemyMaxX && enemies[i].speed > 0) {
      enemies[i].speed *= -1;
      } 
    else if(enemies[i].x < this.enemyMinX && enemies[i].speed < 0){
     this.displayMessage(this.width/2,this.height/2, this.count + "remained")
     enemies[i].x = this.sys.game.config.width;
     this.count --;
    }
    
    if(Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(),enemies[i].getBounds())){
      this.score  += 1;
      enemies[i].x = this.sys.game.config.width;
      this.foodSound = this.sound.add('foodSound', { volume: 0.5, loop: false });
      this.foodSound.play();
    }
  }
  }
  gameOver(){
    this.playerLife = false;
      this.d = this.displayMessage(this.width/2.8,this.height/3.2,"gave over");
      this.resetButton = this.add.sprite(this.width/2,this.height/2, 'blueButton2').setInteractive();
      this.resetText = this.add.text(0, 0, 'Play Again', { fontSize: '32px', fill: '#fff' });
      Phaser.Display.Align.In.Center(this.resetText, this.resetButton);
    
    this.resetButton.on('pointerdown', function (pointer) {
      this.scene.restart();
    }.bind(this));
  }
  displayMessage(x,y,z){
    this.warningText = this.add.text(x,y,z, {
      fontFamily: 'Courier',
      fontSize: '32px',
      fontStyle: '',
      backgroundColor: '#a8a866',
      color: '#fff',
      stroke: '#fff',
      strokeThickness: 0,
      shadow: {
        offsetX: 0,
        offsetY: 0,
        color: '#000',
        blur: 0,
        stroke: false,
        fill: false
      }
     });
  }
}