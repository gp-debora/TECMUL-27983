
import Base from "./Base";



class Pause extends Base {

    constructor(config) {
        super('Pause', config);

        this.menu = [
            {scene: 'PlayScene', text: 'Continue'},
            {scene: 'Menu', text: 'Exit'},

        ]
    }
    
    create () {
        super.create ();
        this.createMenu (this.menu, this.setupMenuEvents.bind(this));

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
            if (menuItem.scene && menuItem.text === 'Continue') {
                this.scene.stop ();
                this.scene.resume (menuItem.scene);
            } else {
                this.scene.stop('PlayScene');
                this.scene.start(menuItem.scene);
            }
        
        })

    }
}
export default Pause;
