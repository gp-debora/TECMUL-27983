
import PlayScene from "./scenes/PlayScene";
import Menu from "./scenes/Menu";
import Preload from "./scenes/Preload";
import Base from "./scenes/Base";
import Score from "./scenes/Score";
import Pause from "./scenes/Pause";

const WIDTH = 350;
const HEIGHT = 450;
const BIRD_POSITION = {x: WIDTH * 0.1, y: HEIGHT / 2};

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION
}
const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
     //gravity: { y: 400 }
    
    }
  },
  scene: [Preload, new Menu (SHARED_CONFIG), new Score (SHARED_CONFIG), new PlayScene (SHARED_CONFIG), new Pause (SHARED_CONFIG)]
};


new Phaser.Game(config);
