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


function preload() {
	for(var i=0;i<5;++i) {
		sounds.push(loadSound("assets/round"+(i+1)+".ogg"));
	}
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    button = createButton('MENU');
    textSize(40);
    // choose a word to start with
    targetWords = random_word();
    round = 1;
    speak(targetWords);
    // for layout descriptions
    //textOutput()
}

function draw() {
    background(220);
    button.position(windowWidth*.05, windowHeight*.75);
    button.size(100, 100);
    stroke('black');
    fill('yellow');
    textAlign(CENTER);
    rect(windowWidth*.007, windowWidth*.01, 150, 50);

    fill('black');
    
    strokeWeight(2);
    text('Typing!', windowWidth*.06, windowHeight*.07);
    textAlign(CENTER);
    text('Points:', 1200, 520);
    text(points, 1200, 600);

    fill('red');
    textAlign(LEFT);
    text(targetWords, windowWidth*.01, windowHeight/2);
    // you probably want to display text for the round somewhere
    // as well as points
}

function advance () {
	chars = "";
	// an array containing each word
	var spl = targetWords.split(" ");
	// get more words
	targetWords = "";
	for(var i=0;i<=spl.length;i++) {
		targetWords += random_word() + " ";
	}
	// trim the trailing " "
	targetWords = targetWords.substring(0, targetWords.length-1);
	incrementPoints();  //adds points whenever round is typed correctly
	round++;
	speak("typed "+(spl.length)+" words. Now type "+targetWords);
	play_random_sound();
}

function keyTyped(event) {
	if(key === "Enter") {
		return;
	}
	chars += key;
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

//increments points. After first round, which gives 100 points, points are doubled after each round
function incrementPoints() {
	while(points<=0)
	{
		points+= 100;
	}
	if(points >= 100 && round >= 2)
	{
		points*=2;
	}
}

function play_random_sound() {
	var idx = (Math.random()*4)|0;
	sounds[idx].play()
}
