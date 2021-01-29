import 'phaser';
import config from './config/config';
import GameScene from './scenes/GameScenes';
import BootScenes from './scenes/BootScenes';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import OptionsScene from './scenes/OptionScene';
import CreditsScene from './scenes/CreditScene';
import UserInputScene from './scenes/UserInputScene';
import ScoreScene from './scenes/ScoreScene';
import Model from './Model';
class Game extends Phaser.Game {
  constructor () {
    super(config);
    const model = new Model();
    this.globals = { model,
      playerName: '',
    
     };

    this.scene.add('Boot', BootScenes);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Name', UserInputScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Scores', ScoreScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();