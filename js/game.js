class Game {
    constructor () {
        this.mountainImages;
        this.cloudImages;
        this.TreeImage;
        this.playerImage;
        this.teaImage;
        this.sunImage;
    }

    setup () {
        this.mountain = new Mountain();
        this.tree = new Tree();
        this.clouds = new Clouds();
        this.player = new Player();

        // creating empty array for items to collect
        this.collectedLeaves = [];
        this.collectedSuns = [];
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
        this.teaImage = loadImage('../img/tealeaves.png');
        this.sunImage = loadImage('../img/sun.png');
    }

    draw () {
        clear();
        this.mountain.draw();
        this.clouds.draw();
        this.tree.draw();
        this.player.draw()

        // this one creates new tea leaves
        if (frameCount % 150 === 0) {
            this.collectedLeaves.push(new Tea(this.teaImage))
        }
        this.collectedLeaves.forEach(function (leaf){
            leaf.draw();
        })

        //this one creates new suns
        if (frameCount % 200 === 0) {
            this.collectedSuns.push(new Sun(this.sunImage))
        }
        this.collectedSuns.forEach(function (sun){
            sun.draw();
        })

    }

   
}


