var xPos;
var yPos;		// declare variables xPos and yPos
var xSpeed;		// declare a var called xSpeed;
var ySpeed;		// declare a var called ySpeed
var img;	// declare a variable called img 
var imgWidth;		// declare a var for image width, assign 40 
var imgHeight;		// declare a var for image height, assign 30
var xSize = 100
var ySize = 100

// use the preload()function to load an image, 
// format: img = loadImage('assets/imageName.png');
// you'll need to create a folder called assets, and include the png there

function preload() {
  img = loadImage("assets/Seel.png");
}
//should be seel
function setup() {
	createCanvas(500,500)
    xPos=width/2
    yPos=height/2
  // create a canvas at least 400 x 400
	// set xPos to be half of the width 
	// set yPos to be half of the height
	xSpeed = random(1,10)
    ySpeed = random(1,10)
	// assign xSpeed and ySpeed 
	// with random values between 1 and 10
}

function draw(){
	background(0);                 // set the background to black

	image(img,xPos,yPos,xSize,ySize)	// draw the image at the (xPos, yPos) coordinate,
	// using the template image(img, xPos, yPos, width, height)
	xPos += xSpeed
    yPos += ySpeed
	// add the xSpeed to xPos
	// add the ySpeed to yPos
	if (yPos+ySize >= height || yPos <= 0){
      ySpeed=-ySpeed
    }
  	if (xPos+xSize >= width || xPos <= 0){
      xSpeed=-xSpeed
    }
	// if we reach the edge of the canvas
	// turn around (toggle xSpeed negative to positive)

	// same as above, toggle ySpeed if we hit the top or bottom
}