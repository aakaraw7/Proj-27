class Rope{
    constructor(bodyA,pointB){
        var options={
            stiffness:0.5,
            length:200,
            bodyA:bodyA,
            pointB:pointB
            //pointB:pointB
        }
    this.pointB=pointB;
    this.string=Matter.Constraint.create(options)	
	World.add(world,this.string)
    }
    display(){
       stroke('orange')
       strokeWeight(5)
      line(this.string.bodyA.position.x,this.string.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}