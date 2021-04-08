class Game {
    constructor () {
        this.mountainImages;
        this.cloudImages;
        this.TreeImage;
        this.playerImage;
        this.playerImageLeft;
        this.playerImageJump;
        this.teaImage;
        this.sunImage;
        this.panImage;
        this.bagImage;
        this.timeImage;
        this.bugImage;
        this.patternIndex = 0;
        this.tearexImage;
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
        this.collectedBugs = [];
    }

    preload () {
        this.mountainImages = [
            {src: loadImage('img/background/1.png')},
            {src: loadImage('img/background/2.png')},
            {src: loadImage('img/background/3.png')},
        ]
        this.cloudImages = [
            {src: loadImage('img/background/4.png'), x: 0},
            {src: loadImage('img/background/5.png'), x: 0}
        ]
        this.treeImage = loadImage('img/background/6.png');
        this.playerImage = loadImage('img/player.png');
        this.playerImageLeft = loadImage('img/player-left.png');
        this.playerImageJump = loadImage('img/player-jump.png');
        this.teaImage = loadImage('img/tealeaves.png');
        this.sunImage = loadImage('img/sun.png');
        this.panImage = loadImage('img/fire.png');
        this.bagImage = loadImage('img/bag.png');
        this.timeImage = loadImage('img/time.png');
        this.bugImage = loadImage('img/caterpillar.png');
        this.tearexImage = loadImage('img/winning.jpeg');

        this.headingFont = loadFont('fonts/FrederickatheGreat-Regular.ttf');
        this.regularFont = loadFont('fonts/Raleway-Light.ttf');
    }

    draw (){
        if (this.player.level === 0){
            this.landingPage();
        }
        if(this.player.level === 1){
            console.log('yay')
            this.levelOne();
        }
        if(this.player.level === 1.5){
            background('#dfdc65');
            fill('white');
            textSize(25);
            textAlign('center');
            textFont(this.regularFont);
            text('Congratulations! You made it to the next level. Now that you have mastered the art of white tea (which, by the way, was only reserved for the emperor), we will now make some green tea!', 170, 100, width/1.6)
            text('To make green tea, you need to stop the oxidation of the leaves after they have been picked. For this pick up some fire as well as the leaves.', 170, 250, width/1.6);
            text('But be careful: too many roasting pans and you will burn the tea and the little Tea-Rex will lose a life :(', 170, 400, width/1.6);
            fill('#c76259')
            textSize(30)
            textFont(this.headingFont);
            text('Press ENTER to continue.', 170, 550, width/1.6);
            this.player.score = 0;
            document.querySelector('body > div > span.score').innerText = this.player.score;
            document.querySelector('body > div > span.levels').innerText = 2;
            
        }
        if (this.player.level === 2) {
            this.levelTwo();
        }
        if(this.player.level === 2.5){
            background('#dfdc65');
            fill('white');
            textSize(25);
            textAlign('center');
            textFont(this.regularFont);
            text('Congratulations! You made it to the next level again. Let us move on to some black tea.', 170, 70, width/1.6); 
            text('The British actually smuggled some tea plants out of China when they discovered tea and desperately tried to grow the plant in India - without much success. Only years later, they discovered that India already had its own native variant growing happily in the region of Assam. Only then tea became a staple drink in Britain.', 170, 150, width/1.6)
            text('To make black tea, the tea leaves need to fully oxidise. So give them a little roll in the bag and then wait as your tea leaves transform.', 170, 390, width/1.6);
            text('But be careful: do not collect any pans because nobody wants to drink that.', 170, 500, width/1.6);
            fill('#c76259')
            textSize(30)
            textFont(this.headingFont);
            text('Press ENTER to continue.', 170, 580, width/1.6);
            this.player.score = 0;
            this.player.lives = 3;
            document.querySelector('body > div > span.score').innerText = 0;
            document.querySelector('body > div > span.levels').innerText = 3;
        }
        if(this.player.level === 3){
            this.levelThree();
        }
        if(this.player.level === 3.5){
            background('#dfdc65');
            fill('white');
            textSize(25);
            textAlign('center');
            textFont(this.regularFont)
            text('Wow, you have helped the little Tea-Rex to become an absolute tea master! Now we are ready to make one of the most difficult tea: an Oolong.', 170, 80, width/1.6); 
            text('The Tea-Rex really wants to make a specfic kind of oolong: a formosa variety. Therefore, the tea leaves need to be eaten a bit by a caterpillar before the harvest.', 170, 250, width/1.6);
            text('Otherwise, the process is the same as the black tea. However, keep the order this time: first is the caterpillar which is then followed by leaf, bag and time.', 170, 400, width/1.6);
            fill('#c76259')
            textSize(30)
            textFont(this.headingFont);
            text('Press ENTER to continue.', 170, 560, width/1.6);
            this.player.score = 0;
            this.player.lives = 3;
            document.querySelector('body > div > span.score').innerText = 0;
            document.querySelector('body > div > span.levels').innerText = 3;
        }
        if(this.player.level === 4){
            this.levelFour();
        }

        if(this.player.level === 4.5){
            background('#faedda');
            fill('#c76259');
            textSize(70);
            textAlign('center');
            textFont(this.headingFont);
            text('You’re tea-riffic!', 170, 100, width/1.6); 
            textSize(20);
            textFont(this.regularFont);
            text('Looks like you helped the little Tea-rex to become a true Royal-tea among tea masters. Well done!', 170, 170, width/1.6); 
            image(this.tearexImage, 300, 230, 300, 300)
            textSize(20)
            textFont(this.headingFont);
            text('Press ENTER to play again.', 170, 570, width/1.6);
            this.player.score = 0;
            this.player.lives = 3;
            document.querySelector('body > div > span.score').innerText = 0;
            document.querySelector('body > div > span.levels').innerText = 4;
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
            document.querySelector('body > div > span.score').innerText = 0;
        }
    }

    landingPage(){
        background('#dfdc65');
        textSize(40);
        fill('#c76259');
        textAlign('center');
        textFont(this.headingFont);
        text('Time to Partea with the little Tea-Rex', 450, 100);

        textSize(25);
        textFont(this.regularFont);
        fill('white');
        text('Help the the Tea-Rex to collect tea leaves and the necessary items to make different kinds of tea. We will start with the easiest one: white tea. As this one will only require dried tea leaves, collect some leaves and suns to make your tea. Once you have reached 100 points, you will level up.', 170, 180, width/1.6);
        text('You can move the Tea-Rex by using the left and right arrow key as well as jump up with the space bar.', 170, 420, width/1.6);
        
        textSize(30);
        textFont(this.headingFont);
        fill('#c76259');
        text('Press ENTER to start the game.', 170, 550, width/1.6)
    }

    /////////////////////////////// LEVEL ONE ////////////////////////////////////////
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
//////////////////////////////////// LEVEL FOUR /////////////////////////////
    levelFour (){
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
        /// CATERPILLARS
        if (frameCount % 200 === 0) {
            this.collectedBugs.push(new Bug(this.bugImage))
        }
        this.collectedBugs.forEach(function (bug){
            bug.draw();
        })

        // Uses collection function to "pop" items, when collection function is returned true
       this.collectedLeaves = this.collectedLeaves.filter (leaf => {
            if (leaf.collection(this.player) || leaf.x < 0) {
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
        this.collectedBugs = this.collectedBugs.filter (bug => {
            if (bug.collection(this.player) || bug.x < 0) {
                return false
            } else {
                return true
            }
        })
    }

    scoreLevelOne (item) {
        if (this.player.level !== 1) return

        const collectedLeaves = this.player.sumOfCollectedTeaLeaves.length;
        const collectedSuns = this.player.sumOfCollectedSuns.length;
         
            if (item === 'leaf' && collectedLeaves <= collectedSuns) {
                this.player.score += 10;
            }
            if (item === 'sun' && collectedLeaves >= collectedSuns) {
                this.player.score += 10;
            }
            document.querySelector('body > div > span.score').innerText = this.player.score;
            return this.player.score
    }        

    scoreLevelTwo (item){
        if (this.player.level !== 2) return;

        const collectedLeaves = this.player.sumOfCollectedTeaLeaves.length;
        const collectedPans = this.player.sumOfCollectedPans.length;

        if(collectedPans - collectedLeaves > 3){
            this.player.lives -= 1;
        }   
        if (item === 'leaf' && collectedLeaves <= collectedPans) {
            this.player.score += 10;
        }
        if (item === 'pan' && collectedLeaves >= collectedPans) {
            this.player.score += 10;
        }
        document.querySelector('body > div > span.lives').innerText = this.player.lives;
        document.querySelector('body > div > span.score').innerText = this.player.score;
         return this.player.score && this.player.lives;
    }

    scoreLevelThree (item){
        if (this.player.level !== 3) return;

        const collectedLeaves = this.player.sumOfCollectedTeaLeaves.length;
        const collectedBags = this.player.sumOfCollectedBags.length;
        const collectedTimes = this.player.sumOfCollectedTimes.length;
        
        // Loosing lives for sun collection
        if (item === 'sun') {
            this.player.lives -= 1;
        }
        const lessLeavesThanBags = collectedLeaves <= collectedBags;
        const lessLeavesThanTimes = collectedLeaves <= collectedTimes;
            const leafGettingPoints = lessLeavesThanBags && lessLeavesThanTimes;
            
        const lessBagsThanTimes = collectedBags <= collectedTimes
        const lessBagsThanLeaves = collectedBags <= collectedLeaves; 
            const bagGettingPoints = lessBagsThanTimes && lessBagsThanLeaves;
            
        const lessTimesThanLeaves = collectedTimes < collectedLeaves;
        const lessTimesThanBags = collectedTimes <= collectedLeaves;
            const timeGettingPoints = lessTimesThanLeaves && lessTimesThanBags;
            
        // Collection logic
        if (item === 'leaf' && leafGettingPoints) {
            this.player.score += 10;
        }
        if (item === 'bag' && bagGettingPoints) {
            this.player.score += 10;
        }
        if (item === 'time' && timeGettingPoints) {
            this.player.score += 10;
        }

        document.querySelector('body > div > span.lives').innerText = this.player.lives;
        document.querySelector('body > div > span.score').innerText = this.player.score;
        return this.player.lives && this.player.score
    }

    scoreLevelFour(item){
        if (this.player.level !== 4) return;

        const order = ['bug', 'leaf', 'bag', 'time'];

        if (item === order[this.patternIndex]) {
            this.patternIndex++
        } else {
            this.patternIndex = 0;
            this.player.lives -= 1;
        }

        if (this.patternIndex === order.length) {
            this.player.score += 10;
            this.patternIndex = 0;
        } 
        document.querySelector('body > div > span.lives').innerText = this.player.lives;
        document.querySelector('body > div > span.score').innerText = this.player.score;
        return this.player.lives && this.player.score
    }
    
    levellingUp () {
        if (this.player.score === 50){
            this.player.level += .5;
        }
    }

}