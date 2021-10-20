
let img;
let letter1;
let button1;
var mode;
var title = 'Train Your FMS';
var game1 = 'Penny Pinching';
var game2 = 'Tracing Letters';
var game3 = 'Typing';


  function preload(){
    img = loadImage('keyboard.png'); 
  }

  function setup() {
      createCanvas(windowWidth, windowHeight); //height 731, width 1536
      mode = 0;
      letter1 = new TracingExercise();
      button1 = createButton("START");
      
    }
  //create button/clickable text for each game
  //link exercise code

  function draw() {

    if (mode==0){
    background(160, 160, 160);
    setCanvas();
    }
    
    if (mode==1){
      clear();
      button1.hide();
      letter1.show();
      
    }
    
  }

  function setCanvas() {
    
    button1.position(windowWidth*.16, 500);
    
    

    fill(204, 102, 0);
    circle(windowWidth*.18, windowHeight/2, 220);
    

    textSize(300);
    fill(0, 102, 153);
    textAlign(CENTER, CENTER);
    text('A', windowWidth*.50, windowHeight*.50);//tracing game letter
 
    
    image(img, windowWidth*.68, windowHeight*.40, windowWidth*.20, windowHeight*.20); //keyboard

    fill(0,0,0);
    textSize(40);
    textAlign(CENTER);
    text(title,windowWidth*.50, windowHeight*.15);
    
    textSize(30);
    stroke(50);
    textAlign(CENTER); //penny game title
    text(game1, windowWidth*.18, windowHeight/2);

    textAlign(CENTER);//tracing title
    text(game2, windowWidth*.50, windowHeight/2);
    
    textAlign(LEFT);//typing title
    text(game3, windowWidth*.75, windowHeight/2);

    button1.mousePressed(() => mode = 1);
    
    //clear();
  }


  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

  }
  

  

    
