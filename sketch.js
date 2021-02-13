var backgroundImg, background;
var cat, mouse;
var catImg, mouseImg, catImg2, catImg3, mouseImg2, mouseImg3;

function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background = createSprite(500,400,1000,800);
    background.addImage("background",backgroundImg);
    background.scale = 1.15;
    cat = createSprite (800,640,100,100);
    cat.addAnimation("catSitting",catImg);
    cat.scale = 0.2;
    mouse = createSprite(200,680,100,100);
    mouse.addAnimation("mouseEating", mouseImg);
    mouse.scale= 0.1;
   
}

function draw() {
   
    //Write condition here to evalute if tom and jerry collide
    keyPressed();

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("sitting",catImg3);
        cat.changeAnimation("sitting");
        mouse.addAnimation("sitting",mouseImg3);
        mouse.changeAnimation("sitting");
        cat.velocityX = 0;
        
    }

    drawSprites();
    
}


function keyPressed(){

    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.addAnimation("running",catImg2);
        cat.changeAnimation("running");
        cat.velocityX = -4;
        mouse.addAnimation("teasing", mouseImg2);
        mouse.changeAnimation("teasing");
    }


}
