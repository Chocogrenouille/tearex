class Tea {
    constructor (){
        this.x = width;
        this.y = (Math.random() * height) / 1.01;
    }

    draw (){
        image(game.teaImage, this.x, this.y, 40, 40);
        this.x -= 4;
    }
}