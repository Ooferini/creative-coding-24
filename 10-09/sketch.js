let a;

function setup() {
  createCanvas(800, 800);
  background("#000000");
  p = createVector(width / 2, 0);
  part = new Particle();
}

function draw() {
  a.display();
}

class Particle {
  constructor(p, v, a) {
    this.loc = p;
    this.velocity = createVector(0, 0);
    this.accel = createVector(0, 0.5);
  }

  update() {
    this.velocity.add(this.acceleration);
  }

  display() {
    stroke(127);
    fill(75);
    circle(this.loc.x, this.loc.y, 48);
  } // display()
  move() {}
} // Particle class
