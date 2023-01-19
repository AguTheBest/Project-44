var bg,bg_img;
var player,player_img;
var invisibleGround;
var obstacle1
var stone1,stone2,stone3
var stoneGroup
var life,heart1,heart2,heart3

function preload(){
bg_img = loadImage("assets/BG 2.jpg");
player_img = loadImage("assets/shooter_2.png");
stone1 = loadImage("assets/Stone1.png")
stone2 = loadImage("assets/Stone2.png")
stone3 = loadImage("assets/Stone3.png")

heart1 = loadImage("assets/heart_1.png")
heart2 = loadImage("assets/heart_2.png")
heart3 = loadImage("assets/heart_3.png")
}

function setup(){
  createCanvas(1200,800);
  bg = createSprite(555,300);
  bg.addImage("background",bg_img)
  bg.scale = 2.4

  player = createSprite(100,333);
  player.addImage("plyr",player_img);
  player.scale = 0.4
  
  invisibleGround = createSprite(400,555,800,10)
  invisibleGround.visible = false

  life = createSprite(1000,50)
  life.addImage("ht3",heart3)
  life.scale = 0.5

  stoneGroup = createGroup();
}


function draw(){
  background("lightgray");
  bg.velocityX = -3

  if(keyDown('UP_ARROW')){
    player.velocityY = -20;
  }
  player.velocityY += 0.8
  player.collide(invisibleGround)
  player.debug = true

  if(bg.x<10){
    bg.x = 1100
  }

  if(stoneGroup.isTouching(player)){
    console.log("hello")
  }


  drawSprites();
  spawnObstacles()

  
}

function spawnObstacles(){
  if(frameCount%75 == 0){
  obstacle1 = createSprite(1000,random(400,600))
  obstacle1.velocityX = -7
  obstacle1.scale = .3
  var obstacleno = Math.round(random(1,3))
  switch(obstacleno){
    case 1: obstacle1.addImage(stone1);
    break;
    case 2: obstacle1.addImage(stone2);
    break;
    case 3: obstacle1.addImage(stone3);
    break;
    } 
    stoneGroup.add(obstacle1)
  }
}
