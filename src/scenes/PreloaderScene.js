import 'phaser';
import blueButton2 from "../assets/ui/blue_button02.png";
import blueButton3 from "../assets/ui/blue_button03.png";
import box from "../assets/ui/grey_box.png";
import blueBoxCheckMark from "../assets/ui/blue_boxCheckmark.png";
import bgMusic from "../assets/audio/TownTheme.mp3";
import platform from "../assets/images/ground_grass.png";
import fish2 from "../assets/images/fishTile_073.png";
import fish3 from "../assets/images/fishTile_074.png";
import food from "../assets/images/fishTile_075.png";
import fish5 from "../assets/images/fishTile_076.png";
import fish from "../assets/images/fishTile_077.png";
import background from "../assets/images/bg_layer1.png";
import player from "../assets/images/player.png";
import dragon from "../assets/images/dragon.png";
import treasure from "../assets/images/treasure.png";
import logo from "../assets/images/logo.jpg";

export default class PreloaderScene extends Phaser.Scene{
  constructor () {
    super('Preloader');
  }

  init () {
    this.readyCount = 0;
  }

  preload () {
    // add logo image
    this.add.image(400, 200, 'logo');

    // display progress bar
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);
   
    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);
   
    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });
   
    // update file progress text
    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });
   
    // remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });
   
this.load.on('complete', function () {
  progressBar.destroy();
  progressBox.destroy();
  loadingText.destroy();
  percentText.destroy();
  assetText.destroy();
  this.ready();
}.bind(this));
 
this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
 
this.load.image('blueButton2', blueButton2);
this.load.image('blueButton3', blueButton3);
this.load.image('logo', logo);
this.load.image('box', box);
this.load.image('blueBoxCheckMark', blueBoxCheckMark);
this.load.audio('bgMusic', bgMusic);
this.load.image('background', background);
this.load.image('platform', platform);
this.load.image('fish', fish);
this.load.image('food', food);
this.load.image('fish5', fish5);
this.load.image('fish2', fish2);
this.load.image('fish3', fish3);
this.load.image('dragon', dragon);
this.load.image('treasure', treasure);
this.load.image('player', player);

}

ready () {
  this.scene.start('Title');
  this.readyCount++;
  if (this.readyCount === 2) {
    this.scene.start('Title');
  }
}
}