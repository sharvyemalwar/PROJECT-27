const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
var ground1,ground2;

function preload()
{
	
}

function setup() {
  createCanvas(1200, 600);
  


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new bob(280,400,60);
    bob2 = new bob(340,400,60);
    bob3 = new bob(400,400,60);
    bob4 = new bob(460,400,60);
    bob5 = new bob(520,400,60);
   rope1 = new Rope(bob1.body,ground2.body,10,0);

    ground1 = new ground(10,580,2400,10);
    ground2 = new ground(400,100,500,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
  ground2.display();
  rope1.display();
  
  drawSprites();
 
}




