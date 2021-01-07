const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var myWorld,myEngine;
var ground1,box1,box2
function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world
 ground1=new ground(200,380,400,20)
box1=new box(200,300,50,50)
box2=new box(240,100,50,100)
console.log(box2.body.angle);
}

function draw() {
  background("Black");  
  Engine.update(myEngine);
  
  ground1.display()
  box1.display()
  box2.display()
  
}