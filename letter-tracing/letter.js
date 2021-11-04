
let newEllipses;
class drawLetter{
    constructor(letter, width, height){
        this.letter = letter;
        this.width = width;
        this.height = height;
        this.elliNum = 0;
        this.hitNum = 0;
        this.ellipseCoord = [ ]
        this.hitboxCoord = [ ]
    }

    setCoord(){ //num elli/hbox, coords for
        if (this.Letter == 'A'){
            this.elliNum = 3;
            this.hitNum = 10;
            //x,y based on percentage of height/width
            this.ellipseCoord = [0.49, 0.20, 0.59, 0.68, 0.46, 0.51] 
            newEllipses = new drawEllipse(this.elliNum, this.ellipseCoord, this.width, this.height);
            this.hitboxCoord = [0.42, 0.62, 0.44, 0.49, 0.46, 0.35, 0.48, 0.25]
        }
    }

    setLetter(){
        textAlign(CENTER, CENTER);
        strokeWeight(2);
        textSize(500);
        fill(50);
        letterText = text(this.letter, width/2, height/2);
    }
}