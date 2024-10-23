class Ball {
  constructor(x, y, a1, a2) {
    this.position = new createVector(x, y);
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(a1, a2);
    this.topspeed = 10;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }
  display() {
    stroke(255);
    fill(255);
    ellipse(this.position.x, this.position.y, 50, 50);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
    }
    if (this.position.x < 0) {
      this.position.x = width;
    }
    if (this.position.y > height) {
      this.position.y = 0;
    }
    if (this.position.y < 0) {
      this.position.y = height;
    }
  } // checkEdges()
} // end of my class
