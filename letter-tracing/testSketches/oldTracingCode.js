let v1;
let v1x;
let v1y;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(224, 224, 224);

	
	strokeWeight(2);
	stroke('red');
	textSize(50);
	text("Tracing Letters", width*.03, height*.1);
	text("POINTS", width*.80, height*.65);
	noStroke();
	
	level1 = new newLevel("A", width, height);
	

	rec1 = new drawHitbox(width*.415, height*.62, recW, recH);
	rec2 = new drawHitbox(width*.44,height*.485,50,100);
	rec3 = new drawHitbox(width*.46,height*.35,50,100);
	rec4 = new drawHitbox(width*.48,height*.25,50,50);
	
}

function draw() { //DRAW
	level1.initiate();	
	
	noFill();
	rectMode(CENTER);
	//noStroke();
	rec1.drawRec();	
	rec2.drawRec();
	rec3.drawRec();
	rec4.drawRec();
	
	noFill();

	lineTrace(); //fill falls through
	//noFill();

	
	//fill('blue');
	//rect(-11, 85, 380, 50, 20);
	
	textSize(10);
	background(224, 224, 224);
	//text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);*/
}


function mousePressed(){
  v1 = createVector(mouseX, mouseY) //need to create first line point
  v1x = v1.x;
  v1y = v1.y;
}
function lineTrace(){
	//noFill();
	rec1.update();///////////////
	rec2.update();
	rec3.update();
	rec4.update();

	}*/







  

