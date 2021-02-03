import Phaser from 'phaser';

import BootScene from '../Scenes/BootScenes';

test('BootScene is a subclass of Phaser.Scene', () => {
  expect(BootScene).toBeSubclassOf(Phaser.Scene);
});
