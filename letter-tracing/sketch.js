let v1;
let v1x;
let v1y;
let elli1, elli2, elli3;
let elliX, elliY, elliW, elliH;
let rec1, rec2, rec3, rec4;
let rectOver;
let letter;
let recX, recY;
let recW;
let recH;


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

	recW = 50;
	recH = 100;

	elliX = width;
	elliY = height;
	elliW = 20;
	elliH = 20;
	
	elli1 = new drawEllipse(elliX*0.49, elliY*0.20, elliW, elliH); //make w/h constant
	elli2 = new drawEllipse(elliX*0.59, elliY*0.68, elliW, elliH);
	elli3 = new drawEllipse(elliX*0.46, elliY*0.51, elliW, elliH);

	rec1 = new drawHitbox(width*.415, height*.62, recW, recH);
	rec2 = new drawHitbox(width*.44,height*.485,50,100);//make w/h constant
	rec3 = new drawHitbox(width*.46,height*.35,50,100);
	rec4 = new drawHitbox(width*.48,height*.25,50,50);
	
}

/
let pointCount = 0;
function draw() { //DRAW
	
	//fill('blue');
	//rect(-11, 85, 380, 50, 20);
	
	/*textSize(10);
	background(224, 224, 224);
	//text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);*/
	textSize(50);
	fill('black');
	text(pointCount, width*.86, height*.78);

	noFill();
	rectMode(CENTER);
	//noStroke();
	rec1.drawRec();	
	rec2.drawRec();
	rec3.drawRec();
	rec4.drawRec();

	elli1.drawElli();
    elli2.drawElli();
	elli3.drawElli();
	
	//noFill();

	lineTrace(); //fill falls through
}


function mousePressed(){
  v1 = createVector(mouseX, mouseY) //need to create first line point
  v1x = v1.x;
  v1y = v1.y;
}
function incPoint(){
	noStroke();
	fill(224, 224, 224);
	rect(width*.86, height*.78, 100, 50);
	pointCount = pointCount + 1;
}
function lineTrace(){
	//noFill();
	rec1.update();///////////////
	rec2.update();
	rec3.update();
	rec4.update();

}












  

