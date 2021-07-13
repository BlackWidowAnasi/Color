var ball;


function setup() {
  createCanvas(600,300);
  ball = createSprite(150,150, 15, 15);

}

function draw() 
{
  background(30);
  if (keyIsDown(UP_ARROW)){
    ball.shapeColor = "red";
  }

  if (keyIsDown(DOWN_ARROW)){
    ball.shapeColor = "white";
  }

  if (keyIsDown(RIGHT_ARROW)){
    ball.shapeColor = "black";
  }

  if (keyIsDown(LEFT_ARROW)){
    ball.shapeColor = "indigo";
  }

  drawSprites()
}




