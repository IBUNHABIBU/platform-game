import BootScene from '../Scenes/BootScenes';

const scene = new BootScene();


test('BootScene is a subclass of Phaser.Scene', () => {
  expect(BootScene).toBeSubclassOf(Phaser.Scene);
});
// test('BootScene is of type function', () => {
//   expect(typeof BootScene).toBe('function');
// });

// test('BootScene key name is Boot', () => {
//   expect(scene.sys.config).toBe('Boot');
// });

// test('BootScene scene is not undefined', () => {
//   expect(scene.sys.config).not.toBe(undefined);
// });