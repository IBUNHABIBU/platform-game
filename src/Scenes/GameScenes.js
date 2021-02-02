import Phaser from 'phaser';
import API from '../util/api';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.playerSpeed = 21.5;
    this.enemyMaxX = 680;
    this.enemyMinX = 3;
    this.count = 3;
    this.width = this.sys.game.config.width;
    this.height = this.sys.game.config.height;
    this.score = 0;
  }

  create() {
    this.bg = this.add.image(240, 320, 'background');
    this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'fish');
    this.player.setScale(0.5);

    this.enemies = this.add.group({
      key: 'food',
      repeat: 5,
      setXY: {
        x: 800,
        y: 10,
        stepX: 80,
        stepY: 100,
      },
    });
    const enemis = this.enemies.getChildren();
    enemis.forEach(enemy => {
      enemy.setScale(Math.random(0, 1) + 1);
    });

    Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.5, -0.5);
    Phaser.Actions.Call(this.enemies.getChildren(), (enemy) => {
      enemy.speed = Math.random() * 2 + 2;
    }, this);
    this.playerLife = true;
    this.cameras.main.resetFX();
  }

  update() {
    this.displayMessage(30, 30, `Score:${this.score}`);

    if (!this.playerLife) {
      return;
    }
    const up = this.input.keyboard.addKey('UP');
    const down = this.input.keyboard.addKey('DOWN');
    const left = this.input.keyboard.addKey('LEFT');
    const right = this.input.keyboard.addKey('RIGHT');
    if (up.isDown) {
      this.player.y -= this.playerSpeed;
    }
    if (down.isDown) {
      this.player.y += this.playerSpeed;
    }
    if (left.isDown) {
      this.player.x -= this.playerSpeed;
      this.player.flipX = true;
    }
    if (right.isDown) {
      this.player.x += this.playerSpeed;
      this.player.flipX = false;
    }

    const enemies = this.enemies.getChildren();
    const num = enemies.length;
    this.model = this.sys.game.globals.model;
    for (let i = 0; i < num; i += 1) {
      enemies[i].flipX = true;
      enemies[i].x += enemies[i].speed;
      if (enemies[i].x >= this.enemyMaxX && enemies[i].speed > 0) {
        enemies[i].speed *= -1;
      } else if (enemies[i].x < this.enemyMinX && enemies[i].speed < 0) {
        this.displayMessage(this.width / 2, this.height / 2, `${this.count}remained`);
        enemies[i].x = this.sys.game.config.width;
        this.count -= 1;
      }

      if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), enemies[i].getBounds())) {
        this.score += 15;
        enemies[i].x = this.sys.game.config.width;
        this.foodSound = this.sound.add('foodSound', { volume: 0.5, loop: false });
        this.foodSound.play();
      }
      if (this.count < 0) {
        this.gameOver();
        break;
      }
    }
  }

  gameOver() {
    this.playerLife = false;
    this.playerName = this.sys.game.globals.playerName;
    API.addScore(this.playerName, this.score);
    this.gameOverText = this.add.text(this.width / 2.6, this.height / 4.2, 'Game Over ', {
      fontSize: '40px',
      fill: '#000000',
    });
    this.resetButton = this.add.sprite(this.width / 2, this.height / 2, 'blueButton2').setInteractive();
    this.resetButton.setScale(1.4);
    this.resetText = this.add.text(0, 0, ' Play Again', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.resetText, this.resetButton);

    this.gotoMenu = this.add.sprite(this.width / 2, this.height / 1.66, 'blueButton2').setInteractive();
    this.gotoMenu.setScale(1);
    this.gotoMenuText = this.add.text(0, 0, ' Menu', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.gotoMenuText, this.gotoMenu);

    this.resetButton.on('pointerdown', () => {
      this.scene.restart();
    });
    this.gotoMenu.on('pointerdown', () => {
      this.scene.start('Title');
    });
  }

  displayMessage(x, y, z) {
    this.warningText = this.add.text(x, y, z, {
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
        fill: false,
      },
    });
  }
}
