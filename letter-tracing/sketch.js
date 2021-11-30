

let c, cnv; //variable that stores the rgb array from .get()


let points = 0; //incremented when mouse hovers over circles

let lines = [ ]; //holds the lines drawn so far
let numberOfPixels;
let pixelCount;
let chosenLetter;


function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	//background(200);
	fill(200);
	rect(0,0,width, height);//was experimenting with changing fill of a shape vs the whole background

	let d = pixelDensity();
	numberOfPixels = 4 * (width * d) * (height * d);
	
	chosenLetter = random_letter(); 
	displayLetter(chosenLetter);//must be in setup so that pixels are counted
	countPixels();
	
}

function draw() {
	displayLetter(chosenLetter); //places letter in background
	c = get(mouseX-10, mouseY+20); 

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

	if (count < pixelCount*.52) { //code to run after certain percentage has been traced
		noStroke();
		fill("purple");
		textSize(40);
		text("cool!", 200, 200);
		
		advance();
		
  	}

	noStroke();
	fill(200);
	rectMode(CENTER);
	rect(windowWidth*.12, 390, 200, 200); //this is the bg for the rgb values so they stay visible

	//returns rgb value where cursor hovers as an array: [rgba]
	textSize(20);
	fill("red");
	text(c, 200, 400); //displays the rgb (for testing)
	text(pixelCount, 200, 420);
}

function mouseDragged(){ //runs when 
	if(c[1] == 50){ //when the green rgb value matches color of letter
		rectMode(CORNER);
		fill('green'); //indicates that cursor is on the letter and changes background to green
		rect(0 , 0, width, height);
		//lines.push(new drawLines(mouseX-10, mouseY+20, mouseX-10, mouseY+20)); //pushes a new line to the lines array


	}
	else {
		rectMode(CORNER);
		fill('red'); //indicates that cursor is off of the letter and changes background to red
		rect(0 , 0, width, height); 
	
		//lines.push(new drawLines(mouseX-10, mouseY+20, mouseX-10, mouseY+20)); //pushes lines drawn to array

		}
	lines.push(new drawLines(mouseX-10, mouseY+30, mouseX-10, mouseY+30));
}

function displayLetter(letter){ //draws the letter in the background
	noStroke();
	textAlign(CENTER, CENTER);
	textSize(700);
	fill(50);
	text(letter, windowWidth*.50, 400);
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
	displayLetter(chosenLetter) 
	countPixels();
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
