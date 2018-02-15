
var bg

var player = {
	x:10,
	y:475,
	width:25,
	height:50,
	xspeed:0,
	yspeed:0,
	collide:true,
}

class Crate {
	constructor(){
		this.x;
		this.y;
		this.side;
		this.img;
	}
}

function preload() {
	bg = loadImage("https://raw.githubusercontent.com/Psyntax/artg2260-assignments/master/assignment_4/assets/background.png");
	//Crate.img = loadImage("crate.png");
}

function setup() {
	createCanvas(500,500);
	
}

function draw(){
	image(bg,0,0);

	stroke(0)
	strokeWeight(5)
	fill(255,0,0)
	rect(0,300,200,25)
	rect(400,250,100,25);

	fill(0,0,255)
	ellipse(player.x,player.y,player.width,player.height);

	if (keyIsDown(LEFT_ARROW)) {
			player.xspeed = -10
		}
	else if (keyIsDown(RIGHT_ARROW)) {
			player.xspeed = 10
		}
	else {
		player.xspeed = 0
	}


	if((player.y+25)>=500){
		player.collide=true
		player.y=475
	}
	else if(300<=(player.y+25)<=325){
		if(0<=player.x<=200){
			player.y=300
			player.collide=true
		}
	}
	else{
		player.yspeed+=1
		player.collide=false
	}


player.x+=player.xspeed
player.y+=player.yspeed


}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		if (player.collide = true){
			player.yspeed = -10
		}
	}
}
