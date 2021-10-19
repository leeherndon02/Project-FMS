
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
      //frameRate(10);
      
    }
  
    function draw() {
      background(160, 160, 160);
      
      fill(204, 102, 0);
      circle(windowWidth*.18, windowHeight/2, 220);
      //circle(280, 350, 220); //penny

      textSize(300);
      fill(0, 102, 153);
      textAlign(CENTER, CENTER);
      text('A', windowWidth*.50, windowHeight*.50);//tracing game letter
      //768, 325
      
      //(img, )
      
      image(img, windowWidth*.68, windowHeight*.40, windowWidth*.20, windowHeight*.20); //keyboard

      fill(0,0,0);
      textSize(40);
      textAlign(CENTER);
      text(title,windowWidth*.50, windowHeight*.15);
      
      textSize(30);
      stroke(50);
      textAlign(CENTER); //penny game title
      text(game1, windowWidth*.18, windowHeight/2);

      textAlign(CENTER);//tracing title
      text(game2, windowWidth*.50, windowHeight/2);
      
      textAlign(LEFT);//typing title
      text(game3, windowWidth*.75, windowHeight/2);
      
      //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
    }

    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);

      
    }
  
    

    
