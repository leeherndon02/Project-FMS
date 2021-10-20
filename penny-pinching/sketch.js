function setup() 
  {
    createCanvas(windowWidth, windowHeight);
    button = createButton('MENU');
    textSize(40);
    frameRate(10);
  }
  
  function draw() 
  {
    background(220);

    button.position(windowWidth*.05, windowHeight*.75);
    button.size(100, 100);
    stroke('black');
    fill('yellow');
    rect(9, 15, 290, 50);

    fill('black');
    
    strokeWeight(2);
    text('Penny Pinching!', 10, 50);
    //textAlign(CENTER);
    text('Points:', 1200, 520);
    text('500', 1200, 600);
    

    fill('brown');
    stroke('black');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 100);

    fill('gray');
    rect((windowWidth/2)-14,(windowHeight/2)-140,30,90);
    triangle((windowWidth/2),(windowHeight/2) -180,(windowWidth/2) -30,(windowHeight/2) - 140,(windowWidth/2) +30,(windowHeight/2) - 140);
    rect((windowWidth/2)-14,(windowHeight/2)+50,30,90);
    triangle((windowWidth/2),(windowHeight/2) +180,(windowWidth/2) +30,(windowHeight/2) + 140,(windowWidth/2) -30,(windowHeight/2) + 140);

    fill('green');
    circle(windowWidth/2, windowHeight/2 -50, 50);
    circle(windowWidth/2, windowHeight/2 +50, 50);

    noFill();
    stroke('red');
    circle(windowWidth/2, windowHeight/2 -205, 50);
    circle(windowWidth/2, windowHeight/2 +205, 50);

    //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
    
    

  }
