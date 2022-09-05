var seaImg, sea;
var shipImg, ship



function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png");

if (sea.x <0){
  sea.x=seawidth/2;
}
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(100,200,10,10);
  sea.addImage("sea", seaImg);
  sea.scale= 0.2;
  sea.velocityX=-5;

  ship = createSprite(100,190,50,50);
  ship.addAnimation("ship", shipImg);
  ship.scale= 0.18
 
}

function draw() {
 
  background("blue");
 drawSprites();
}
