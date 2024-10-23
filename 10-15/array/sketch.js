let x = new Array(50);
let y = new Array(50);
let num = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  background("#DAD2D8");
  noStroke();
  fill(255, 102);
}
function draw() {
  background(0);
  for (let i = x.length - 1; i > 0; i--) {
    x[i] = x[i - 1];
    y[i] = y[i - 1];
  }
  for (let i = 0; i < x.length; i++) {
    circle(x[i], y[i], i / 2);
  }

  x[0] = mouseX;
  y[0] = mouseY;
}
