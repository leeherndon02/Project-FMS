let circle1, circle2;

function setup() 
  {
    createCanvas(windowWidth, windowHeight);
    button = createButton('MENU');
    button.position(windowWidth*.05, windowHeight*.75);
    button.size(100, 100);
    button.mousePressed(goBack);
    background(220);
    textSize(40);
    frameRate(10);
  }
  
  

  function goBack()
  {
    window.location = "./menu.html"
  }