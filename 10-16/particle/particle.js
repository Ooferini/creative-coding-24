class Particle {
  constructor(x, y, a1, a2) {
    this.position = new createVector(x, y);
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(a1, a2);
    this.topspeed = 10;
  }

  update() {
    this.velocity.add(this.acceleration);
    // this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }
  display() {
    stroke(255);
    fill(255);
    circle(this.position.x, this.position.y, 50);
  }

  checkEdges() {
    if (this.position.x + 25 > width) {
      this.position.x *= -1;
      this.acceleration.x *= -1;
    }
    if (this.position.x - 25 < 0) {
      this.position.x *= -1;
      this.acceleration.x *= -1;
    }
    if (this.position.y + 25 > height) {
      this.position.y *= -1;
      this.velocity.y *= -1;
    }
    if (this.position.y - 25 < 0) {
      this.velocity.y *= -1;
      this.velocity.y *= -1;
    }
  } // checkEdges()
} // end of my class
