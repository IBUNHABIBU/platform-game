import  'phaser';
import config from './Config/config';
// import logoImg from "./images/tut/background.png";
// import player from "./images/tut/warrior.png";
// import dragon from "./images/tut/pet_dragon_new.png";
// import gold from "./images/tut/icon.png";
import GameScene from './scenes/GameScenes';
import BootScene from './Scenes/BootScenes';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionScene';
import CreditsScene from './Scenes/CreditScene';
class Game extends Phaser.Game {
  constructor(){
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Game');
  }
}
window.game = new Game();