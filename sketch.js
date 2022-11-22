let myImage;
let x = 30;
let diam = 30;

function preload() {
	myImage = loadImage("./assets/images/background.png");	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("lightblue");
	show_color_boxes(color(0, 102, 153));
	show_text(color(0, 102, 153));
}


function draw() {
	backgroundImage(myImage)

	if (mouseIsPressed && (dist(mouseX, mouseY, x, 40) <= diam)) {
		fill ("Red");
	}
	else if (mouseIsPressed && (dist(mouseX, mouseY, x, 90) <= diam)) {
		fill("green");
	}
	else if (mouseIsPressed && (dist(mouseX, mouseY, x, 140) <= diam)) {
		fill("Fuchsia");
	}
	else if (mouseIsPressed && (dist(mouseX, mouseY, x, 190) <= diam)) {
		fill("Yellow");
	}
	else if (mouseIsPressed && (dist(mouseX, mouseY, x, 240) <= diam)) {
		fill("white");
	}
	else if (mouseIsPressed && (mouseX > 70 || mouseY > 300)) {
		noStroke();
		ellipse(mouseX, mouseY, 10, 10);		
		show_text(color(0, 102, 153));
	}
	
	

}

function show_text(color){
	push();
	textSize(12);
	fill(color);
	textStyle(BOLD);
	txt = text('Rotate the screen to change the background color', 10, 20);
	pop();
}

function show_color_boxes(){
	push()
	strokeWeight(1);
	stroke(51);
	fill("Red");
	rect(x, 40, diam, diam, 5);
	fill("green");
	rect(x, 90, diam, diam, 5);
	fill("Fuchsia");
	rect(x, 140, diam, diam, 5);
  	fill("Yellow");
  	rect(x, 190, diam, diam, 5);
	fill("white");
	rect(x, 240, diam, diam, 5);
	pop();
}

function deviceTurned() {
	if (turnAxis === 'X'){
		background('#395FEA');
		show_color_boxes();
		show_text(color("white"));
	
	}
	else if (turnAxis === 'Y'){
		background('#062B91');
		show_color_boxes(color("white"));
		show_text(color(0, 102, 153))

	}
	else if (turnAxis === 'Z'){
		background('lightblue');
		show_color_boxes();
		show_text(color(0, 102, 153))
	}
	
}

function backgroundImage(img) {
	push();
	translate(width/2,height/2);
	imageMode(CENTER);
	let scale = Math.max(width/img.width,height/img.height);
	image(img,0,0,img.width*scale,img.height*scale)
	pop();
}

function touchEnded(event) {
	if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
	  	DeviceOrientationEvent.requestPermission();
	}
}
  