const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, string, ground;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    var ballOpt = {
        restitution : 0.1,
        friction : 0.5,
        density : 0.5
    };
    ball = Bodies.circle(90, 340, 20, 20, ballOpt);
    string = new SlingShot(ball.body,{x:90, y:340});
    ground = new ground(300,400,600,15);
}

function draw(){
    background("cyan");
    Engine.update(engine);
    strokeWeight(4);
    
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y ,20)
    string.display();    
    ground.display();
    line(ball.position.x, ball.position.y, string.position.x, string.position.y);
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}