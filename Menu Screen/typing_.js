class TypingExercise{
  constructor (){

  }

  show() {
    //clear();
    background(102, 255, 255);

    var drawButton = createButton("MENU");
    drawButton.size(100,100);
    drawButton.position(20,500);
    drawButton.mousePressed(() => {mode = 0});

    textSize(40);
    stroke('black');
    fill('yellow');
    textAlign(CENTER);
    rect(10, 15, 150, 50);

    fill('black');
    
    strokeWeight(2);
    text('Typing!', 20, 50);
    textAlign(CENTER);
    text('Points:', 1200, 520);
    text('500', 1200, 600);

    fill('red');
    textAlign(LEFT);
    text('Dog Chair Computer Bag Ladder Mouse', (windowWidth/2)-300, windowHeight/2);
  }
}

