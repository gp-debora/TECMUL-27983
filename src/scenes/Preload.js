import Phaser from "phaser";



class Preload extends Phaser.Scene {

    constructor(config) {
        super('Preload');
        this.config = config;
    }

    preload () {
        this.load.image('sky', 'assets/sky_game.png');
        //this.load.image('bird', 'assets/bird.png');
        this.load.spritesheet('bird', 'assets/birdSprite.png', {
            frameWidth: 16, frameHeight:16
        });
        this.load.image('pipe', 'assets/pipe-green.png')
        this.load.image('pipedown', 'assets/pipe-green-1.png');
        this.load.image('pause', 'assets/pause.png');
        this.load.image('BG_Menu', 'assets/sky.png');
        this.load.image('back', 'assets/back.png');
        this.load.audio('collisionSound', 'assets/Sound/die.wav');
        this.load.audio('passSound', 'assets/Sound/point.wav');
        this.load.audio('menuMusic', 'assets/Sound/menu.mp3');

    }
    
    create () {
        this.scene.start('Menu');
    }
}
export default Preload;
