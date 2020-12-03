class Roof{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,300,20,options);
        World.add(world,this.body);
    }
    display(){
        fill('blue')
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,300,20);
    }
}