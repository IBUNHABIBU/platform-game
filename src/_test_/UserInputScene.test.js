import { TestScheduler } from 'jest';
import UserInputScene from '../Scenes/UserInputScene';

const user = new UserInputScene()
test('UserInputScene is of type function', () => {
  expect(typeof UserInputScene).toBe('function');
});

test('UserInputScene key name is UserInput', () => {
  expect(user.sys.config).toBe('Name');
});

test('UserInputScene scene is not undefined', () => {
  expect(user.sys.config).not.toBe(undefined);
});