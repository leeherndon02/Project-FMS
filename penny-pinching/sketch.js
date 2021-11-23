let points = 0;

let circleX = 50;
let circleY = 100;
let diameter = 50;
let circleOver = false;

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
    text(points, 1200, 600);
    

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
    stroke('green');
    drawCircle(windowWidth/2, windowHeight/2 +50, 80);

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