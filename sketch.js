
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper,dustbin1,dustbin2,dustbin3;




function setup() {
	createCanvas(400, 400);

   engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(350,50,70);
	dustbin1=createSprite(250,300,100,20);
	dustbin2=createSprite(350,250,100,20);
	dustbin3=createSprite(150,370,20,100);
	ground=createSprite(0,400,10,400);
	
	Engine.run(engine);
	keypressed();
}


function draw() {
paper.display();
	
ellipse(56, 46, 55, 55);
  background(0);
  
  drawSprites();
 
}
function keypressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}


}



