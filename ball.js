var ballSprite,ballBody;
var groundSprite,ground;
var boxleftSprite,boxLeftBody,boxBase,boxBottomBody,boxRightSprite,boxRightBody;
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

	var balloptions={
		isStatic:false,
		restitution:0.3,
		frition:0.5,
		density:1.2
	}
	//Create the Bodies Here.
	 ballSprite=createSprite(500, 500, 20, 20);
	 ballSprite.shapeColor=color("purple");

	 groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
    boxleftSprite=createSprite(410, 610, 20,100);
	 boxleftSprite.shapeColor=color(255,0,0);
	 
	 boxBase=createSprite(500, 660, 200,20);
	 boxBase.shapeColor=color(255,0,0);
	 
     boxRightSprite=createSprite(590 , 610, 20,100);
 	boxRightSprite.shapeColor=color(255,0,0);

    Engine.run(engine);
	ballBody = Bodies.circle(500 , 500 , 5 , {restitution:1.0});
	World.add(world, ballBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxPosition=width/2-100
 	boxY=610;


 	boxLeftBody = Bodies.rectangle(810+20, 200, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	

 	boxBottomBody = Bodies.rectangle(810+100, 160+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	

 	boxRightBody = Bodies.rectangle(810+200-20 , 160, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ballSprite.x= ballBody.position.x 
  ballSprite.y= ballBody.position.y 
  drawSprites();
 
}



