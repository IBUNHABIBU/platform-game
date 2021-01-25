import Phaser from 'phaser';
export default class UserInput extends Phaser.Scene {
  constructor(){
    super('Name');
  }
  create(){
    const div = document.createElement('div');
    div.setAttribute('class','user-form');
    const input = document.createElement('input');
    input.setAttribute('class','name');
    input.setAttribute('type', 'text');
    input.placeholder = 'Enter your name';
    div.appendChild(input);
    const element = this.add.dom(60,40,div);
    const button = document.createElement('input');
    button.setAttribute('type','submit');
    button.value = 'Play Game';
    div.appendChild(button);
    element.addListener('click');

    element.on('click', (event) => {
      if(event.target.type == 'submit') {
        const name = document.querySelector('.name').value;
        this.model = this.sys.game.globals.model;
        this.model = name;
        this.scene.start('Options');
      }
    })
  }
}