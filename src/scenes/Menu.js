
import Base from "./Base";



class Menu extends Base {

    constructor(config) {
        super('Menu', config);

        this.menu = [
            {scene: 'PlayScene', text: 'Play'},
            {scene: 'ScoreScene', text: 'Score'},
            {scene: null, text: 'Exit'},

        ]
    }
    
    create () {
        super.create ();
        this.add.image(0, 0, 'BG_Menu').setOrigin(0);

        this.createMenu (this.menu, this.setupMenuEvents.bind(this));

        const menuMusic = this.sound.add('menuMusic', {loop: true });
        menuMusic.play();

    }

    setupMenuEvents (menuItem) {
        const textGameObject = menuItem.textGameObject;
        textGameObject.setInteractive();

        textGameObject.on('pointerover', () => {
            textGameObject.setStyle({fill: '#ff0'});
        })

        textGameObject.on('pointerout', () => {
            textGameObject.setStyle({fill: '#40ed0c'});
        })


        textGameObject.on('pointerup', () => {
            menuItem.scene && this.scene.start(menuItem.scene);

            if (menuItem.text === 'Exit') {
                this.game.destroy(true);
            }
        })

    }
}
export default Menu;
