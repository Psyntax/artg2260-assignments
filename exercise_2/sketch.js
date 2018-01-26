function setup() {
	createCanvas(500, 500);
	background(0);
	 
	stroke(255);
	strokeWeight(1);

var x = 0
var y = 0

	for (x=0; x < 1000; x++) {
	 
		fill(205, 210, 214);
		line(0,0,(0+(x*50)),500);

	}
	
	for (y=0; y < 1000; y++) {

		stroke(255);
		strokeWeight(1);

		line(500,500,(500-(y*50)),0);
	}


	
}