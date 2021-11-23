

let c; //variable that stores the rgb array from .get()

let circleOver = false; //boolean to indicate if mouse is over the circles (will be used for points??)
let circleX; //the x coordinate for the circle
let circleY; //the y coordinate for the circle
let diameter = 50; //circle diameter

let points = 0; //incremented when mouse hovers over circles

let lines = [ ]; //holds the lines drawn so far



function setup() {
	createCanvas(windowWidth, windowHeight);
	//background(200);
	fill(200);
	rect(0,0,width, height);//was experimenting with changing fill of a shape vs the whole background

	circleX = width*.5; //setting the base dimensions for circles; felt easier to modify this way
	circleY = height*.5;
	
	
	
}

function draw() {
	drawLetter(); //places letter in background
	

	noStroke();
	fill(200);
	rectMode(CENTER);
	rect(windowWidth*.12, 390, 200, 200); //this is the bg for the rgb values so they stay visible

	c = get(mouseX, mouseY); //returns rgb value where cursor hovers as an array: [rgba]
	textSize(20);
	fill("black");
	text(c, 200, 400); //displays the rgb (for testing)

	// fill('black');
	// textSize(100);
	// text(points, windowWidth*.80, 400); 

	noStroke();
	drawCircle(circleX-20,circleY-250,diameter);//these are the circles on the letter
	drawCircle(circleX+185,circleY+200,diameter);
	drawCircle(circleX-80,circleY+45,diameter);

	for (let i = 0; i < lines.length; i++) { //this displays the traced lines so they stay on top of the letter
		lines[i].display();
	  }
}

function mouseDragged(){ //runs when 
	if(c[1] == 50){ //when the green rgb value matches color of letter
		rectMode(CORNER);
		fill('green'); //indicates that cursor is on the letter and changes background to green
		rect(0 , 0, width, height);
		lines.push(new drawLines(mouseX-10, mouseY+20, mouseX-10, mouseY+20)); //pushes a new line to the lines array


	}
	else {
		rectMode(CORNER);
		fill('red'); //indicates that cursor is off of the letter and changes background to red
		rect(0 , 0, width, height); 
		stroke('white');
		strokeWeight(15);
		lines.push(new drawLines(mouseX-10, mouseY+20, mouseX-10, mouseY+20)); //pushes lines drawn to array

		}
}

function drawLetter(){ //draws the letter in the background
	noStroke();
	textAlign(CENTER, CENTER);
	strokeWeight(2);
	textSize(700);
	fill(50);
	text('A', windowWidth*.50, 400);

}

function drawCircle(xC,yC,diam){  //draws the circles on the letter
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

class drawLines { //line objects stored in lines array
	constructor(x1, y1, x2, y2){
		this.x1 = x1;
		this.x2 = x2;
		this.y1 = y1;
		this.y2 = y2;
	}

	display(){
		stroke('white');
		strokeWeight(15);
		line(this.x1, this.y1, this.x2, this.y2);
	}
}
