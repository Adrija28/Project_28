
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(900,180,30);
	mango4=new mango(1050,70,30);
	mango5=new mango(1250,190,30);
	mango6=new mango(1190,150,30);
	mango7=new mango(990,180,30);
	mango8=new mango(1110,202,30);
	mango9=new mango(1205,241,30);
	mango10=new mango(1055,178,30);
	mango11=new mango(960,238,30);
	mango12=new mango(1017,263,30);

	stone = new Bird(268,440);

	chain = new Slingshot(stone.body, {x:268, y:442})

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  text(mouseX + "," + mouseY, 100, 100)
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stone.display();
  chain.display();

  groundObject.display();
}
