
class drawEllipse {
    constructor(ellipseNum, ellipse, width, height){
        this.ellipseNum = ellipseNum;
		
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.ellipses = ellipse;
		this.lines = [ ];
		this.index = 0;
		this.elliOver = false;
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