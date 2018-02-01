function setup() {
 	createCanvas(500, 500);
 	frameRate(60)
}

var penSize = 1;
var penR = 0;
var penG = 0;
var penB = 0;

var penSetting = 0;
//Variable setting for the pen. 0 is standard, 1 is eraser


function draw() 
{
	if (penSetting == 0)
	{
		if (mouseIsPressed) 
		{
			if (mouseButton === LEFT)
			{
				stroke(penR, penG, penB);
				strokeWeight(penSize);
				line(mouseX, mouseY, pmouseX, pmouseY);
			}

		}
	}
	if (penSetting == 1)
	{
		if (mouseIsPressed) 
		{
			if (mouseButton === LEFT)
			{
				stroke(255);
				strokeWeight(penSize);
				line(mouseX, mouseY, pmouseX, pmouseY);
			}
		}
	}
	if (keyIsDown(82)) {
		if (keyIsDown(190)) {
			if (penR != 255){
				penR++
			}
		}
		if (keyIsDown(188)) {
			if (penR != 0) {
				penR--
			}
		}
	}
	if (keyIsDown(71)) {
		if (keyIsDown(190)) {
			if (penG != 255){
				penG++
			}
		}
		if (keyIsDown(188)) {
			if (penG != 0){
				penG--
			}
		}
	}
	if (keyIsDown(66)) {
		if (keyIsDown(190)) {
			if (penB != 255){
				penB++
			}
		}
		if (keyIsDown(188)) {
			if (penB != 0){
				penB--
			}
		}
	}
	if (keyIsDown(LEFT_ARROW)){
		penSize--
	}
	if (keyIsDown(RIGHT_ARROW)){
		penSize++
	}
	if (penSize == 0){
		penSize = 1
	}
	document.getElementById("currentRed").innerHTML = penR;
	document.getElementById("currentGreen").innerHTML = penG;
	document.getElementById("currentBlue").innerHTML = penB;
}


function penEraser()
{	
	penSetting = 1
}

function penStandard()
{
	penSetting = 0
}

function saveImage()
{
	saveCanvas('myCanvas', 'png');
}
