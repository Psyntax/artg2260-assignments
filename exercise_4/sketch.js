let telebox

function setup(){
	createCanvas(500,500);
	telebox = new Box();
	telebox.xspeed= random(-5,5)

}



function draw(){
	telebox.display();
	telebox.warp();
	telebox.move();
	telebox.bounce();
}

class Box {
	constructor(){
		this.x = 250
		this.y = 250
		this.xspeed = 0
		this.yspeed = -5
		this.red = 255
		this.green = 0
		this.blue = 0
	}
	
	display(){
		background(0)
		fill(this.red,this.green,this.blue);
		rect(this.x,this.y,50,50);
	}
	
	warp(){
		if(this.y<=0){
		this.y = 490;
		this.red = random(0,255);
		this.green = random(0,255);
		this.blue = random(0,255);
		}
	}
	move(){
		this.x += this.xspeed
		this.y += this.yspeed
	}
	bounce(){
		if(this.x>=450 | this.x<=0){
			this.xspeed= -this.xspeed
		}
	}
}