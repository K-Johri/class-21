var fixedRectangle;
var movingRectangle;
var gameObject1;
var gameObject2;
var gameObject3;
var gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(400, 200, 50, 50);
  fixedRectangle.shapeColor = "black";
  movingRectangle = createSprite(400,200,50,50);
  movingRectangle.shapeColor = "black";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "purple";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "purple";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "purple";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "purple";

  movingRectangle.velocityY = -5;
  fixedRectangle.velocityY = +5;
  
}

function draw() {
  background(255,255,255);  

  // movingRectangle.x = World.mouseX;
  // movingRectangle.y = World.mouseY;

  console.log(movingRectangle.x - fixedRectangle.x);
  
  // if(isTouching(movingRectangle,gameObject1)){
  //   movingRectangle.shapeColor = "red";
  // }else{
  //   movingRectangle.shapeColor = "green";
  // }

bounceOff(movingRectangle,fixedRectangle);

  drawSprites();
}

