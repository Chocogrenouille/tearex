class Player {
    constructor (){
        // should add lives?
        this.x = 5;
        this.y = height-70;
    }

    draw () {
        // this is loading the image, the position of x & y and size of image
        image(game.playerImage, this.x, this.y, 130, 70);

        //this one adds 5 units to y-position of player, meaning it will constantly go down
        this.y += 5;

        //this one stops the Tearex from leaving the frame
        if (this.y >= height-70){
            this.y = height-70;
        } else if (this.y < 0) {
            this.y = 0;
        }

        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > width - 130){
            console.log (this.x);
            this.x = width-130;
        }

        //this one allows continuous movement left and right
        if (keyIsDown(LEFT_ARROW)){
            this.moveLeft();
        } else if (keyIsDown(RIGHT_ARROW)){
            this.moveRight();
        }
    }

    moveRight (){
        this.x += 10;
    }

    moveLeft () {
        this.x -= 10;
    }

    jump () {
        this.y -= 200;
    }
}
        