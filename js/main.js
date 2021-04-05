const game = new Game;


function setup() {
    createCanvas(900, 600);
    frameRate(20)
    game.setup();
}


function draw () {
    game.draw();
}


function preload () {
    game.preload();
}