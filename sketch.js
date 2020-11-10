const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg;
var ball;
var wall1, wall2, wall3;
var ground;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	bgImg = loadImage("bg.png");

	ground = new Ground(600,650,1200,20);


	//wall1 = new Wall(900,630,500,20);
	//wall2 = new Wall(640,515,20,250);
	//wall3 =  new Wall(1160,515,20,250);
	ball = new Ball(100,630,60,60);
	dustbin = new Dustbin(900, 550, 200,200);

			  
	Engine.run(engine);
  
}


function draw() {

  background(bgImg);
  Engine.update(engine);

 
  //wall1.display();
 // wall2.display();
  //wall3.display();
  ball.display();
  ground.display();
  dustbin.display();

  KeyPressed();

}



function KeyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:35, y:-35})
}
}