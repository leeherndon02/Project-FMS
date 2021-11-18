

let c, v1, v1x, v1y;
let lines = [ ];
let circleOver = false; //boolean to indicate if mouse is over the circles


let circleX;
let circleY;
let diameter = 50;
let points = 0; //incremented when mouse hovers over circles

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(200);
	circleX = width*.5;
	circleY = height*.5;
	drawLetter(); //places letter in background
	
	
}

function draw() {

	noStroke();
	rectMode(CENTER);
	rect(windowWidth*.80, 390, 200, 200);
	noStroke();
	rectMode(CENTER);
	rect(windowWidth*.12, 390, 200, 200);
	fill('black');
	textSize(100);
	text(points, windowWidth*.80, 400); //points indicator


	c = get(mouseX, mouseY); //returns rgb value where cursor hovers as an array: [rgba]

	textSize(20);
	text(c, 200, 400);
	

	if(mouseIsPressed){
		stroke('white');
		strokeWeight(15);
		line(pmouseX-10, pmouseY-10, pmouseX-20, pmouseY-20); //the "tracing" line that should appear
		
		if(c[0] == 50){
			background('green'); //changes background color in response to change in pixel color
			drawLetter();
			strokeWeight(10);
			stroke('white');
			line(pmouseX-10, pmouseY-10, pmouseX-20, pmouseY-20);
		}
		else{
			background('red');
			drawLetter();
			strokeWeight(10);
			stroke('white');
			line(pmouseX-10, pmouseY-10, pmouseX-20, pmouseY-20);
		}
		noStroke();
		rectMode(CENTER);
		rect(windowWidth*.80, 390, 200, 200);
		
		noStroke();
		rectMode(CENTER);
		rect(windowWidth*.12, 390, 200, 200);
		fill('black');
		textSize(100);
		text(points, windowWidth*.80, 400);

	}

	noStroke();
	drawCircle(circleX-20,circleY-250,diameter);//circle placements on letter
	drawCircle(circleX+185,circleY+200,diameter);
	drawCircle(circleX-80,circleY+45,diameter);
	
	strokeWeight(1);
	stroke('black');
	fill(220);
}

function drawLetter(){
	noStroke();
	textAlign(CENTER, CENTER);
	strokeWeight(2);
	textSize(700);
	fill(50);
	text('A', windowWidth*.50, 400);
	
}

function drawCircle(xC,yC,diam){ 
	update(xC, yC, diam);

	if (circleOver) { //changes fill color when mouse over circle
		fill(50);
		++points;	
	} 

	else {
		fill('black');
	}

	circle(xC, yC, diam);
}

function update(cX, cY, diam) {
	if (overCircle(cX, cY, diam)) { 
		circleOver = true; //changes value of circleOver
		
	} else {
		circleOver = false;
	}		  
}

function overCircle(x, y, d) { //calculates if mouse is over the circle
	const disX = x - mouseX;
	const disY = y - mouseY;
	if(sqrt(sq(disX) + sq(disY)) < d/2 ) {
	  return true;
	} else {
	  return false;
	}
}


