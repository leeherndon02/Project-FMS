

let c, v1, v1x, v1y;
let lines = [ ];
let circleOver = false;
let index = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(220);
	drawLetter();
	drawCircle();
}

function draw() {
	
	//c = get(mouseX, mouseY); //returns rgb value where cursor hovers
	//background(220);
	
	//fill(c);
	//rect(100, 500, 100, 100);

	//fill(500);
	//textSize(20);
	//text(c, 200, 400);



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

  function drawCircle(){
	
  }

function update() {
	if (overCircle()) { 
		circleOver = true;
	} else {
		this.circleOver = false;
	}		  
}

function overCircle(){
	if (mouseX >= (x-w/2) && mouseX <= (x+w/2)
		&& mouseY >= (y-h/2) && mouseY <= (y+h/2)) {
		return true;
	} else {
		return false;
	}
	
}


