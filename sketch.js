function setup() {
  createCanvas(800,400);
  square=createSprite(400, 300, 50, 50);
  rect=createSprite(400,200,30,50);
  square.velocityY=-2;
  rect.velocityY=2;
  

}

function draw() {
  background(0);  
  
 
 if(square.x-rect.x<=square.width/2+rect.width/2&&
  rect.x-square.x<=rect.width/2+square.width/2){
    square.velocityX=square.velocityX*-1;
    rect.velocityX=rect.velocityX*-1;
}
if(square.y-rect.y<=square.height/2+rect.height/2&&
  rect.y-square.y<=rect.height/2+square.height/2){
    square.velocityY=square.velocityY*-1;
    rect.velocityY=rect.velocityY*-1;
}
  
 
 
 
 
  drawSprites();
}