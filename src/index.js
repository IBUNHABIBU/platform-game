import 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScenes';
import BootScenes from './Scenes/BootScenes';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionScene';
import CreditsScene from './Scenes/CreditScene';
import UserInputScene from './Scenes/UserInputScene';
import ScoreScene from './Scenes/ScoreScene';
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