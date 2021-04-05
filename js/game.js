class Game {
    constructor () {
        this.backgroundImages;
        this.player;
        this.tea;
        this.sun;
        this.pan;
        this.time;
        this.stick;
        this.bag;
    }

    setup () {
        this.background = new Background();
    }

    preload () {
        this.backgroundImages = [
            {src: loadImage('../img/background/1.png')},
            {src: loadImage('../img/background/2.png')},
            {src: loadImage('../img/background/3.png')},
            {src: loadImage('../img/background/4.png')},
            {src: loadImage('../img/background/5.png')},
            {src: loadImage('../img/background/6.png')}
        ]
    }

    draw () {
        clear();
        this.background.draw();
    }

   
}


