import Phaser from 'phaser';
import API from '../util/api'
export default class ScoreScene extends Phaser.Scene{
  constructor(){
    super('Score');
  }
 
  create () {
    this.heading = this.add.text(40,40, 
      "TOP TEN SCORES",{
        fontSize: '40px',
          fill: '#ffffff',
    })
    API.getScores()
  }
};