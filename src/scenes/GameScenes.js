import 'phaser';
export default class GameScene extends Phaser.Scene{
  constructor(){
    super('Game');
  }
  create(){
//     this.bg = this.add.image(240,320, 'background');
//     // this.environment = this.add.image(240,320, 'environment');
//     this.physics.add.image(240, 320, 'platform')
// 7 .setScale(0.5)
const platforms = this.physics.add.staticGroup();
    for(let i = 0 ; i < 5 ; i++){
      const x = Phaser.Math.Between(80,400);
      const y = 150 * i;

      /** @type {Phaser.Physics.Arcade.Sprite} */
      const platform = platforms.create(x,y, 'platform');
      platform.scale(0.5);

      /** @type {Phaser.Physics.Arcade.StaticBody} */
      const body = platform.body();
      body.updateFromGameObject();
    }
  }
}