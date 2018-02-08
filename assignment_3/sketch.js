var pivot = {
	xpos:250,
	ypos:250,
	xspeed:0,
	yspeed:0,
};

var hand = {
	angle:0,
	speed:0,
	length:25,
};

var colorB = 0;

function setup() {
 	createCanvas(500, 500);

 	for (var i = 0; i<width; i+=10) {
 		for(var j = 0; j<height; j+=10) {
 			var greyscale = map(i,0,width,0,255)

 			stroke(greyscale)
 			ellipse(i,j,10,10)
 		}
 	}

 	pivot.xspeed = random(-5,5)
 	pivot.yspeed = random(-5,5)
}

function draw() {
	
	var colorR = map(pivot.xpos, 0, 500, 0, 255)

	var colorG = map(pivot.ypos,0,500,0,255)

	colorB +=1
	
	strokeWeight(5)
	stroke(colorR,colorG,colorB)
	line(pivot.xpos, pivot.ypos, pivot.xpos+(sin(hand.angle)*25), pivot.ypos+(cos(hand.angle)*25) )

	pivot.xpos += pivot.xspeed
	pivot.ypos += pivot.yspeed

	if(pivot.xpos>=500 | pivot.xpos<=0)
	{
		pivot.xspeed = pivot.xspeed * -1
	}

	if(pivot.ypos>=500 | pivot.ypos<=0)
	{
		pivot.yspeed = pivot.yspeed * -1
	}

	if(colorB>255){
		colorB = 0
	}

	hand.speed = frameCount

	hand.angle += (hand.speed/(2*PI))
}