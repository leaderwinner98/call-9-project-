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
  background("red");
}
if(keyIsDown(LEFT_ARROW)){
  ball.position.x =  ball.position.x - 5;
  background("blue");
} 
if(keyIsDown(DOWN_ARROW)){
  ball.position.y =  ball.position.y +5;
  background  ("yellow");
}
if(keyIsDown(UP_ARROW)){
  ball.position.y = ball.position.y -5;
  background ("green");
}






drawSprites();
}




