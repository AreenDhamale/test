class box{
  constructor(x,y,w,h){
    var options={
      restitution:0.8,
      friction:1.0
    }
    this.body=Bodies.rectangle(x,y,w,h)
  this.w=w 
  this.h=h
  World.add(world,this.body)
  }

    display(){
      var angle=this.body.angle
      push()
      translate(this.body.position.x,this.body.position.y)
      rotate(angle)
      rectMode(CENTER)
      strokeWeight(4)
      stroke('green')
      fill('white')
      rect(0,0,this.w,this.h)
      pop()

      
    }
    
}
