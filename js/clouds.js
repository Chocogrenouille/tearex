class Clouds {
    draw () {

          // // I want to loop through those to create the impression of moving clouds
        for (let i = 0; i < game.cloudImages.length; i++){
            game.cloudImages[i].x -= 10;
        image(game.cloudImages[i].src, game.cloudImages[i].x, 0, width, height);
        image(game.cloudImages[i].src, game.cloudImages[i].x + width, 0, width, height);

        if(game.cloudImages[i].x <=  -width){
            game.cloudImages[i].x = 0;
        }

        }

    }
}