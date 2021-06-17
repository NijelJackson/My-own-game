var npc,egypt,bg,run,player,obstacle

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bg=loadImage("images/egypt-.jpg")
	npc=loadAnimation("images/npc.gif")
	run=loadAnimation("images/Running.gif")
jump=loadAnimation("images/jump.gif")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
egypt=createSprite(400,130)
egypt.addImage(bg)
egypt.scale=3
	egypt.velocityX=-3
	player=createSprite(100,570)
	player.addAnimation("play",run)
	player.scale=0.5
	ground=createSprite(200,670,400,10)
	ground.visible=false
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites()
if(egypt.x<0){
	egypt.x=400
}
	spawnObstacles();
  if(keyDown("space")){
	  player.velocityY=-10
	//   player.addAnimation("jump",jump)
	//   player.changeAnimation("jump",jump)
  }
	
	player.velocityY+=0.8
	player.collide(ground)

  Engine.update(engine);
}		
function spawnObstacles(){
	if(frameCount%200===0){
	
	
	obstacle=createSprite(800,Math.round(random(500,580)))
	obstacle.addAnimation("avc",npc)
	obstacle.scale=0.5
	obstacle.velocityX=-5
	}

}