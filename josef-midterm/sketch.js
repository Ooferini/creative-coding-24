let furs = [];
let pixels = [];
let fuzzOn = false;
let fuzzStage = 0;

function setup() {
  createCanvas(800, 800);
  background("#DAD2D8");
  frameRate(60);
  for (let i = 0; i < 8; i++) {
    let j = new fur(100, 100, 100 * i, 0, true);
    furs.push(j);
  }
  for (let i = 0; i < 8; i++) {
    let j = new fur(100, 100, 100 * i, height - 200, false);
    furs.push(j);
  }
  for (var i = 0; i < 800; i += 20) {
    for (var j = 0; j < 800; j += 20) {
      let pixel = new fuzzyPixel(i, j);
      pixels.push(pixel);
    }
  }
}

function draw() {
  background("#DAD2D8");
  for (let i = 0; i < 8; i++) {
    furs[i].update();
  }
  if (fuzzOn) {
    for (let i = 0; i < 1600; i++) {
      pixels[i].update();
    }
    fuzzStage++;
  }
}

class fur {
  constructor(furWidth, furHeight, xoffset, yoffset, up) {
    this.xoffset = xoffset;
    this.yoffset = yoffset;
    this.furWidth = furWidth;
    this.furHeight = furHeight;
    this.tip = new furTip(this.furWidth, this.furHeight);
    this.up = up;
  }

  update() {
    push();
    translate(this.xoffset, this.yoffset);
    if (!this.up) {
      rotateZ(HALF_PI);
    }
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
    pop();
  }
}

class furTip {
  constructor(furWidth, furHeight) {
    this.furWidth = furWidth;
    this.loc = createVector(furWidth / 2 + random(10), furHeight);
    this.vel = createVector(0, 0);
    this.accel = createVector(0, 0);
  }

  update() {
    this.loc.add(this.vel);
    this.vel.x -= this.loc.x - this.furWidth / 2;
  }
}

function mouseClicked() {
  fuzzOn = true;
}

class fuzzyPixel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    let value = random(0, 255);
    noStroke();
    fill(value, value, value, fuzzStage);
    rect(this.x, this.y, 20, 20);
  }
}
