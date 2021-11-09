// buffer holding characters that are typed
let chars = "";
let targetWords = "";
let numWords = 1;
let round = 0;
let point = 0;
// implement this
let points = 0;
let totalTimeMS=0;


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
    rect(10, 15, 150, 50);

    fill('black');
    
    strokeWeight(2);
    text('Typing!', 20, 50);
    textAlign(CENTER);
    text('Points:', 1200, 520);
    text(points, 1200, 600);

    fill('red');
    textAlign(LEFT);
    text(targetWords, (windowWidth/2)-300, windowHeight/2);
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
	points += 100;
	round++;
	speak("typed "+(spl.length)+" words. Now type "+targetWords);
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
