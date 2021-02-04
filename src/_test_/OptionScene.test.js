import OptionScene from '../Scenes/OptionScene';

const option = new OptionScene()
test('OptionScene is of type function', () => {
  expect(typeof OptionScene).toBe('function');
});

test('OptionScene key name is Option', () => {
  expect(option.sys.config).toBe('Options');
});

test('OptionScene scene is not undefined', () => {
  expect(option.sys.config).not.toBe(undefined);
});