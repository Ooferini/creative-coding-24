let position;
let velocity;
let acceleration;

function setup() {
  position = createVector(100, 100);
  velocity = createVector(2.5, 2.5);
  acceleration = createVector(0, 1);
  createCanvas(800, 800);
  background("#DAD2D8");
}
function draw() {
  background(0);
  velocity.add(acceleration);
  position.add(velocity);
  circle(position.x, position.y, 20);

  if (position.x + 10 > width || position.x - 10 < 0) {
    velocity.x = velocity.x * -1;
  }
  if (position.y + 10 > height || position.y - 10 < 0) {
    velocity.y = velocity.y * -1;
  }
}
