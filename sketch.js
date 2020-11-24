var ground;
var player;

function setup() {
  createCanvas(1200,600);
 
  ground = createSprite(600,590,12000,20);
  ground.shapeColor = ("yellow")
  player = createSprite(100, 560, 40, 40);
  player.shapeColor = ("red")

 
}

function draw() {
  background(215);  


  if(keyDown("up")){
    player.y = player.y -25;
  }
  if(keyDown("right")){
    player.x = player.x +25;
  }
  if(keyDown("left")){
    player.x = player.x -25;
  }
  
  player.velocityY = player.velocityY + 0.8
  player.collide(ground);

  camera.x = player.x 
  camera.y = player.y
  

  
 

  drawSprites();
}