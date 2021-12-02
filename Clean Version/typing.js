// buffer holding characters that are typed
let chars = "";
let targetWords = "";
let numWords = 1;
let round = 0;
let point = 0;
// implement this
let points = 0;
let totalTimeMS=0;
let sounds = [];

let isEqual = false;

function preload() {
	for(var i=0;i<5;++i) {
		sounds.push(loadSound("assets/round"+(i+1)+".ogg"));
	}
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    //START OF GUI FUNCTIONALITY, DO NOT TOUCH
    button = createButton('MENU');
    button.position(windowWidth*.05, windowHeight*.75);
    button.size(100, 100);
    button.mousePressed(goBack);
    //END OF GUI
    textSize(40);
    
    targetWords = random_word();
    round = 1;
}

function draw() {
  background(220);
  button.position(windowWidth*.05, windowHeight*.75);
  button.size(100, 100);
  stroke('black');
  fill('yellow');
  textAlign(CENTER);
  rect(windowWidth*.01, windowHeight*.030, 150, 50);

  fill('black');
  
  strokeWeight(2);
  text('Typing!', windowWidth*.06, windowHeight*.07);
  textAlign(CENTER);
  text('Points:', 1200, 520);
  text(points, 1200, 600);

  fill('red');
  // you probably want to display text for the round somewhere
  // as well as points

  if (isEqual){
    fill('green');

  } else {
    fill('red');
  }

  textAlign(LEFT);

  text(targetWords, (windowWidth*.01), windowHeight/2);
  fill('black');
  text(chars, (windowWidth*.01), windowHeight*.6);
  textAlign(CENTER, CENTER);
  fill('blue');
  text('Round: ' + round, (windowWidth*.5), windowHeight*.2);
}

function advance () {
  chars = "";
  incrementPoints();
  // an array containing each word
  var spl = targetWords.split(" ");
  // get more words
  targetWords = "";
  for(var i=0;i<=spl.length;i++) {
    targetWords += random_word() + " ";
  }
  // trim the trailing " "
  targetWords = targetWords.substring(0, targetWords.length-1);
  round++;
  speak("typed "+(spl.length)+" words for a total of "+points+". Now type "+targetWords);
  play_random_sound();
  isEqual = false;
}

function keyTyped(event) {
  if(key === "Enter") {
    return;
  }
  chars += key;

  for(i=0;i<chars.length;i++){ 
    if(chars.charAt(i) === targetWords.charAt(i)){
      isEqual = true;
    }
    else{
      isEqual = false;
    }
  }
  speak("target "+targetWords);
  if(was_typed(targetWords)) {
    advance();
  }

  return true;
}

function keyPressed(key) {
  if(chars.length > 0) {
    if(keyCode === BACKSPACE) {
      speak(chars[chars.length-1]);
      chars = chars.substring(0, chars.length-1);
    }
  }
}

// checks to see whether the provided text was typed
function was_typed(text) {
  return chars.substring(chars.length-text.length) === text;
}

//increments points relative to number of keys typed
// make sure this is never called more than once during the same round, and before reassigning target_words
function incrementPoints() {
  var w = targetWords.replaceAll(" ", "");
  points += w.length;
}

function play_random_sound() {
  var idx = (Math.random()*4)|0;
  sounds[idx].play()
}
//GUI FUNCTIONALITY, DO NOT TOUCH
function goBack()
{
  window.location = "./menu.html"
}