var racketPlayer1;
var racketPlayer2;

var red_racket;
var blue_racket;

var hitSound;
var scoreSound;

var ballImg;

var ball;
var line1;
var line2;
var line3;
var line4;
var line5;
var line6;
var gameState = 0;

var pointsPlayer1 = 0;
var pointsPlayer2 = 0;

function preload(){
  red_racket = loadImage("assets/red_racket.png");
  blue_racket = loadImage("assets/blue_racket.png");
  ballImg = loadImage("assets/tennisball.png");

  hitSound = loadSound("assets/hit.mp3");
  scoreSound = loadSound("assets/score.mp3");
}

function setup() {
  createCanvas(1366,623);
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
  ball.addImage("ball", ballImg);
  ball.scale = 0.1;
  racketPlayer1 = createSprite(50, 331.5,20,80);
  racketPlayer1.addImage("red racket", red_racket);
  racketPlayer1.scale = 0.5;
  racketPlayer2 = createSprite(1316,331.5,20,80);
  racketPlayer2.addImage("blue racket", blue_racket);
  racketPlayer2.scale = 0.5;
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
    if(gameState===0){
      ball.velocityX=12;
      ball.velocityY=10;
      gameState = 1
    } 
  }
  if (ball.isTouching(line5)){
    scoreSound.play();
    pointsPlayer2 = pointsPlayer2 + 1;
    ball.x=683;
    ball.y=331.5;
    ball.velocityX=0;
    ball.velocityY=0;
    gameState=0;
  }
  if (ball.isTouching(line6)){
    scoreSound.play();
    pointsPlayer1 = pointsPlayer1 + 1;
    ball.x=683;
    ball.y=331.5;
    ball.velocityY=0;
    ball.velocityX=0;
    gameState=0;
  }
  if (ball.isTouching(racketPlayer1) || (ball.isTouching(racketPlayer2))){
   hitSound.play();
  }

  ball.bounceOff(line3);
  ball.bounceOff(line4);
  ball.bounceOff(racketPlayer1);
  ball.bounceOff(racketPlayer2);


  fill("red");
  textSize(25);
  text(pointsPlayer1,1000,40);

  fill("blue");
  textSize(25);
  text(pointsPlayer2,1000,60);
}
