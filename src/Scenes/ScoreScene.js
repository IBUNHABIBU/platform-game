import Phaser from 'phaser';
import API from '../util/api';
import config from '../Config/config';
export default class ScoreScene extends Phaser.Scene{
  constructor(){
    super('Scores');
  }
 
  create () {
    this.heading = this.add.text(40,40, 
      "TOP 5 SCORES",{
        fontSize: '40px',
          fill: '#ffffff',
    })
     API.getScores().then((res) => {
      let nbr = 1;
      let margin = 150;
      res.forEach((element) => {
        this.add.text(config.width / 2 - 100, margin + 5, `${nbr} - `);
        this.add.text(
          config.width / 2 - 50,
          margin,
          `${element.name} : ${element.score}`,
          {
            fontSize: 24,
          },
        );
        nbr += 1;
        margin += 50;
      });
    });

    this.menuButton = this.add.sprite(400, 500, 'blueButton2').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);

    this.menuButton.on('pointerdown', function (pointer) {
      this.scene.start('Title');
    }.bind(this));
  }
};