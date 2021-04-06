class Sun {
    constructor (){
        this.x = width;
        this.y = (Math.random() * height) / 1.01;
        this.width = 40;
        this.height = 40;
        this.sum = 0;
    }

    draw (){
        image(game.sunImage, this.x, this.y, this.width, this.height);
        this.x -= 4.5;
    }

    collection (playerSize) {
        //getting the centre of the tea icon
        const sunX = this.x + this.width / 2;
        const sunY = this.y + this.height / 2;

        //getting the centre of the player icon
        const playerX = playerSize.x + playerSize.width / 2;
        const playerY = playerSize.y + playerSize.height / 2;

        // if distance between all those coordinates is larger than 25, nothing happens
        // else the score of the player is increased
        if (dist(sunX, sunY, playerX, playerY) > 50){
            return false
        } else {
            game.player.sumOfCollectedSuns++
            game.calculateScore();
            return true
        }
    }
}