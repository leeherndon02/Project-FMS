function setup() 
  {
    createCanvas(windowWidth, windowHeight);
    button = createButton('MENU');
    background(160, 160, 160);
    //frameRate(10);
    
  }
  
  function draw() 
  {
  
    button.position(windowWidth*.05, windowHeight*.75);
    button.size(100, 100);

    

    textSize(800);
    fill(0, 102, 153);
    textAlign(CENTER);//traced letter
    text('A', 768, 650);
    
    stroke(0, 0, 0);
    fill(0,204,0,63);
    strokeWeight(2);
    circle(550, 600, 100);

    fill(0,0,0);
    rect(1160, 460, 300, 200);//points box
    fill(255, 255, 255);
    textSize(40);
    textAlign(CENTER);
    text('Points:', 1300, 520);
    text('500', 1300, 600);

    
    noStroke();
    fill(0,0,0);
    strokeWeight(2);
    textSize(40);
    textAlign(CENTER);//title
    text('Tracing Letters!',windowWidth*.12, windowHeight*.15);

    
    stroke(255, 255, 255);
    strokeWeight(10);
    line(windowWidth*.30, windowHeight*.70, windowWidth*.38, windowHeight*.30);
    
    //(topx,topy,bottomlx,bottomly,bottomrx,bottomry)
    fill(255,255,255);
    strokeWeight(1);
    triangle(619, 135, 555, 200, 610, 225);
    noStroke();

    //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    
  }