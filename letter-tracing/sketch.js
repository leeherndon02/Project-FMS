let v1;
let v1x;
let v1y;
let elli1, elli2, elli3;
let elliX, elliY, elliW, elliH;
let rectOver;
let letter;
//let elliOver = false;
//var lines = [
//];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(224, 224, 224);
	textAlign(CENTER, CENTER);
	strokeWeight(2);
	textSize(500);
	fill(50);
	letter = text('A', width/2, height/2);
	
	elliX = width;
	elliY = height;
	elliW = 20;
	elliH = 20;
	elli1 = new drawEllipse(elliX*0.49, elliY*0.20, elliW, elliH);
	elli2 = new drawEllipse(elliX*0.59, elliY*0.68, elliW, elliH);
	elli3 = new drawEllipse(elliX*0.46, elliY*0.51, elliW, elliH);
	//frameRate(10);
}

//Still need to have visual cue when line is being drawn and pointer remains on letter

function draw() { //DRAW
	//fill('blue');
	//rect(-11, 85, 380, 50, 20);
	
	/*textSize(10);
	background(224, 224, 224);
	//text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);*/
	
    
	elli1.drawElli();
    elli2.drawElli();
	elli3.drawElli();
	
	lineTrace();

	
	push();
	translate(width/2, height/2);
	rotate(PI*.611);
	rectMode(CENTER);
	rect(-11, 85, 380, 50, 20);
	//strokeWeight(5);
	//point(0,0);
	pop();
}


function mousePressed(){
  v1 = createVector(mouseX, mouseY) //need to create first line point
  v1x = v1.x;
  v1y = v1.y;
}

function lineTrace(){

	update();
	noFill();
	if(mouseIsPressed){ //initial drawn line
		if(rectOver){
			fill(0, 204, 102, 10);
		}
		stroke('black');
		strokeWeight(10);
		line(mouseX, mouseY, pmouseX, pmouseY);
		strokeWeight(1);
		
	}
	 /*else if (mouseIsPressed && rectOver) {
	fill('red');
	}	*/
	

}

function update( ) { //changes rectover value using overrect
	if (overRect(width/2, height/2, 380, 50,) ) { //w=300 h=20
	  rectOver = true;
	} else {
	  rectOver = false;
	}
  }
  
function overRect(x, y, w, h) { //returns t/f

	stroke('green');
	strokeWeight(10);
	point((width-w)/2, (height-h)/2);

	stroke('black');
	strokeWeight(1);
	if (mouseX >= 606 && mouseX <= 782 //uses actual canvas dimensions (not translated)
	 && mouseY >= 507 && mouseY <= 140) {
	  return true;
	} else {
	  return false;
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






  

