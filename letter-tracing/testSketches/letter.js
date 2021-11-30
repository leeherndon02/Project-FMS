
let newEllipses;
class drawLetter{
    constructor(letter, width, height){
        this.letter = letter;
        this.width = width;
        this.height = height;
        this.circleNum = 0;
        this.hitNum = 0;
        this.circleCoord = [ ]
        this.hitboxCoord = [ ]
    }

    setCoord(){ //num elli/hbox, coords for
        if (this.letter == 'A'){
            this.circleNum = 3;
            this.hitNum = 10;
            //x,y based on percentage of height/width
            this.circleCoord = [0.49, 0.20, 0.59, 0.68, 0.46, 0.51] 
            let newCircles = new drawCircles(this.circleNum, this.circleCoord, this.width, this.height);
            newCircles.drawCircles();
            this.hitboxCoord = [0.42, 0.62, 0.44, 0.49, 0.46, 0.35, 0.48, 0.25]
            
        }
    }

    setLetter(){
        textAlign(CENTER, CENTER);
        strokeWeight(2);
        textSize(500);
        fill(50);
        let letterText = text(this.letter, width/2, height/2);
    }
}