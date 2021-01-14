const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,330,70,70);
    box2 = new Box(800,330,70,70);
    ground = new Ground(600,height,1200,20);

    pig2 = new Pig(700,330);

    log1 = new Log(700,270,300,PI/2) 
    log2 = new Log(700,150,300,PI/2) 
    
    box3 = new Box(600,200,70,70);
    box4 = new Box(800,200,70,70);
    box5 = new Box(700,100,70,70);

    pig1 = new Pig(700,200);
    log3 = new Log(660,80,150,PI/7) 
    log4 = new Log(770,80,150,-PI/7) 

    bird = new Bird(mouseX,mouseY,50,50);

    

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    bird.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}