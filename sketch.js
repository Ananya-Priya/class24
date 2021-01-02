const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World= Matter.World;


var myengine, ground, myworld,ball;
var box1, box2,box3,box4,box5;

var bird;

var pig1,pig2;

var log1,log2,log3,log4;

function setup() 
{
  createCanvas(1200,400);

  myengine=Engine.create();
  myworld=myengine.world;

  
 

  ground=new Ground(600,390,1200,20);
  box1= new Box(700,360,70,70);
  box2=new Box(920,360,70,70)
  
  pig1=new Pig(810,360)

  log1=new Log(810,260,300,PI/2)

  box3=new Box(700,240,70,70)
  box4=new Box(920,240,70,70)

  pig2=new Pig(810,240)
 
  log2=new Log(810,140,300,PI/2)

  box5=new Box(810,120,70,70)

  log3=new Log(760,70,150,PI/8)

  log4=new Log(885,70,150,PI/-8)

  bird=new Bird(100,100)
}

function draw() 
{
  background(0); 

  Engine.update(myengine);

  ground.display();
   
  box1.display();

  box2.display();
 
  pig1.display();

  log1.display();

  box3.display();

  box4.display();

  pig2.display();

  log2.display();

  box5.display();

  log3.display();

  log4.display();

  bird.display();
}
