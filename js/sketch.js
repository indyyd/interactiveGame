var widthRect = 50;
var heightRect = 50;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(220);
}

function draw() {

    
}

function mousePressed () {
    rectMode(CENTER);
    fill(255, 255, 255);
    rect(mouseX, mouseY, widthRect, heightRect);
}