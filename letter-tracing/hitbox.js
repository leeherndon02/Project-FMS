class drawHitbox {
	constructor(x, y, w, h){
		//this.rectOver = false;
		this.recX = x;
		this.recY = y;
		this.recW = 50;
		this.recH = 100;
	}

	drawRec(){
		noFill();
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