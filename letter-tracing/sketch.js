

let c, v1, v1x, v1y;
let lines = [ ];
let circleOver = false;
let index = 0;

let circleX = 50;
let circleY = 100;
let diameter = 50;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(220);
	drawLetter();
	
}

function draw() {
	
	//c = get(mouseX, mouseY); //returns rgb value where cursor hovers
	//background(220);
	
	//fill(c);
	//rect(100, 500, 100, 100);

	//fill(500);
	//textSize(20);
	//text(c, 200, 400);

	strokeWeight(1);
	stroke('black');
	drawCircle(circleX,circleY,diameter);
	if(mouseIsPressed){
		stroke('white');
		//ellipse(mouseX, mouseY, 10, 10);
		//stroke(255);
		strokeWeight(15);
		line(mouseX, mouseY, pmouseX, pmouseY);
		//line(v1.x, v1.y, mouseX, mouseY);
	}
	
	while (index < lines.length) {
		stroke('white');
		strokeWeight(15);
		line(lines[index].x1, lines[index].y1, lines[index].x2, lines[index].y2);
		  index += 1;
	  }
	  
	
}

function drawLetter(){
	textAlign(CENTER, CENTER);
	strokeWeight(2);
	textSize(700);
	fill(50);
	text('A', windowWidth*.50, 400);
}

function mousePressed(){
	v1 = createVector(mouseX, mouseY) //need to create first line point
	v1x = v1.x;
	v1y = v1.y;
}

function drawCircle(xC,yC,diam){
	update();

	if (circleOver) {
		fill('blue');
	} 

	else {
		fill('red');
	}

	circle(xC, yC, diam);
}

function update() {
	if (overCircle(circleX, circleY, diameter)) { 
		circleOver = true;
	} else {
		circleOver = false;
	}		  
}

function overCircle(x, y, d) {
	const disX = x - mouseX;
	const disY = y - mouseY;
	if(sqrt(sq(disX) + sq(disY)) < d/2 ) {
	  return true;
	} else {
	  return false;
	}
}


