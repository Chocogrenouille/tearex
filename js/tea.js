class Tea {
    constructor (){
        this.x = width;
        this.y = (Math.random() * height) / 1.01;
        this.width = 40;
        this.height = 40;
    }

    draw (){
        image(game.teaImage, this.x, this.y, this.width, this.height);
        this.x -= 4;
    }

    collection (playerSize) {
        //getting the centre of the tea icon
        const teaX = this.x + this.width / 2;
        const teaY = this.y + this.height / 2;

        //getting the centre of the player icon
        const playerX = playerSize.x + playerSize.width / 2;
        const playerY = playerSize.y + playerSize.height / 2;

        // if distance between all those coordinates is larger than 25, nothing happens
        // else the score of the player is increased
        if (dist(teaX, teaY, playerX, playerY) > 50){
            return false
        } else {
            game.player.sumOfCollectedTeaLeaves++;
            game.calculateScore();
            return true
        }
    }
}