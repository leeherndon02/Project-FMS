
  var game1 = 'Penny Pinching';
  var game2 = 'Tracing Letters';
  var game3 = 'Typing';
  var title = 'Train Your FMS'
  let img;

  function preload(){
    img = loadImage('keyboard.png');
  }
  function setup() {
      createCanvas(windowWidth, windowHeight); //height 731, width 1536
      frameRate(10);
      
    }
    
    function draw() {
      background(160, 160, 160);
      
      fill(204, 102, 0);
      circle(280, 350, 220); //penny

      
      textSize(300);
      fill(0, 102, 153);
      textAlign(CENTER);
      text('A', 768, 435);//tracing game letter
      //768, 325

      image(img, 1035, 300, 350, 100); //keyboard

      fill(0,0,0);
      textSize(40);
      textAlign(CENTER);
      text(title,windowWidth*.50, windowHeight*.15);
      
      textSize(30);
      stroke(50);
      textAlign(RIGHT);
      text(game1, windowWidth*.25, windowHeight/2);
      textAlign(CENTER);
      text(game2, windowWidth*.50, windowHeight/2);
      
      textAlign(LEFT);
      text(game3, windowWidth*.75, windowHeight/2);
      
      text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
    }

    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);

      
    }
  
    

    
