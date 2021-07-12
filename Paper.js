class Paper{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		restitution:0.3, friction:0, density:1.2,isStatic:false
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        this.image=loadImage("paper.png")
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			imageMode(CENTER)
			strokeWeight(4);
			
	
			//draw the ellipse here to display the rubber ball
image(this.image,0,0,this.r,this.r)
			pop()
	}

}
