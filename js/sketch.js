var widthRect = 50;
var heightRect = 50;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(0);
}

//you need to have at least 1 draw function for it to work properly
function draw() {

    
}

//the diff. between mousePressed and mouseClicked is that mouseClicked only applies to the left mouse button
function mousePressed () {
    
    if(mouseButton == LEFT) {
        rectMode(CENTER);
        fill(255, 255, 255);
        rect(mouseX, mouseY, widthRect, heightRect);
    }

    if(mouseButton == RIGHT) {
        ellipseMode(CENTER);
        fill(255, 255, 255);
        ellipse(mouseX, mouseY, widthRect, widthRect);
    }
    
    
}

function keyPressed () {
    if(keyCode == ENTER) {
        background(0);
    }

    if(keyCode == UP_ARROW) {
        rect(mouseX, mouseY, widthRect+20, heightRect+40)
    }

    if(keyCode == DOWN_ARROW) {
        ellipse(mouseX, mouseY, widthRect+40, heightRect-20)
    }

    if(keyCode == LEFT_ARROW) {
        fill(random(0,255), random(0, 255), random(0, 255))
        triangle(mouseX, mouseY, mouseX=50, mouseY, mouseX=20, mouseY=50)
    }
}