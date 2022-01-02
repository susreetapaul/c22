const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var rope1;
var rope2;
var rope3;
var rope4;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
var bobOptions={
	isStatic:false,restitution:1,friction:0,density:0.8
}	
bob1=Bodies.circle(320,380,20,bobOptions) 
bob2=Bodies.circle(360,380,20,bobOptions)
bob3=Bodies.circle(400,380,20,bobOptions) 
bob4=Bodies.circle(440,380,20,bobOptions)  
World.add(world,bob1) 
World.add(world,bob2)
World.add(world,bob3)
World.add(world,bob4)
rope1=new rope(bob1,roof,-80,0)
rope2=new rope(bob2,roof,-40,0)
rope3=new rope(bob3,roof,0,0)
rope4=new rope(bob4,roof,40,0)
}


function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()

  
  ellipse(bob1.position.x,bob1.position.y,50,50)
  ellipse(bob2.position.x,bob2.position.y,50,50)
  ellipse(bob3.position.x,bob3.position.y,50,50)
  ellipse(bob4.position.x,bob4.position.y,50,50)

 
}

function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45})
	}
}
