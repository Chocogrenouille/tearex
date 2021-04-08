class Player {
    constructor (){
        this.width = 80;
        this.height = 100;
        this.x = 0;
        this.y = height-92;
        
        this.reset();
        this.level = 0;
        this.lives = 3; 
    }

    draw () {
        // this is loading the image, the position of x & y and size of image
        image(game.playerImage, this.x, this.y, this.width, this.height);

        //this one adds 5 units to y-position of player, meaning it will constantly go down
        // this.velocity += this.gravity;
        this.y += 3;

        //this one stops the Tearex from leaving the frame
        if (this.y >= height-92){
            this.y = height-92;
        } else if (this.y < 0) {
            this.y = 0;
        }

        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > width - 80){
            this.x = width-80;
        }

        //this one allows continuous movement left and right
        if (keyIsDown(LEFT_ARROW)){
            this.moveLeft();
        } else if (keyIsDown(RIGHT_ARROW)){
            this.moveRight();
        }
    }

    moveRight() {
        this.x += 10;
    }
    moveLeft() {
        this.x -= 10;
        image(game.playerImageLeft, this.x, this.y, this.width, this.height);
    }
    jump() {
        this.y -= 200;
        image(game.playerImageJump, this.x, this.y, this.width, this.height);
    }

    reset(){
        this.score = 0;
        this.sumOfCollectedTeaLeaves = [];
        this.sumOfCollectedSuns = [];
        this.sumOfCollectedPans = [];
        this.sumOfCollectedBags = [];
        this.sumOfCollectedTimes = [];
        this.sumOfCollectedBugs = [];
    }

}
        