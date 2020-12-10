var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);
 
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  
  
  
   ground = createSprite(200,200,400,20);
  ground.x = ground.width /2;
  console.log(ground.x);
  
    obstacleGroup = createGroup();
    FoodGroup = createGroup();

  

}


function draw() {
  background(180);
  
  
  ground.velocityX = -(4 + 3* survivalTime/100)
    
   //scoring
   survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 155) {
        monkey.velocityY = -12;
        
    }
  
  ground.visible=false;
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //add gravity
    monkey.velocityY = monkey.velocityY + 0.5
  
  
  //eat the fruit
  if (monkey .isTouching(FoodGroup)){
    FoodGroup.destroyEach();
  }
  

  //stop trex from falling down
  monkey.collide(ground);
  
  monkey.collide(obstacleGroup)
  
  if (obstacleGroup.isTouching(monkey)){
      obstacleGroup.velocityX=0;
      ground.velocityX=0;
      FoodGroup.velocityX=0;
      background(0); 
  }
  
  //creating continous fruits
  var select_banana = Math.round(random(1,5));
   banana1();
  
  //creating continous obstace
   obstace1();
  
 drawSprites();
  
  
    text("survivalTime="+survivalTime, 250,50);
}
function banana1(){
  
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
     banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(40,80));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.scale=0.1;
    FoodGroup.add(banana);
    return banana;
  }

}

function obstace1(){
    //write code here to spawn the clouds
  if (frameCount %220 === 0) {
    obstace = createSprite(600,160,20,50);
    obstace.addImage(obstaceImage);
    obstace.velocityX = -3;
    obstace.scale=0.18;
    obstace.debug=true;
    obstacleGroup.add(obstace);
    return obstace;
  }

}


