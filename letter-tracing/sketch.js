

let c, v1, v1x, v1y;
let lines = [ ];
let circleOver = false; //boolean to indicate if mouse is over the circles


let circleX;
let circleY;
let diameter = 50;
let points = 0; //incremented when mouse hovers over circles

function setup() {
	createCanvas(windowWidth, windowHeight);
	//background(200);
	fill(200);
	rect(0,0,width, height);
	circleX = width*.5;
	circleY = height*.5;
	drawLetter(); //places letter in background
	
	
}

function draw() {

	
	// rectMode(CENTER);
	// rect(windowWidth*.80, 390, 200, 200);
	noStroke();
	fill(200);
	rectMode(CENTER);
	rect(windowWidth*.12, 390, 200, 200);

	// fill('black');
	// textSize(100);
	// text(points, windowWidth*.80, 400); 


	c = get(mouseX, mouseY); //returns rgb value where cursor hovers as an array: [rgba]
	textSize(20);
	fill("black");
	text(c, 200, 400);

	noStroke();
	drawCircle(circleX-20,circleY-250,diameter);//circle placements on letter
	drawCircle(circleX+185,circleY+200,diameter);
	drawCircle(circleX-80,circleY+45,diameter);
	
}

function mouseDragged(){
	stroke('white');
	strokeWeight(15);
	line(mouseX-10, mouseY-50, mouseX-10, mouseY-50); //the "tracing" line that should appear
	
	if(c[0] < 51){
		rectMode(CORNER);
		fill('green');
		rect(0 , 0, width, height); //changes background color in response to change in pixel color
		drawLetter();

		stroke('white');
		strokeWeight(15);
		line(mouseX-10, mouseY-50, mouseX-10, mouseY-50);

	}
	else{
		rectMode(CORNER);
		fill('red');
		rect(0 , 0, width, height); 
		drawLetter();

		stroke('white');
		strokeWeight(15);
		line(mouseX-10, mouseY-50, mouseX-10, mouseY-50);

		}
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


