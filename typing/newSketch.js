
let c;
function setup() {
	createCanvas(windowWidth, windowHeight);
	//background(220);


 
}

function draw() {
	c = get(mouseX, mouseY);
	background(220);

	
	fill(c);
	//noStroke();
	rect(200, 200, 100, 100);

	fill(500);
	textSize(50);
	text(c, 400, 400);

	fill(800, 240, 220);
	textSize(500);
	text('A', windowWidth*.50, 500);

	fill('green');
	//noStroke();
	rect(500, 600, 100, 100);

	
}

function changeColor() {


	rect(200, 500, 100, 100);
}
