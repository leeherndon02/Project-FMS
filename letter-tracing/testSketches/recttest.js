
let rectW = 300;
let rectH = 20;

let rectX;
let rectY;

let rectColor;

let baseColor;

let rectOver = false;

let myRec;

function setup() { //creating canvas, shape/bg colors, and coords for shapes
  createCanvas(windowWidth, windowHeight);
  
  rectX = 0;
  rectY = 0; 
  rectColor = color(0);
  baseColor = color(255, 220, 300);
  background(baseColor);
  rectMode(CENTER);
  frameRate(50);
  textSize(50);
  text(width, 200,500);
  text(height, 400,500);
}

function draw() {
  
  update(mouseX, mouseY); //controls value of rectover using update
  //it sends mouse actions as argument (don't seem necessary)
  translate(width/2,height/2);
  noStroke();
  if (rectOver) { //listens to value of rectover
    fill(300, 200, 20);
  } else {
    fill(rectColor);
  }

  stroke('black');
  strokeWeight(1);
  rect(rectX, rectY, rectW, rectH);

  
  
  strokeWeight(10);
  stroke('purple');
  point(-150,-10);
  stroke('red');
  point(150,10);
  stroke('blue');
  point(150,-10);
  stroke('green');
  point(-150,10);
  
  
  rotate(0.60*PI);
  strokeWeight(1);
  stroke('black');
  rect(0, 0, 300, 20);
  
  strokeWeight(10);
  stroke('purple');
  point(-150,-10);
  stroke('red');
  point(150,10);
  stroke('blue');
  point(150,-10);
  stroke('green');
  point(-150,10); 
  
  

}


function update(x, y) { //changes rectover value using overrect
  if (overRect(rectX, rectY, rectW, rectH) ) { //w=300 h=20
    rectOver = true;
  } else {
    rectOver = false;
  }
}

function overRect(x, y, w, h) { //returns t/f
  
  if (mouseX>= (width-w)/2 && mouseX <= ((width-w)/2 + w) //uses actual canvas dimensions (not translated)
   && mouseY >= (height-h)/2 && mouseY <= ((height-h)/2 + h)) {
    return true;
  } else {
    return false;
  }
}