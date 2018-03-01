let dials = [];
let lifespan = 5000
let clockPlaced = false

var colorB = 0;

function setup() {
 	createCanvas(500, 500);

 	for (var i = 0; i<width; i+=2) {
 		for(var j = 0; j<height; j+=2) {
 			let greyscale = map(i,0,width,0,255)

 			stroke(greyscale)
 			ellipse(i,j,10,10)
 		}
 	}

 
}

function mousePressed() {
  	let hSpeed = random(-1,1)
  	let vSpeed = random(-1,1)

  	let r = new Dial(mouseX, mouseY,hSpeed,vSpeed);
  	dials.push(r);
  	clockPlaced = true;
}

function draw() {
	colorB +=1
	
	if(colorB>255){
		colorB = 0
	}	
	
	for (let i = 0; i < dials.length; i++){    
		dials[i].display();
		dials[i].move();
	}	

	if(lifespan<=0){
		dials.pop();
		lifespan = 5000;
	}
}



class Dial {
  constructor(_x,_y,_xspeed,_yspeed){
    this.x = _x;
    this.y = _y;
    this.xspeed = _xspeed
    this.yspeed = _yspeed
    this.diameter = 50;
	this.angle = 2*PI;
	this.red = 0
	this.green = 0
	this.blue = 0
  }
  
  move() {
  	if((this.x+this.xspeed+25)>=width||(this.x+this.xspeed-25)<=0){
  		this.xspeed = -this.xspeed
  	}
  	if((this.y+this.yspeed+25)>=height||(this.y+this.yspeed-25)<=0){
  		this.yspeed = -this.yspeed
  	}

  	this.x += this.xspeed;
  	this.y += this.yspeed;
  	this.angle -= (1/(2*PI));
  	this.red = map(this.x, 0, 500, 0, 255)
  	this.green = map(this.y,0,500,0,255)
  	this.blue = colorB

  	lifespan += -1
  }
  
  	display() {
    	noFill();
   		strokeWeight(1);
   		stroke(0,0,0,125);
    	ellipse(this.x, this.y, this.diameter, this.diameter);
    	strokeWeight(5);
    	stroke(this.red,this.green,this.blue)
		line(this.x, this.y, this.x+(sin(this.angle)*25), this.y+(cos(this.angle)*25));
  }

}