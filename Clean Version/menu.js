let title = "SkillBuilder";



function setup()
{
  createCanvas(windowWidth,windowHeight);
  background("gray");
  button1 = createButton('Letter Tracing');
  button1.position(windowWidth*.16, windowHeight/2);
  //button1.size(100, 100);

  button2 = createButton('Penny Pinching');
  button2.position(windowWidth*.48, windowHeight/2);
  //button2.size(100,100);

  button3 = createButton('Typing');
  button3.position(windowWidth*.75, windowHeight/2);
  //button3.size(100,100);


}
function draw()
{

    textSize(70);
    fill('black');
    stroke(10);
    textAlign(CENTER);
    fill('orange');
    
    text(title,windowWidth*.50, windowHeight*.15);

  
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