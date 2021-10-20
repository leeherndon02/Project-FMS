  let img, letter1;

  function preload(){
    img = loadImage('keyboard.png'); 
  }

  function setup() {
      createCanvas(windowWidth, windowHeight); //height 731, width 1536
      background(160, 160, 160);
      letter1 = new TracingExercise();
      
    }
  //create button/clickable text for each game
  //link exercise code

  function draw() {
    setCanvas();
    TracingExercise.setCanvas();
    TracingExercise.setElements();
    
  }

  function setCanvas() {
    fill(204, 102, 0);
    circle(windowWidth*.18, windowHeight/2, 220);
    

    textSize(300);
    fill(0, 102, 153);
    textAlign(CENTER, CENTER);
    text('A', windowWidth*.50, windowHeight*.50);//tracing game letter
 
    
    image(img, windowWidth*.68, windowHeight*.40, windowWidth*.20, windowHeight*.20); //keyboard

    fill(0,0,0);
    textSize(40);
    textAlign(CENTER);
    text('Train Your FMS',windowWidth*.50, windowHeight*.15);
    
    textSize(30);
    stroke(50);
    textAlign(CENTER); //penny game title
    text('Penny Pinching', windowWidth*.18, windowHeight/2);

    textAlign(CENTER);//tracing title
    text('Tracing Letters', windowWidth*.50, windowHeight/2);
    
    textAlign(LEFT);//typing title
    text('Typing', windowWidth*.75, windowHeight/2);
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    
  }

  

    
