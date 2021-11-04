let v1;
let x;
let y;
let elli;
let elliX, elliY, elliW, elliH;
let elliOver = false;
var lines = [
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  elliX = width*.49;
  elliY = height*.20;
  elliW = 20;
  elliH = 20;
  
  
}

//Still need to have visual cue when line is being drawn and pointer remains on letter

function draw() { //DRAW

	background(224, 224, 224);

	textAlign(CENTER, CENTER);
	strokeWeight(2);
	textSize(500);
	fill(50);
	text('A', width/2, height/2);

	drawElli(elliX, elliY, elliW, elliH);

	if(mouseIsPressed){
		fill('black');
		ellipse(mouseX, mouseY, 10, 10);
		strokeWeight(15);
		line(v1.x, v1.y, mouseX, mouseY);
	}
	var index = 0;
	while (index < lines.length) {
		stroke('white');
		strokeWeight(15);
		line(lines[index].x1, lines[index].y1, lines[index].x2, lines[index].y2);
		  index += 1;
	  }

	/*
	push();
	noFill();
	stroke('black');
	strokeWeight(10);
	translate(width/2, height/2);
	rotate(-0.5);
	rect(-500, -50, 500, 50);
	pop();*/

	

	
  
}


function mousePressed(){
  v1 = createVector(mouseX, mouseY)
  //x = mouseX;
  //y = mouseY;
}

function drawElli(x, y, r1, r2){
	update(mouseX, mouseY);

	if (elliOver) { //listens to value of rectover
		drawLine();
		fill('blue');
	  } else {
		fill('red');
	  }
	stroke('black');
	strokeWeight(1);
	elli = ellipse(x, y, r1, r2);
}

function drawLine(){
	lines[lines.length] = { x1: v1.x, y1: v1.y, x2: elliX, y2: elliY };
	//line(v1.x, v1.y, elliX, elliY);
}

function update(x, y) { 
	if (overElli(elliX, elliY, elliW, elliH) ) { 
	  elliOver = true;
	} else {
	  elliOver = false;
	}
  }
  
  function overElli(x, y, w, h) { 
	if (mouseX >= (x-w/2) && mouseX <= (x+w/2)
	 && mouseY >= (y-h/2) && mouseY <= (y+h/2)) {
	  return true;
	} else {
	  return false;
	}
  }
  

