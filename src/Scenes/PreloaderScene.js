import Phaser from 'phaser';
import blueButton2 from '../assets/ui/blue_button02.png';
import blueButton3 from '../assets/ui/blue_button03.png';
import box from '../assets/ui/grey_box.png';
import blueBoxCheckMark from '../assets/ui/blue_boxCheckmark.png';
import bgMusic from '../assets/audio/game_music.wav';
import foodSound from '../assets/audio/snap.ogg';
import platform from '../assets/images/ground_grass.png';
import fish2 from '../assets/images/fishTile_073.png';
import fish3 from '../assets/images/fishTile_074.png';
import food from '../assets/images/fishTile_075.png';
import fish5 from '../assets/images/fishTile_076.png';
import fish from '../assets/images/fishTile_077.png';
import background from '../assets/images/bg_layer1.png';
import logo from '../assets/images/logo.jpg';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.add.image(400, 200, 'logo');
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);
    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);
    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    this.load.image('blueButton2', blueButton2);
    this.load.image('blueButton3', blueButton3);
    this.load.image('logo', logo);
    this.load.image('box', box);
    this.load.image('blueBoxCheckMark', blueBoxCheckMark);
    this.load.audio('bgMusic', bgMusic);
    this.load.audio('foodSound', foodSound);
    this.load.image('background', background);
    this.load.image('platform', platform);
    this.load.image('fish', fish);
    this.load.image('food', food);
    this.load.image('fish5', fish5);
    this.load.image('fish2', fish2);
    this.load.image('fish3', fish3);
  }

  ready() {
    this.scene.start('Name');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Name');
    }
  }
}
