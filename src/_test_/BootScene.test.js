import BootScene from '../Scenes/BootScenes';

const scene = new BootScene();


test('BootScene is a subclass of Phaser.Scene', () => {
  expect(BootScene).toBeSubclassOf(Phaser.Scene);
});