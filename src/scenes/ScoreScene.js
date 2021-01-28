import Phaser from 'phaser';
import API from '../util/api'
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
    API.getScores()
    .then(data => {
      console.log(data.result);
      
    }).catch(error => console.log("error"));
  }
};