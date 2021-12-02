let points = 0;

let circleX = 50;
let circleY = 100;
let diameter = 50;
let circleOver = false;
let circleOver2 = false;

function setup() 
  {
    createCanvas(windowWidth, windowHeight);
    //GUI FUNCTIONALITY, DO NOT TOUCH
    button = createButton('MENU');
    button.position(windowWidth*.05, windowHeight*.75);
    button.size(100, 100);
    button.mousePressed(goBack);
    //END OF GUI
    textSize(40);
    frameRate(60);
  }
  
  function draw() 
  {
    background(220);
    stroke('black');
    fill('yellow');
    rect(windowHeight*.014, windowHeight*.02, 300, 50);

    fill('black');
    
    strokeWeight(2);
    text('Penny Pinching!', windowHeight*.015, windowHeight*.07);
    //textAlign(CENTER);
    text('Points:', windowWidth*.85, windowHeight*.7);
    text(points, windowWidth*.888, windowHeight*.8);
    text('Instructions: Touch screen and drag circles into the green area to gain points.', windowWidth*.10, windowHeight*.15);

    fill('brown');
    stroke('black');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 100);

    fill('gray');
    rect((windowWidth/2)-25,(windowHeight/2)-220,50,130);
    triangle((windowWidth/2),(windowHeight/2)-50,(windowWidth/2) -50,(windowHeight/2) - 90,(windowWidth/2) +50,(windowHeight/2) - 90);
    rect((windowWidth/2)-25,(windowHeight/2)+90,50,130);
    triangle((windowWidth/2),(windowHeight/2) +50,(windowWidth/2) +50,(windowHeight/2) + 90,(windowWidth/2) -50,(windowHeight/2) + 90);

    noFill();
    stroke('green');
    drawCircle(windowWidth/2, windowHeight/2 -50, 80);
    noFill();
    drawCircle2(windowWidth/2, windowHeight/2 +50, 80);

    for (var i = 0; i < touches.length; i++)
    {
      stroke('black');
      fill('black');
      circle(touches[i].x, touches[i].y, 60);
      
    }
  }
  function drawCircle(x,y,diam)
  {
    update(x, y, diam);
  
    if (circleOver) 
    {
      fill('green');
      points++;
    }
  
    circle(x, y, diam);
  }
  
  function update(x, y, diam) {
    if (overCircle(x, y, diam)) 
    { 
      circleOver = true;
    } 
    else 
    {
      circleOver = false;
    }
  }
  
  function overCircle(x, y, d) {
    const disX = x - mouseX;
    const disY = y - mouseY;
    if(sqrt(sq(disX) + sq(disY)) < d/2 ) 
    {
      return true;
    } 
    else 
    {
      return false;
    }
  }
  
  //circle2 functionality
  function drawCircle2(x,y,diam)
  {
    update2(x, y, diam);
  
    if (circleOver2) 
    {
      fill('green');
      points++;
    }
  
    circle(x, y, diam);
  }
  
  function update2(x, y, diam) {
    if (overCircle2(x, y, diam)) 
    { 
      circleOver2 = true;
    } 
    else 
    {
      circleOver2 = false;
    }
  }
  
  function overCircle2(x, y, d) {
    const disX = x - mouseX;
    const disY = y - mouseY;
    if(sqrt(sq(disX) + sq(disY)) < d/2 ) 
    {
      return true;
    } 
    else 
    {
      return false;
    }
  }
//GUI FUNCTIONALITY, DO NOT TOUCH
  function goBack()
  {
    window.location = "./menu.html"
  }