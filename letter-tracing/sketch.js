function setup() 
  {
    createCanvas(windowWidth, windowHeight);
    frameRate(10);
    
  }
  
  function draw() 
  {
    background(160, 160, 160);

    button = createButton('MENU');
    button.position(60, 550);
    button.size(100, 100);

    

    textSize(800);
    fill(0, 102, 153);
    textAlign(CENTER);//traced letter
    text('A', 768, 650);
    fill(0,204,0,63);
    circle(550, 600, 100);

    fill(0,0,0);
    rect(1160, 460, 300, 200);//points box
    fill(255, 255, 255);
    textSize(40);
    textAlign(CENTER);
    text('Points:', 1300, 520);
    text('500', 1300, 600);

    fill(0,0,0);
    textSize(40);
    textAlign(CENTER);//title
    text('Tracing Letters!',windowWidth*.10, windowHeight*.15);

    text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    
  }