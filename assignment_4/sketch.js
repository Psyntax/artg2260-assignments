
var bg
let win = 0
var player = {
	x:10,
	y:475,
	width:25,
	height:50,
	xspeed:0,
	yspeed:0,
	collide:true,
}

var crate1

function preload() {
	bg = loadImage("https://raw.githubusercontent.com/Psyntax/artg2260-assignments/master/assignment_4/assets/background.png");
	Crate.img = loadImage("https://raw.githubusercontent.com/Psyntax/artg2260-assignments/master/assignment_4/assets/crate.png");
}

function setup() {
	createCanvas(500,500);
	crate1 = new Crate();
	crate1.x = 100;
	crate1.y = 450;
	crate1.xspeed = 0;
	crate1.side = 50;
}

function draw(){
	image(bg,0,0);

	stroke(0)
	strokeWeight(5)
	fill(255,0,0)
	rect(0,300,200,25)
	rect(400,250,100,25);

	fill(0,255,0)
	rect(200,50,100,25);

	fill(0,0,255)
	ellipse(player.x,player.y,player.width,player.height);

	image(Crate.img,crate1.x,crate1.y)

	player.yspeed += 0.1

	if(win == 3){
		fill(255)
		rect(50,50,400,400)
		text("Victory",75,75,375,375)
	}

	if(player.x>200){
		if(player.x<300){
			if(player.y<50){
				win=3
			}
		}
	}

	if (keyIsDown(LEFT_ARROW)) {
			player.xspeed = -6
		}
	else if (keyIsDown(RIGHT_ARROW)) {
			player.xspeed = 6
		}
	else {
		player.xspeed = 0
	}


	if((player.y+25+player.yspeed)>=500){
		player.collide=true
		player.y=475
		player.yspeed=0
	}
	

	if(player.x>=0){
		if(player.x<=200){
			
			if((player.y+25)<=300){
				if((player.y+25+player.yspeed)>300){
					player.y=275
					player.collide=true
					player.yspeed=0
			}
			}

			else if((player.y-25)>300){
				if((player.y-25+player.yspeed)<300){
					player.yspeed=0
				}
			}

		}
	}

	if(player.x>=400){
		if(player.x<=500){
			
			if((player.y+25)<=250){
				if((player.y+25+player.yspeed)>250){
					player.y=225
					player.collide=true
					player.yspeed=0
			}
			}

			else if((player.y-25)>250){
				if((player.y-25+player.yspeed)<250){
					player.yspeed=0
				}
			}

		}
	}


	if(player.x>=crate1.x){
		if(player.x<=crate1.x+crate1.side){
			if((player.y+25)>=crate1.y){
				if((player.y+25+player.yspeed)>crate1.y){
					player.y=crate1.y-25
					player.collide=true
					player.yspeed=0
				}
			}
		}
	}

	if(player.y>=450){
		if(player.x<crate1.x){
			if(player.x+player.xspeed>=crate1.x){
				crate1.xspeed = player.xspeed
		}
		else{
			crate1.xspeed=0
		}
	}
		else if(player.x>crate1.x){
			if(player.x+player.xspeed<=crate1.x+50){
				crate1.xspeed = player.xspeed
		}

		else{
			crate1.xspeed=0
		}
	}
		else{
			crate1.xspeed=0
		}
	}

	else{
		crate1.xspeed=0
	}



player.x+=player.xspeed
player.y+=player.yspeed
crate1.x += crate1.xspeed


}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		if (player.collide = true){
			player.yspeed = -6
		}
	}
}

class Crate {
	constructor(){
		this.x;
		this.y;
		this.xspeed;
		this.side;
		this.img;
	}
}