function setup() 
  {
    createCanvas(windowWidth, windowHeight);
    textSize(40);
    frameRate(10);
  }
  
  function draw() 
  {
    background(220);

    
    stroke('black');
    fill('yellow');
    rect(9, 15, 290, 50);

    fill('black');
    
    strokeWeight(2);
    text('Penny Pinching!', 10, 50);
    
    

    fill('brown');
    stroke('black');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 100);

    fill('gray');
    rect(676,220,30,90);
    triangle(690,180,660,220,720,220);
    rect(676,410,30,90);
    triangle(690,540,660,500,720,500);

    fill('green');
    circle(windowWidth/2, windowHeight/2 -50, 50);
    circle(windowWidth/2, windowHeight/2 +50, 50);

    noFill();
    stroke('red');
    circle(windowWidth/2, windowHeight/2 -205, 50);
    circle(windowWidth/2, windowHeight/2 +205, 50);

    //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
    
    

  }
