var ball;
var canvas

function setup() {
  createCanvas(600,300);
  canvas = createSprite(600,300, 1500, 1000);
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

  if (keyIsDown(UP_ARROW)){
    canvas.shapeColor = "black";
  }

  if (keyIsDown(DOWN_ARROW)){
    canvas.shapeColor = "indigo";
  }

  if (keyIsDown(RIGHT_ARROW)){
    canvas.shapeColor = "red";
  }

  if (keyIsDown(LEFT_ARROW)){
    canvas.shapeColor = "white";
  }
  drawSprites()
}




