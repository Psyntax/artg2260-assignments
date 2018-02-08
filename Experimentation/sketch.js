function setup() {
	createCanvas(500, 500);
	background(0);
	 
	stroke(255);
	strokeWeight(1);

	for (x=0; x < 10; x++) {
		for (y=0; y<10; y++) {
			fill(x*20,x*20,x*20);
			ellipse(x*50,y*50,y*5,10);
		}
	}
	
}