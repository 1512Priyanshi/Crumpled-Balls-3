class launcher{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10,
        }
        this.launcher=Constrained.create(options);
        World.add(world,this.Slingshot);

    }
    display(){
        var pointA=this.launcher.bodyA.position;
        var pointB=this.launcher.bodyB.position;
        strokeweight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}