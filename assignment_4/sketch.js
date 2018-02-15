var bg

class Crate {
	constructor(){
		this.x;
		this.y;
		this.side;
		this.img;
	}
}

function preload() {
	bg = loadImage("assets/background.png");
	//Crate.img = loadImage("crate.png");
}

function setup() {
	createCanvas(500,500);
}

function draw(){
	image(bg,0,0);
}