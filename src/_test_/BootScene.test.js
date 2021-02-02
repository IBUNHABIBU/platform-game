import BootScene from '../Scenes/BootScenes';
import Phaser from 'phaser';
test('BootScene is a subclass of Phaser.Scene', () => {
  expect(BootScene).toBeSubclassOf(Phaser.Scene);
});
