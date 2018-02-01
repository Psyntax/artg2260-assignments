function setup() {
	createCanvas(500, 500);
	background(0);
	 
	stroke(255);
	strokeWeight(1);

var x = 0
var y = 0

	for (x=0; x < 100; x++) {
		for (y=0; y<10; y++) {
			line(0,y*50,(0+(x*50)),500);
		}
	}
	
}