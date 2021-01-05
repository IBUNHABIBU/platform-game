import 'phaser';
import config from './Config/config';
// import logoImg from "./images/tut/background.png";
// import player from "./images/tut/warrior.png";
// import dragon from "./images/tut/pet_dragon_new.png";
// import gold from "./images/tut/icon.png";

import GameScene from './Scenes/GameScenes';
import BootScenes from './Scenes/BootScenes';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionScene';
import CreditsScene from './Scenes/CreditScene';
import Model from './Model';
class Game extends Phaser.Game {
  constructor () {
    super(config);
    const model = new Model();
    this.globals = { model };

    this.scene.add('Boot', BootScenes);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();