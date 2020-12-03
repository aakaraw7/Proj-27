class Bob{
    constructor(x,y){
        var bob_options={
            restitution:1.0,
            density:0.3
        }
        this.body=Bodies.circle(x,y,30,bob_options);
        World.add(world,this.body);

        
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle);
        fill('red')
        ellipseMode(RADIUS);
        ellipse(0,0,30,30);
        pop();
    }
}