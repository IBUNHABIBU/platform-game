import Phaser from 'phaser';

import config from '../Config/config';
export default class UserInput extends Phaser.Scene {
  constructor(){
    super('Name');
  }
  create(){
    this.gameHeading = this.add.text(40,40, 'You are the Monster Fish !', {
      fontSize: '40px',
        fill: '#ffffff',
    })
    this.about = this.add.text(40,80,'your task is to eat all the small fish and to get rid of the big fish unless you give it a shock',{
      fontSize: '20px',
        fill: '#ffffff',
    })
    this.input = this.add.dom(config.width/2,40, 'input', 
     'background-color: #fff; width: 250px; height: 30px; font: 16px Times New Roman',
    )
    
    this.button = this.add.dom(120,140, 'button', 
     'background-color: #008cba; color: #fff; width: 250px; height: 30px; font: 16px Times New Roman; border:none;border-radius: 10px',
     'Start',
    )
    
    // const button = document.querySelector('button');
    // button.setAttribute('type', 'submit');
    
    // button.on('click', (event) => {
    //   if(event.target.type == 'submit') {
    //     const name = document.querySelector('.name').value;
    //     this.model = this.sys.game.globals.model;
    //     this.model = name;
    //     this.scene.start('Title');
    //   }
    // })
  }
}