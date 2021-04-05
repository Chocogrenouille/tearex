class Game {
    constructor () {
        this.mountainImages;
        this.cloudImages;
        this.TreeImage
        this.player;
        this.tea;
        this.sun;
        this.pan;
        this.time;
        this.stick;
        this.bag;
    }

    setup () {
        this.mountain = new Mountain();
        this.tree = new Tree();
        this.clouds = new Clouds();
        this.player = new Player ();
    }

    preload () {
        this.mountainImages = [
            {src: loadImage('../img/background/1.png')},
            {src: loadImage('../img/background/2.png')},
            {src: loadImage('../img/background/3.png')},
        ]
        this.cloudImages = [
            {src: loadImage('../img/background/4.png'), x: 0},
            {src: loadImage('../img/background/5.png'), x: 0}
        ]
        this.treeImage = loadImage('../img/background/6.png');

        this.playerImage = loadImage('../img/player.png');
    }

    draw () {
        clear();
        this.mountain.draw();
        this.clouds.draw();
        this.tree.draw();
        this.player.draw()
    }

   
}


