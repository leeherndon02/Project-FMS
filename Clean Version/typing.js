

function setup() {
    createCanvas(windowWidth, windowHeight);
    button = createButton('MENU');
    button.mousePressed(goBack);
    button.position(windowWidth*.05, windowHeight*.75);
    button.size(100, 100);
    textSize(40);
    background(220);
}

function goBack()
{
  window.location = "./menu.html"
}