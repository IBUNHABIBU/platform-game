import Phaser from 'phaser';

import config from '../Config/config';

export default class UserInput extends Phaser.Scene {
  constructor() {
    super('Name');
  }

  create() {
    this.gameHeading = this.add.text(config.width / 8,
      50, 'You are the Monster Fish !', {
        fontSize: '40px',
        fill: '#ffffff',
      });
    this.about = this.add.text(config.width / 16,
      120, 'your task is to eat all the small fish and get rid of ', {
        fontSize: '20px',
        fill: '#ffffff',
      });
    this.add.text(config.width / 8,
      160, ' the big fish unless you give it a shock', {
        fontSize: '20px',
        fill: '#ffffff',
      });
    this.input = this.add.dom(config.width / 2, config.height / 2.6, 'input',
      'background-color: #fff; width: 250px; height: 30px; font: 16px Times New Roman');

    this.button = this.add.dom(config.width / 2, config.height / 2, 'button',
      'background-color: #008cba; color: #fff; width: 250px; height: 30px; font: 16px Times New Roman; border:none;border-radius: 10px',
      'Start');

    const button = document.querySelector('button');

    button.setAttribute('type', 'submit');

    button.addEventListener('click', (event) => {
      if (event.target.type === 'submit') {
        const name = document.querySelector('input').value;
        if (name.length < 3) {
          this.add.text(
            config.width / 4,
            253,
            'Name should be over 3 characters!',
            {
              fontSize: '20px',
              fill: '#ff0000',
            },
          );
        } else {
          this.sys.game.globals.playerName = name;
          this.scene.start('Title');
        }
      }
    });
  }
}
