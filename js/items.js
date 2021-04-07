class Sun {
    constructor (){
        this.x = width;
        this.y = (Math.random() * height) / 1.01;
        this.width = 40;
        this.height = 40;
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
            game.player.sumOfCollectedSuns.push('sun');
            game.scoreLevelOne('sun');
            game.scoreLevelThree();
            game.levellingUp();
            return true
        }
    }
}

class Pan {
    constructor (){
        this.x = width;
        this.y = (Math.random() * height) / 1.01;
        this.width = 40;
        this.height = 40;
    }

    draw (){
        image(game.panImage, this.x, this.y, this.width, this.height);
        this.x -= 4.5;
    }

    collection (playerSize) {
        //getting the centre of the tea icon
        const panX = this.x + this.width / 2;
        const panY = this.y + this.height / 2;

        //getting the centre of the player icon
        const playerX = playerSize.x + playerSize.width / 2;
        const playerY = playerSize.y + playerSize.height / 2;

        // if distance between all those coordinates is larger than 25, nothing happens
        // else the score of the player is increased
        if (dist(panX, panY, playerX, playerY) > 50){
            return false
        } else {
            game.player.sumOfCollectedPans.push('pan');
           game.scoreLevelTwo();
            game.levellingUp();
            return true
        }
    }    
}

class Bag {
    constructor (){
        this.x = width;
        this.y = (Math.random() * height) / 1.01;
        this.width = 40;
        this.height = 40;
    }

    draw (){
        image(game.bagImage, this.x, this.y, this.width, this.height);
        this.x -= 3;
    }

    collection (playerSize) {
        //getting the centre of the tea icon
        const bagX = this.x + this.width / 2;
        const bagY = this.y + this.height / 2;

        //getting the centre of the player icon
        const playerX = playerSize.x + playerSize.width / 2;
        const playerY = playerSize.y + playerSize.height / 2;

        // if distance between all those coordinates is larger than 25, nothing happens
        // else the score of the player is increased
        if (dist(bagX, bagY, playerX, playerY) > 50){
            return false
        } else {
            game.player.sumOfCollectedBags.push('bag');
            game.scoreLevelThree('bag');
            game.levellingUp();
            return true
        }
    }
}

class Time {
    constructor (){
        this.x = width;
        this.y = (Math.random() * height) / 1.01;
        this.width = 40;
        this.height = 40;
    }

    draw (){
        image(game.timeImage, this.x, this.y, this.width, this.height);
        this.x -= 1;
    }

    collection (playerSize) {
        //getting the centre of the tea icon
        const timeX = this.x + this.width / 2;
        const timeY = this.y + this.height / 2;

        //getting the centre of the player icon
        const playerX = playerSize.x + playerSize.width / 2;
        const playerY = playerSize.y + playerSize.height / 2;

        // if distance between all those coordinates is larger than 25, nothing happens
        // else the score of the player is increased
        if (dist(timeX, timeY, playerX, playerY) > 50){
            return false
        } else {
            game.player.sumOfCollectedTimes.push('time');
            game.scoreLevelThree('time');
            game.levellingUp();
            return true
        }
    }
}