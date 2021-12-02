

let c, cnv; //variable that stores the rgb array from .get()


let points; 

let lines = [ ]; //holds the lines drawn so far
let numberOfPixels;
let pixelCount;
let chosenLetter;
let switchLetter = false;
let globalCount = 0;
let pointsDeducted = true;
let pointsDeducted2 = true;

function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	//background(200);
	fill(200);
	rect(0,0,width, height);//was experimenting with changing fill of a shape vs the whole background

	let d = pixelDensity();
	numberOfPixels = 4 * (width * d) * (height * d);
	points = 10;
	chosenLetter = random_letter(); 
	displayLetter(chosenLetter);//must be in setup so that pixels are counted
	countPixels();
	
	
}

function draw() {

	
	cursor(CROSS);
	displayLetter(chosenLetter); //places letter in background
	

	if(mouseX > width/2 && mouseY < height/2){
		c = get(mouseX+10, mouseY-10); //detects color
	}
	else {
		c = get(mouseX-10, mouseY);
	}
	
	for (let i = 0; i < lines.length; i++) { //this displays the traced lines so they stay on top of the letter
		lines[i].display();
	  }

	loadPixels();
	let count = 0;
	for( let i = 0; i < numberOfPixels; i+= 4 ) {
		// if the RGB values make white, then increment counter
		if( pixels[ i ] == 50 && pixels[ i + 1 ] == 50 && pixels[ i + 2 ] == 50 && pixels[ i + 3 ] == 255){
			count++;
		} 
	}

	noStroke();
	fill('grey');
	rectMode(CENTER);
	rect(200, 200, 300, 150); 

	if (count < pixelCount*.52) { //code to run after certain percentage has been traced
		noStroke();
		fill("yellow");
		textSize(25);
		text("Good! Release mouse", 200, 150);
		text("to advance", 200, 180);
		switchLetter = true;
		
	}
	else {
		textSize(20);
		fill("white");
		text('Hold down mouse and trace!', 200, 150); 
		text('Completely trace to move on', 200, 180);
		text('Stay within the letter', 200, 230); 
		text('or lose points!', 200, 250);
	}

	noStroke();
	fill('grey');
	rectMode(CENTER);
	rect(200, 400, 200, 200); 
	fill("white");
	textSize(20);
	text('Current Points:', 200, 325);
	textSize(60);
	text(points, 200, 400);
	noStroke();
	
	button = createButton('MENU');
    button.position(windowWidth*.05, windowHeight*.75);
    button.size(100, 100);
    button.mousePressed(goBack);
}

function mouseReleased(){
	if (switchLetter) {
		advance();
	}
}

function mouseDragged(){ //runs when 
	if(c[1] == 50){ //when the green rgb value matches color of letter
		pointsDeducted = true;
		rectMode(CORNER);
		fill('green'); //indicates that cursor is on the letter and changes background to green
		rect(0 , 0, width, height);
		//lines.push(new drawLines(mouseX-10, mouseY+20, mouseX-10, mouseY+20)); //pushes a new line to the lines array
		

	}
	else {
		rectMode(CORNER);
		fill('red'); //indicates that cursor is off of the letter and changes background to red
		rect(0 , 0, width, height);
			if(pointsDeducted){
			letterPoints();
			}
			pointsDeducted2 = false;
		}

	lines.push(new drawLines(pmouseX, pmouseY, mouseX, mouseY));
}

function displayLetter(letter){ //draws the letter in the background
	
	noStroke();
	textAlign(CENTER, CENTER);
	textSize(700);
	fill(50);
	text(letter, windowWidth*.50, 400);
	
}

function letterPoints(){
	points = points - 2;
	pointsDeducted = false;
}

function countPixels(){
	loadPixels();
	pixelCount = 0;
	for( let i = 0; i < numberOfPixels; i+= 4 ) {
		// if the RGB values make white, then increment counter
		if( pixels[ i ] == 50 && pixels[ i + 1 ] == 50 && pixels[ i + 2 ] == 50 && pixels[ i + 3 ] == 255){
			pixelCount++;
		} 
	}
}

function advance(){
	lines = [ ];
	clear();
	chosenLetter = random_letter();
	displayLetter(chosenLetter);
	countPixels();
	
	if(pointsDeducted2){
	points = points+10;
	} 
	else{
		pointsDeducted2 = true;
	}
	switchLetter = false;
}

function goBack()
{
  window.location = "./menu.html"
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
		strokeWeight(30);
		line(this.x1, this.y1, this.x2, this.y2);
	}
}
