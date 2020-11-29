
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myEngine,myWorld;
var paperBall;
var ground;
var bucket1,bucket2,bucket3;

function setup() {
	createCanvas(800, 700);
    myEngine = Engine.create();
    myWorld = myEngine.world;
    paperBall = new Paper(100,575);
    ground = new Ground(400,height,800,20);
    bucket1 = new Dustbin(600,670,100,20);
    bucket2 = new Dustbin(650,645,20,50);
    bucket3 = new Dustbin(550,645,20,50);
  //Create the Bodies Here.
  var render = Matter.Render.create({ element: document.body, engine: myEngine, options: { width: 1200, height: 700, wireframes: false } });
  Matter.Render.run(render);
}

function draw() {
  background(0);
  Engine.update(myEngine);

 
  
  paperBall.display();
  ground.display();
  bucket1.display();
  bucket2.display();
  bucket3.display();
  drawSprites();
}

function keyPressed(){
   if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:55,y:-55})
   }
}



