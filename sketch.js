
var racketPlayer1;
var racketPlayer2;
var ball;
var line1;
var line2;
var line3;
var line4;
var line5;
var line6;
function setup() {
  createCanvas(1366,663);
  line1 = createSprite(683,331.5,5,663);
  line1.shapeColor="white";
  line2 = createSprite(683,331.5,1366,10);
  line2.shapeColor="white";
  line3 = createSprite(683,5,1366,10);
  line3.shapeColor="white";
  line4 = createSprite(683,658,1366,10);
  line4.shapeColor="white";
  line5 = createSprite(5,331.5,10,663);
  line5.shapeColor="white";
  line6 = createSprite(1361,331.5,10,663);
  line6.shapeColor="white";
  ball = createSprite(683,331.5,20,20);
  ball.shapeColor = rgb(220,220,220);
  racketPlayer1 = createSprite(20, 331.5,20,80);
  racketPlayer1.shapeColor = "red";
  racketPlayer2 = createSprite(1346,331.5,20,80);
  racketPlayer2.shapeColor = "blue";
}

function draw() 
{
  background(rgb(30,144,255));
  drawSprites();
  if (keyDown("up")){
    racketPlayer2.y=racketPlayer2.y-15;
  }
  if (keyDown("down")){
    racketPlayer2.y=racketPlayer2.y+15;
  }
  if (keyDown("W")){
    racketPlayer1.y=racketPlayer1.y-15;
  }
  if (keyDown("S")){
    racketPlayer1.y=racketPlayer1.y+15;
  }
  if (keyDown("space")){
      ball.velocityX=12;
      ball.velocityY=10;
    }
      
  }
  if (ball.isTouching(line5)){
    ball.x=683;
    ball.y=331.5;
    ball.velocityX=0;
    ball.velocityY=0;
  }
  if (ball.isTouching(line6)){
    ball.x=683;
    ball.y=331.5;
    ball.velocityY=0;
    ball.velocityX=0;
  }
  ball.bounceOff(line3);
  ball.bounceOff(line4);
  ball.bounceOff(racketPlayer1);
  ball.bounceOff(racketPlayer2);
}
