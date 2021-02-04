import GameScene from '../Scenes/GameScenes';

const game = new GameScene()
test('GameScene is of type function', () => {
  expect(typeof GameScene).toBe('function');
});

test('GameScene key name is Game', () => {
  expect(game.sys.config).toBe('Game');
});

test('GameScene scene is not undefined', () => {
  expect(game.sys.config).not.toBe(undefined);
});