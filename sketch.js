const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    box1= new box(900,100,70,70)
    box2= new box(900,100,70,70)
    box3= new box(900,100,70,70)
    box4= new box(900,100,70,70)
    box5= new box(900,100,70,70)
    box6= new box(800,100,70,70)
    box7= new box(800,100,70,70)
    box8= new box(800,100,70,70)

    box9= new box(800,100,70,70)
    box10= new box(800,100,70,70)
    box11= new box(800,100,70,70)
    box12= new box(800,100,70,70)
    box13= new box(800,100,70,70)

    
    box14= new box(1000,100,70,70)
    box15= new box(1000,100,70,70)
    box16= new box(1000,100,70,70)
    ball = new ball(200, 200, 80, 80)
    rope= new rope(ball.body,{x:500,y:50})
    





    ground = new Ground(600,600,1200,20);
}

function draw(){
    background('white')
    Engine.update(engine);
    //strokeWeight(4);
    
    ground.display();
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()

    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    ball.display()
    rope.display()
    

    


    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{X:mouseX,y:mouseY})
}