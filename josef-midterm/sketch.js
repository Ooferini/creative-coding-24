let j;

function setup() {
  createCanvas(800, 800);
  background("#DAD2D8");
  j = new fur(100, 100);
  frameRate(5);
}

function draw() {
  background("#DAD2D8");
  j.update();
}

class fur {
  constructor(furWidth, furHeight) {
    this.furWidth = furWidth;
    this.furHeight = furHeight;
    this.tip = new furTip(this.furWidth, this.furHeight);
  }

  update() {
    this.tip.update();
    print("update run");
    let x = this.tip.loc.x;
    let y = this.tip.loc.y;
    fill(0);
    beginShape();
    vertex(0, 0);
    bezierVertex(-20, 20, x - 20, 80, x + 20, y);
    bezierVertex(x - 20, 40, x, 10, this.furWidth, 0);
    vertex(this.furWidth, 0);
    endShape();
  }
}

class furTip {
  constructor(furWidth, furHeight) {
    this.furWidth = furWidth;
    this.loc = createVector(furWidth / 2, furHeight);
    this.vel = createVector(0.5, 0);
    this.accel = createVector(0, 0);
  }

  update() {
    print("tip update run");
    this.loc.add(this.vel);
    this.vel.add(this.accel);
    if (this.loc.x > this.furWidth / 2) {
      this.accel += 1;
    } else if (this.loc.x <= this.furWidth / 2) {
      this.accel -= 1;
    }
  }
}
