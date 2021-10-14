var mode; //determines if game has started
var game1 = 'HELP';
//var game2 = 'Tracing Letters';
//var game3 = 'Typing';

var winH = 731/2;
var winW = 1536/2;

function setup() {
    createCanvas(windowWidth, windowHeight); //height 731, width 1536
    background(500, 200, 100);
    mode = 0; //initially, game not started
    textSize(20);
    

  }
  
  function draw() {
    //clear();
    
    if (mode == 0){
      text(game1, winW, winH, 20, 20);

      noFill();
      rect(winW, winH, 60, 20);
      
    }

    if (mode == 1){
      ellipse(100, 100, 100, 100);
    }

  }

  function mouseClicked(){
    if (isMouseInsideText(game1, winW, winH)) {
      mode=1;
    }
      
  }

  function isMouseInsideText(game1, winW, winH) {
    const messageWidth = textWidth(game1);
    const messageTop = winH - textAscent();
    const messageBottom = winH + textDescent();
  
    return mouseX > winW && mouseX < winW + messageWidth &&
      mouseY > messageTop && mouseY < messageBottom;
  }
 
  

  
