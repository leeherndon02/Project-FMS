
class newLevel{
    constructor(letter, width, height){
        this.newLetter = new drawLetter(letter, width, height);
        this.width = width;
        this.height = height;
        this.points = 0;
 
    }

    initiate(){
        this.newLetter.setCoord();
        this.newLetter.setLetter();
    }
    
}

