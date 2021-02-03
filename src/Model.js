// eslint-disable-next-line no-underscore-dangle
export default class Model {
  constructor() {
    this._soundOn = true;
    this._musicOn = true;
    this._bgMusicPlaying = false;
  }

  set musicOn(value) {
    this._musicOn = value;
  }

  get musicOn() {
    return this._musicOn;
  }

  set soundOn(value) {
    this._soundOn = value;
  }

  get soundOn() {
    return this._soundOn;
  }

  set _bgMusicPlaying(value) {
    this.__bgMusicPlaying = value;
  }

  get _bgMusicPlaying() {
    return this.__bgMusicPlaying;
  }
}
