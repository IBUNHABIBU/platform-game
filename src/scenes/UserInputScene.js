import Phaser from 'phaser';
export default class UserInput extends Phaser.Scene {
  constructor(){
    super('Name');
  }
  create(){
    const div = document.createElement('div');
    const input = document.createElement('input');
    // input.name = 'nameField';
    input.setAttribute('type', 'text');
    input.placeholder = 'Enter your name';
    div.appendChild(input);
    const element = this.add.dom(60,40,div);
    // const t = this.add.text(50,50,"hello");
    // element.addListener('click');
  }

}