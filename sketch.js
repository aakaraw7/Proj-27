
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,200)

	bob1=new Bob(400,400)
	bob2=new Bob(340,400)
	bob3=new Bob(280,400)
	bob4=new Bob(460,400)
	bob5=new Bob(520,400)

	rope1=new Rope(bob1.body,{x:400,y:200})
	rope2=new Rope(bob2.body,{x:340,y:200})
	rope3=new Rope(bob3.body,{x:280,y:200})
	rope4=new Rope(bob4.body,{x:460,y:200})
	rope5=new Rope(bob5.body,{x:520,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('yellow');
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		//Matter.Body.setPosition(bob1.body,{x:200,y:400});
		//Matter.Body.setStatic(bob1.body, false);
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-30,y:-30})
	}
}


