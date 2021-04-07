class Game {
    constructor () {
        this.mountainImages;
        this.cloudImages;
        this.TreeImage;
        this.playerImage;
        this.teaImage;
        this.sunImage;
        this.panImage;
        this.bagImage;
        this.timeImage;
    }

    setup () {
        this.mountain = new Mountain();
        this.tree = new Tree();
        this.clouds = new Clouds();
        this.player = new Player();

        // Creating empty array for items to collect
        this.collectedLeaves = [];
        this.collectedSuns = [];
        this.collectedPans = [];
        this.collectedBags = [];
        this.collectedTimes = [];
    }

    preload () {
        this.mountainImages = [
            {src: loadImage('../img/background/1.png')},
            {src: loadImage('../img/background/2.png')},
            {src: loadImage('../img/background/3.png')},
        ]
        this.cloudImages = [
            {src: loadImage('../img/background/4.png'), x: 0},
            {src: loadImage('../img/background/5.png'), x: 0}
        ]
        this.treeImage = loadImage('../img/background/6.png');
        this.playerImage = loadImage('../img/player.png');
        this.teaImage = loadImage('../img/tealeaves.png');
        this.sunImage = loadImage('../img/sun.png');
        this.panImage = loadImage('../img/pan.png');
        this.bagImage = loadImage('../img/bag.png');
        this.timeImage = loadImage('../img/time.png');
    }

    draw (){
        if (this.player.level === 0){
            this.landingPage();
        }
        if(this.player.level === 1){
            this.levelOne();
        }
        if(this.player.level === 1.5){
            background('#dfdc65');
            fill('white');
            textSize(20);
            textAlign('center');
            text('Congratulations! You made it to the next level. Now that you have mastered the art of white tea (which, by the way, was only reserved for the emperor), we will now make some green tea!', 170, 100, width/1.6)
            text('To make green tea, you need to stop the oxidation of the leaves after they have been picked. For this pick up some roasting pans as well as the leaves.', 170, 250, width/1.6);
            text('But be careful: too many roasting pans and you will burn the tea and the little Tea-Rex will lose a life :(', 170, 380, width/1.6);
            fill('#c76259')
            textSize(25)
            text('Press ENTER to continue.', 170, 500, width/1.6);
            this.player.score = 0;
            document.querySelector('body > div > p.score').innerText = this.player.score;
            document.querySelector('body > div > p.levels').innerText = 2;
        }
        if (this.player.level === 2) {
            this.levelTwo();
        }
        if(this.player.level === 2.5){
            background('#dfdc65');
            fill('white');
            textSize(20);
            textAlign('center');
            text('Congratulations! You made it to the next level again. Let us move on to some black tea.', 170, 60, width/1.6); 
            text('When the British discovered tea, they smuggled a few tea plants out of China and desperately tried to grow the plant in India - without much success. Only years later, they found out that India already had its own native variant growing happily in the region of Assam. It was only then that tea became a staple drink in Britain.', 170, 150, width/1.6)
            text('To make black tea, you need your tea leaves to fully oxidise. So give them a gentle bruising with the stick and then sit, drink some time and watch the world pass by as your tea leaves transform.', 170, 330, width/1.6);
            text('But be careful: do not collect any pans because nobody wants to drink that.', 170, 460, width/1.6);
            fill('#c76259')
            textSize(25)
            text('Press ENTER to continue.', 170, 540, width/1.6);
            this.player.score = 0;
            document.querySelector('body > div > p.score').innerText = this.player.score;
            document.querySelector('body > div > p.levels').innerText = 3;
        }
        if(this.player.level === 3){
            this.levelThree();
        }

        if(this.player.lives === 0){
            background('#dfdc65');
            fill('white');
            textSize(20);
            textAlign('center');
            text('Oh no! The little Tea-Rex messed up the tea. Unfortunately that means he needs to build up the faith of his customers again and will need to start at level one', 170, 200, width/1.6)
            fill('#c76259')
            textSize(25)
            text('Press ENTER to start again.', 170, 500, width/1.6);
        }
    }

    landingPage(){
        background('#dfdc65')
        textSize(40);
        fill('white');
        textAlign('center');
        text('Time to Partea with the little Tea-Rex', 450, 100);

        textSize(20);
        text('Help the the Tea-Rex to collect tea leaves and the necessary items to make different kinds of tea. We will start with the easiest one: white tea. As this one will only require dried tea leaves, collect some leaves and suns to make your tea. Once you have reached 100 points, you will level up.', 170, 200, width/1.6);
        text('You can move the Tea-Rex by using the left and right arrow key as well as jump up with the space bar.', 170, 370, width/1.6);
        
        textSize(30);
        fill('#c76259');
        text('Press ENTER to start the game.', 170, 490, width/1.6)
    }

    levelOne () {
        clear();
        this.mountain.draw();
        this.clouds.draw();
        this.tree.draw();
        this.player.draw()

        // This one creates new tea leaves
        if (frameCount % 150 === 0) {
            this.collectedLeaves.push(new Tea(this.teaImage))
        }
        this.collectedLeaves.forEach(function (leaf){
            leaf.draw();
        })

        // This one creates new suns
        if (frameCount % 200 === 0) {
            this.collectedSuns.push(new Sun(this.sunImage))
        }
        this.collectedSuns.forEach(function (sun){
            sun.draw();
        })

        // Uses collection function to "pop" items, when collection function is returned true
       this.collectedLeaves = this.collectedLeaves.filter (leaf => {
            if (leaf.collection(this.player) || leaf.x < 0) {
                return false
            } else {
                return true
            }
       })

       this.collectedSuns = this.collectedSuns.filter (sun => {
            if (sun.collection(this.player) || sun.x < 0) {
                return false
            } else {
                return true
            } 
        })
    }

    ////////////////////////////////// LEVEL TWO //////////////////////////////////
    levelTwo(){
        clear();
        this.mountain.draw();
        this.clouds.draw();
        this.tree.draw();
        this.player.draw()

        if (frameCount % 150 === 0) {
            this.collectedLeaves.push(new Tea(this.teaImage))
        }
        this.collectedLeaves.forEach(function (leaf){
            leaf.draw();
        })

        if (frameCount % 200 === 0) {
            this.collectedPans.push(new Pan(this.panImage))
        }
        this.collectedPans.forEach(function (pan){
            pan.draw();
        })

        this.collectedLeaves = this.collectedLeaves.filter (leaf => {
            if (leaf.collection(this.player) || leaf.x < 0) {
                return false
            } else {
                return true
            }
       })

       this.collectedPans = this.collectedPans.filter (wok => {
            if (wok.collection(this.player) || wok.x < 0) {
                return false
            } else {
                return true
            } 
        })
    }

    /////////////////////////// LEVEL THREE //////////////////////////////
    levelThree () {
        clear();
        this.mountain.draw();
        this.clouds.draw();
        this.tree.draw();
        this.player.draw()

        /// TEA LEAVES
        if (frameCount % 150 === 0) {
            this.collectedLeaves.push(new Tea(this.teaImage))
        }
        this.collectedLeaves.forEach(function (leaf){
            leaf.draw();
        })
        /// SUNS
        if (frameCount % 200 === 0) {
            this.collectedSuns.push(new Sun(this.sunImage))
        }
        this.collectedSuns.forEach(function (sun){
            sun.draw();
        })
        /// BAGS
        if (frameCount % 200 === 0) {
            this.collectedBags.push(new Bag(this.bagImage))
        }
        this.collectedBags.forEach(function (bag){
            bag.draw();
        })
        /// TIME
        if (frameCount % 200 === 0) {
            this.collectedTimes.push(new Time(this.timeImage))
        }
        this.collectedTimes.forEach(function (time){
            time.draw();
        })

        // Uses collection function to "pop" items, when collection function is returned true
       this.collectedLeaves = this.collectedLeaves.filter (leaf => {
            if (leaf.collection(this.player) || leaf.x < 0) {
                return false
            } else {
                return true
            }
       })
       this.collectedSuns = this.collectedSuns.filter (sun => {
            if (sun.collection(this.player) || sun.x < 0) {
                return false
            } else {
                return true
            } 
        })
        this.collectedBags = this.collectedBags.filter (bag => {
            if (bag.collection(this.player) || bag.x < 0) {
                return false
            } else {
                return true
            }
       })
       this.collectedTimes = this.collectedTimes.filter (time => {
        if (time.collection(this.player) || time.x < 0) {
            return false
        } else {
            return true
        }
   })
    }

    scoreLevelOne (item) {
         if (this.player.level === 1) {
            if (item === 'leaf'){
                if (this.player.sumOfCollectedTeaLeaves.length <= this.player.sumOfCollectedSuns.length) {
                 this.player.score += 10;
                 document.querySelector('body > div > p.score').innerText = this.player.score;
               } 
              } else if (item === 'sun'){
                if (this.player.sumOfCollectedTeaLeaves.length >= this.player.sumOfCollectedSuns.length) {
                  this.player.score += 10;
                  document.querySelector('body > div > p.score').innerText = this.player.score;
                }
              }
            return this.player.score
        } 
    }      

    scoreLevelTwo (){
        if(this.player.sumOfCollectedPans.length-this.player.sumOfCollectedTeaLeaves.length > 3){
            this.player.lives -= 1;
            document.querySelector('body > div > p.lives').innerText = this.player.lives;
        }   

        if (this.player.sumOfCollectedPans.length === this.player.sumOfCollectedTeaLeaves.length) {
            this.player.score += 10;
            console.log(this.player.score);
            document.querySelector('body > div > p.score').innerText = this.player.score;
        }
    }
    scoreLevelThree (){
        if (this.player.sumOfCollectedSuns === 1) {
            this.player.lives -= 1;
        } else if (this.player.sumOfCollectedSuns === 2){
            this.player.lives -= 1;
        } else if (this.player.sumOfCollectedSuns === 3){
            this.player.lives -= 1;
        }
        console.log(this.player.lives)
    }
    
    levellingUp () {
        if (this.player.score === 20){
            this.player.level += .5;
        }
    }

}

   
            



