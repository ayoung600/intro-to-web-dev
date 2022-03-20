let ellipseY = 200;
let rectY = 250;
let triangleY = 271;
let triangleX = 216;
let rectX = 300
let ySpeed = 1;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  // Draw a dark gray background.
  background('#fae');
describe('canvas with pink background');
  noStroke();
  // Change the fill color to white.
  fill (255);

  // Draw the top circle part of the skull.
  ellipse(250, ellipseY, 275, 180);

  // Draw the bottom rectangle part of the skull.
  rect(175, rectY, 150, 100);

  // Change the fill color to black.
  fill(0);

  // Draw the eyes.
  ellipse(190, ellipseY, 50, 75);
  ellipse(310, ellipseY, 50, 75);

  triangle(226, triangleY, 256, triangleX, 282, triangleY);

  // Draw the teeth lines.
  rect(196, rectX, 10, 50);
  rect(250, rectX, 10, 50);
  rect(300, rectX, 10, 50);

ellipseY += ySpeed;
if (ellipseY > height || ellipseY < 60) {
  ySpeed *= -1;
}
rectY += ySpeed;
if (rectY > height || rectY < 60) {
  ySpeed *= -1;
}
rectX += ySpeed;
if (rectX > height || rectX < 60) {
  ySpeed *= -1;
}
triangleY += ySpeed;
if (triangleY > height || triangleY < 60) {
  ySpeed *= -1;
}
triangleX += ySpeed;
if (triangleX > height || triangleX < 60){
  ySpeed *= -1;

  }
}
