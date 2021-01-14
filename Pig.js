class Pig {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.pig = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.pig);
    }
    display(){
        rectMode(CENTER);
        push();
        translate(this.pig.position.x,this.pig.position.y);
        rotate(this.pig.angle);
        strokeWeight(2);
        stroke("white");
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}