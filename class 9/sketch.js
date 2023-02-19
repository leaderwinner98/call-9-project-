var ball;
function setup() {
  createCanvas(400,400);
  ball=createSprite(25,70,50,50)

}

function draw() 
{
  background(30);
  
if(keyIsDown(RIGHT_ARROW)) {
  ball.position.x = ball.position.x + 5;
  ball.shapeColor ="red";
}
if(keyIsDown(LEFT_ARROW)){
  ball.position.x =  ball.position.x - 5;
  ball.shapeColor ="blue";
} 
if(keyIsDown(DOWN_ARROW)){
  ball.position.y =  ball.position.y +5;
  ball.shapeColor = "yellow";
}
if(keyIsDown(UP_ARROW)){
  ball.position.y = ball.position.y -5;
  ball.shapeColor = "green";
}






drawSprites();
}




