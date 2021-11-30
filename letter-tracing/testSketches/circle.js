
class drawCircles {
    constructor(circleNum, circleCoord, width, height){
        this.width = width;
		this.height = height;
		
		this.circleNum = circleNum; //circle quantity
		
		this.circleD = 20; //circle diameter
		this.circleCoord = circleCoord; //contains coordinates [0.49, 0.20, 0.59, 0.68, 0.46, 0.51] 
		//this.circleArray = [ ]

		this.lines = [ ];
		this.index = 0;
		this.circleOver = false; //indicates when hovered over circle
    }

	drawCircles(){ 
		
		//noStroke();
		stroke('black');
		strokeWeight(1);
		for (let i = 0; i< this.circleCoord.length; i++){
			circle(this.width*this.circleCoord[i]. this.height*this.circleCoord[i+1], this.circleD);
			i = i+2;
		}
		
		
		this.update();

		if (this.circleOver) { 
			this.drawLine();
			//fill('blue');
		} 
		else {
			fill('red');
		}
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
		if (this.overCircle()) { 
			this.circleOver = true;
		} else {
			this.circleOver = false;
		}		  
	}

	overCircle(){
		if (mouseX >= (this.x-this.w/2) && mouseX <= (this.x+this.w/2)
			&& mouseY >= (this.y-this.h/2) && mouseY <= (this.y+this.h/2)) {
			return true;
		} else {
			return false;
		}
		
	}*/
}