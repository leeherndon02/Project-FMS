let v1;
let v1x;
let v1y;
let elli1, elli2, elli3;
let elliX, elliY, elliW, elliH;
let rec1, rec2, rec3, rec4;
let rectOver;
let letter;
let recX, recY;
let recW = 50;
let recH = 100;

//let elliOver = false;
//var lines = [
//];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(224, 224, 224);

	
	strokeWeight(2);
	stroke('red');
	textSize(50);
	text("Tracing Letters", width*.03, height*.1);
	text("POINTS", width*.80, height*.65);
	noStroke();
	
	textAlign(CENTER, CENTER);
	strokeWeight(2);
	textSize(500);
	fill(50);
	letter = text('A', width/2, height/2);

	

	recX = width*.415;
	recY = height*.62;

	elliX = width;
	elliY = height;
	elliW = 20;
	elliH = 20;
	elli1 = new drawEllipse(elliX*0.49, elliY*0.20, elliW, elliH);
	elli2 = new drawEllipse(elliX*0.59, elliY*0.68, elliW, elliH);
	elli3 = new drawEllipse(elliX*0.46, elliY*0.51, elliW, elliH);

	rec1 = new drawHitbox(recX, recY, recW, recH);
	rec2 = new drawHitbox(width*.44,height*.485,50,100);
	rec3 = new drawHitbox(width*.46,height*.35,50,100);
	rec4 = new drawHitbox(width*.48,height*.25,50,50);
	//frameRate(10);
}

//Still need to have visual cue when line is being drawn and pointer remains on letter
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
	
	noFill();

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

	
	/*if(mouseIsPressed){ //initial drawn line
		if(rectOver){
			fill(0, 204, 102, 10);
			push();
			translate(width/2, height/2);
			rotate(PI*.611);
			rectMode(CENTER);
			rect(-11, 85, 380, 50, 20); //rectangle that appears
			//strokeWeight(5);
			//point(0,0);
			pop();
			noFill();

		}

		else {
			fill(204, 0, 0, 10);
			push();
			translate(width/2, height/2);
			rotate(PI*.611);
			rectMode(CENTER);
			rect(-11, 85, 380, 50, 20); //rectangle that appears
			//strokeWeight(5);
			//point(0,0);
			pop();
			noFill();
		}*/
	}
class drawHitbox {
	constructor(x, y, w, h){
		//this.rectOver = false;
		this.recX = x;
		this.recY = y;
		this.recW = w;
		this.recH = h;
	}

	drawRec(){
		//noFill();
		noStroke();
		rectMode(CENTER);
		rect(this.recX, this.recY, this.recW, this.recH);
	}

	update(){

		if(mouseIsPressed){
			if (this.overRect(this.recX, this.recY, this.recW, this.recH)) { //w=300 h=20
				fill(0, 204, 102, 50);
				push();
				translate(width/2, height/2);
				rotate(PI*.611);
				rectMode(CENTER);
				rect(-11, 85, 380, 50, 20); //rectangle that appears
				//strokeWeight(5);
				//point(0,0);
				pop();
				noFill();

			} else {
				fill(204, 0, 0, 10);
				push();
				translate(width/2, height/2);
				rotate(PI*.611);
				rectMode(CENTER);
				rect(-11, 85, 380, 50, 20); //rectangle that appears
				//strokeWeight(5);
				//point(0,0);
				pop();
				noFill();
			}
			stroke('black');
			strokeWeight(10);
			line(mouseX, mouseY, pmouseX, pmouseY);
			strokeWeight(1);
		}
	}

	overRect(x, y, w, h){
		if (mouseX >= (x-(w/2)) && mouseX <= (x+(w/2)) && mouseY >= (y-(h/2)) && mouseY <= (y+(h/2))) {
			return true;
			} else {
			return false;
			}
	}
}


class drawEllipse {
    constructor(x, y, w, h){
		this.elliOver = false;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.lines = [ ];
		this.index = 0;
    }

	drawElli(){ //x y r1 r2
		this.update();

		if (this.elliOver) { //listens to value of rectover
			this.drawLine();
			//fill('blue');
		} 
		else {
			fill('red');
		}

		
		//noStroke();
		stroke('black');
		strokeWeight(1);
		this.elli = ellipse(this.x, this.y, this.w, this.h);
	}

	drawLine(){
		this.lines[this.lines.length] = { x1: v1x, y1: v1y, x2: this.x, y2: this.y };
			//line(v1.x, v1.y, elliX, elliY);

		//var index = 0;
		while (this.index < this.lines.length) {
			stroke('white');
			strokeWeight(15);
			line(this.lines[this.index].x1, this.lines[this.index].y1, this.lines[this.index].x2, this.lines[this.index].y2);
				this.index += 1;
			}
		incPoint();
		
	}
    
	update() {
		if (this.overElli()) { 
			this.elliOver = true;
		} else {
			this.elliOver = false;
		}		  
	}

	overElli(){
		if (mouseX >= (this.x-this.w/2) && mouseX <= (this.x+this.w/2)
			&& mouseY >= (this.y-this.h/2) && mouseY <= (this.y+this.h/2)) {
			return true;
		} else {
			return false;
		}
		
	}
}






  

