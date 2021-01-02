class Bird
{
    constructor(x,y)
    {
        var options=
        {
          restitution :0.8,
          friction :1.0,
          density :1.0
        }
      
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50
        this.height=50
       
      
        World.add(myworld,this.body);

    }
   
    display()
    {
            var angle=this.body.angle;
            this.body.position.x=mouseX
            this.body.position.y=mouseY
            angleMode(RADIANS);
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(angle)
            rectMode(CENTER);
            fill("red");
            rect(0,0, this.width  ,  this.height );
            pop();


    }
    
}