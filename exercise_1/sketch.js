
function setup() {
	createCanvas(500, 500);
	background(0);
	 
	stroke(255);
	strokeWeight(1);
	 
	fill(205, 210, 214);
	ellipse(40, 40, 60, 60);

	fill(252, 73, 225);
	rect(0,175,500,325)

		// Draws a triangle in the form "triangle(x1, y1, x2, y2, x3, y3)"
	fill(249,217,34);
	triangle(100, 100, 50, 175, 100, 200);

	fill(186, 160, 16);
	triangle(100,100,100,200,150,175);

	fill(4, 72, 252, 30)
	triangle(150,175,100,200,250,250)
}