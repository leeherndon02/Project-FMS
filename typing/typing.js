// buffer holding characters that are typed
let chars = "";


function setup() 
{
    createCanvas(windowWidth, windowHeight);
    button = createButton('MENU');
    button.position(windowWidth*.05, windowHeight*.75);
    button.size(100, 100);
    button.mousePressed(goBack);
    background(220);

    
    textSize(40);
    // for layout descriptions
    //textOutput()
}

function draw() 
{
    
    
    stroke('black');
    fill('yellow');
    textAlign(CENTER);
    rect(10, 15, 150, 50);

    fill('black');
    
    strokeWeight(2);
    text('Typing!', 20, 50);
    textAlign(CENTER);
    text('Points:', 1200, 520);
    text('500', 1200, 600);

    fill('red');
    textAlign(LEFT);
    text('Dog Chair Computer Bag Ladder Mouse', (windowWidth/2)-300, windowHeight/2);
}

function keyTyped(event) {
	chars += key;
	//speak(key+" "+chars);
	if(was_typed("test")) {
		speak("typed!");
	}
	return true;
}

// checks to see whether the provided text was typed
function was_typed(text) {
	return chars.substring(chars.length-text.length) === text;
}

function goBack()
  {
    window.location = "./menu.html"
  }