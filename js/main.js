const game = new Game;


function setup() {
    createCanvas(900, 600);
    game.setup();
}


function draw () {
    game.draw();
}


function preload () {
    game.preload();
}

function keyPressed () {
    if (keyCode === 39){
        game.player.moveRight();
    }
    if (keyCode === 37) {
        game.player.moveLeft();
    }
    if (keyCode === 32) {
        game.player.jump();
    }
}
