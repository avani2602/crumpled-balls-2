class Ball{
    constructor(x,y,radius){
      var options = {
        isStatc: false,        
        restitution: 0.3,        
        friction: 0.5,        
        density: 1.2
    }
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.body = Bodies.circle(this.x,this.y,radius,options);
      
      World.add(world, this.body);

      this.image = loadImage("paper.png");      

    }
    display(){
        var pos =this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER)
        fill("white");
        image(this.image, 0, 0,this.radius, this.radius);
        pop();
    }
}