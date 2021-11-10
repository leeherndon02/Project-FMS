

function setup()
{
  createCanvas(windowWidth,windowHeight);
  background("gray");
  button1 = createButton('Letter');
  button1.position(windowWidth/2, windowHeight/2);
  button1.size(100, 100);

  button2 = createButton('Penny');
  button2.position(windowWidth/3, windowHeight/2);
  button2.size(100,100);

  button3 = createButton('Typing');
  button3.position(windowWidth*.667, windowHeight/2);
  button3.size(100,100);
}
function draw()
{
  button1.mousePressed(game1);
  button2.mousePressed(game2);
  button3.mousePressed(game3);
  
 
    
}
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

  }

  function game1()
  {
    window.location = "./letter.html"
  }

  function game2()
  {
    window.location = "./penny.html"
  }
  
  function game3()
  {
    window.location = "./typing.html"
  }