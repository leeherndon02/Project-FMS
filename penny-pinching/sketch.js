let points = 0;

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
    text('Points: '+points, 1200, 520);
    text('500', 1200, 600);
    

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
    stroke('black');
    circle(windowWidth/2, windowHeight/2 -50, 80);
    circle(windowWidth/2, windowHeight/2 +50, 80);


    //noFill();
    //stroke('red');
    //circle(windowWidth/2, windowHeight/2 -205, 50);
    //circle(windowWidth/2, windowHeight/2 +205, 50);

    //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

    for (var i = 0; i < touches.length; i++)
    {
      stroke('black');
      fill('black');
      circle(touches[i].x, touches[i].y, 60);
      
    }
}
