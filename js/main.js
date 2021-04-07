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
    if (keyCode === 13 && game.player.level === 0){
        game.player.level = 1;
    } else if (keyCode === 13 && game.player.level === 1.5) {
        game.player.level = 2;
    } else if (keyCode === 13 && game.player.level === 2.5) {
        game.player.level = 3;
    } else if (keyCode === 13 && game.player.lives === 0){
        game.player.level = 1;
    }
}
