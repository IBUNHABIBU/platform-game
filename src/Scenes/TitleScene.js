import Phaser from 'phaser';

import config from '../Config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.w = config.width;
    this.h = config.height;
    this.logo = this.add.image(400, 300, 'logo');
    this.gameButton = this.add.sprite(100, 200, 'blueButton2').setInteractive();
    this.centerButton(this.gameButton, 1);

    this.gameText = this.add.text(0, 0, 'Play', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on('pointerdown', () => {
      this.scene.start('Game');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton3');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton2');
    });

    this.scoreButton = this.add.sprite(400, 500, 'blueButton2').setInteractive();
    this.scoreText = this.add.text(0, 0, 'TopScores', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.scoreText, this.scoreButton);

    this.scoreButton.on('pointerdown', () => {
      this.scene.start('Scores');
    });

    this.optionsButton = this.add.sprite(300, 200, 'blueButton2').setInteractive();
    this.centerButton(this.optionsButton);

    this.optionsText = this.add.text(0, 0, 'Options', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.optionsText, this.optionsButton);

    this.optionsButton.on('pointerdown', () => {
      this.scene.start('Options');
    });

    this.creditsButton = this.add.sprite(300, 200, 'blueButton2').setInteractive();
    this.centerButton(this.creditsButton, -1);

    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.creditsText, this.creditsButton);

    this.creditsButton.on('pointerdown', () => {
      this.scene.start('Credits');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton3');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton2');
    });

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(this.w / 2, this.h / 2 - offset * 100, this.w, this.h),
    );
  }

  /* eslint-disable class-methods-use-this */
  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}
