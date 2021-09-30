var path,boy, leftBoundary,rightBoundary,car1,car2,truck,lose,tb1,tb2,tb3,tb4,cb1,cb2,cb3,cb4,cb5,cb6,cb7,cb8;
var pathImg,boyImg,car1Img,car2Img,truckImg,loseImg;
var x;
var y;
var a;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  car1Img = loadImage("car for run jaxon.png");
  car2Img = loadImage("car2.png");
  truckImg = loadImage("truck.png");
  loseImg = loadImage("lose.png");
}

function setup(){
  createCanvas(400,400);  

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  boy = createSprite(180,340,1,1);
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImg);

  car1=createSprite(70,0,100,100);
  car1.addImage("car",car1Img);
  car1.velocityY = 9;
  car1.scale = 0.2;
  cb1 = createSprite(70,35,60,10);
  cb1.velocityY = 9;
  cb1.visible = false;
  cb2 = createSprite(45,-5,10,80);
  cb2.velocityY = 9;
  cb2.visible = false;
  cb3 = createSprite(95,-5,10,80);
  cb3.velocityY = 9;
  cb3.visible = false;
  cb4 = createSprite(70,-40,50,10);
  cb4.velocityY = 9;
  cb4.visible = false;

  car2=createSprite(340,20,100,100);
  car2.addImage("car2",car2Img);
  car2.velocityY = 13;
  car2.scale = 0.2;
  cb5 = createSprite(340,55,60,10);
  cb5.velocityY = 13;
  cb5.visible = false;
  cb6 = createSprite(315,15,10,80);
  cb6.velocityY = 13;
  cb6.visible = false;
  cb7 = createSprite(365,15,10,80);
  cb7.velocityY = 13;
  cb7.visible = false;
  cb8 = createSprite(340,-20,50,10);
  cb8.velocityY = 13;
  cb8.visible = false;
  
  truck = createSprite(200,-50,100,100);
  truck.addImage("truck",truckImg);
  truck.velocityY = 3;
  truck.scale = 0.2;
  tb1 = createSprite(200,-15,50,10);
  tb1.velocityY = 3;
  tb1.visible = false;
  tb2 = createSprite(180,-50,10,70);
  tb2.velocityY = 3;
  tb2.visible = false;
  tb3 = createSprite(220,-50,10,70);
  tb3.velocityY = 3;
  tb3.visible = false;
  tb4 = createSprite(200,-90,50,10);
  tb4.velocityY = 3;
  tb4.visible = false;

  lose = createSprite(200,200,400,400);
  lose.visible = false;
  lose.scale = 0.5;

  leftBoundary=createSprite(0,0,50,800);
  rightBoundary=createSprite(400,0,50,800);

  rightBoundary.visible = false;
  leftBoundary.visible = false;
  lose.addImage("lose screen",loseImg);
}

function draw() {
  background(0);

  path.velocityY = 4;

  boy.x = World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  if(path.y > 400){
    path.y = height/2;
  }
  if(car1.y > 1500){
    car1.y = 0;
    car1.velocityY = 9;
    cb1.y = 35;
    cb1.velocityY = 9;
    cb2.y = -5;
    cb2.velocityY = 9;
    cb3.y = -50;
    cb3.velocityY = 9;
    cb4.y = -40;
    cb4.velocityY = 9;
  }
  if(car2.y > 2000){
    car2.y = 0;
    car2.velocityY = 13;
    cb5.y = 55;
    cb5.velocityY = 13;
    cb6.y = 15;
    cb6.velocityY = 13;
    cb7.y = 15;
    cb7.velocityY = 13;
    cb8.y = -20;
    cb8.velocityY = 13;
  }
  if(truck.y > 750){
    truck.y = 0;
    truck.velocityY = 3;
    tb1.y = -15;
    tb1.velocityY = 3;
    tb2.y = -50;
    tb2.velocityY = 3;
    tb3.y = -50;
    tb3.velocityY = 3;
    tb4.y = -90;
    tb4.velocityY = 3;
  }
  if(truck.y > 750){
    truck.y = 0;
    truck.velocityY = 3;
  }
  if(boy.isTouching(tb1)){
    lose.visible = true;
  }
  if(boy.isTouching(tb2)){
    lose.visible = true;
  }
  if(boy.isTouching(tb3)){
    lose.visible = true;
  }
  if(boy.isTouching(tb4)){
    lose.visible = true;
  }
  if(boy.isTouching(cb1)){
    lose.visible = true;
  }
  if(boy.isTouching(cb2)){
    lose.visible = true;
  }
  if(boy.isTouching(cb3)){
    lose.visible = true;
  }
  if(boy.isTouching(cb4)){
    lose.visible = true;
  }
  if(boy.isTouching(cb5)){
    lose.visible = true;
  }
  if(boy.isTouching(cb6)){
    lose.visible = true;
  }
  if(boy.isTouching(cb7)){
    lose.visible = true;
  }
  if(boy.isTouching(cb8)){
    lose.visible = true;
  }
  drawSprites();
}