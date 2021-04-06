class Sun {
    constructor (){
        this.x = width;
        this.y = (Math.random() * height) / 1.01;
    }

    draw (){
        image(game.sunImage, this.x, this.y, 40, 40);
        this.x -= 4.5;
    }
}