
import Base from "./Base";



class Score extends Base {

    constructor(config) {
        super('Score', {...config, canGoBack: true});
    }
    
    create () {
        super.create ();
        this.add.image(0, 0, 'BG_Menu').setOrigin(0);

        const bestScore = localStorage.getItem('bestScore');
        this.add.text(...this.screenCenter, `Score: ${bestScore || 0}`, this.fontOptions)
          .setOrigin(0.5) 
    }
    
}
export default Score;
