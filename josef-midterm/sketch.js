//NEED TO COMMENT EVERYTHING

let furs = [];
let pixels = [];
let fuzzOn = false;
let fuzzStage = 0;
let fuzzCount = 0;
let fakeCursorx = 0;
let fakeCursory = 0;
let scene3 = false;
let invert = 1;

function setup() {
  noCursor();
  createCanvas(800, 800);
  background('#272727');
  frameRate(60);
  //create array of fur objects
  for (let i = 0; i < 800; i += 200) {
    for (let j = 0; j < 8; j++) {
      let k = new fur(100, 100, 100 * j, i, true);
      let l = new fur(100, 100, 100 * j, i, true);
      let m = new fur(100, 100, 100 * j, i, true);
      furs.push(k);
      furs.push(l);
      furs.push(m);
    }
    for (let j = 0; j < 8; j++) {
      let k = new fur(100, 100, 100 * j, i + 200, false);
      let l = new fur(100, 100, 100 * j, i + 200, false);
      let m = new fur(100, 100, 100 * j, i + 200, false);
      furs.push(k);
      furs.push(l);
      furs.push(m);
    }
  }
  //create array of pixels for scene 2
  for (var i = 0; i < 800; i += 20) {
    for (var j = 0; j < 800; j += 20) {
      let pixel = new fuzzyPixel(i, j);
      pixels.push(pixel);
    }
  }
}

function draw() {
  background('#272727');
  if (!scene3) {
    for (let i = 0; i < furs.length; i++) {
      furs[i].update();
    }
    if (fuzzOn) {
      fuzzCount++;
      for (let i = 0; i < 1600; i++) {
        pixels[i].update();
      }
      if (fuzzStage < 255) {
        fuzzStage++;
      }
    }
    if (fuzzCount >= 400) {
      startScene3();
    }
  } else {
    if (frameCount % 4 == 0 && random(0, 1) > 0.3) {
      invert *= -1;
    }
    rect(fakeCursorx, fakeCursory, 10, 10);
    fakeCursorx += random(-3, 3) + invert * (mouseX - pmouseX);
    fakeCursory += random(-3, 3) + invert * (mouseY - pmouseY);
    if (fakeCursorx < 0) {
      fakeCursorx = 0;
    } else if (fakeCursorx > width) {
      fakeCursorx = width;
    }
    if (fakeCursory < 0) {
      fakeCursory = 0;
    }
    if (fakeCursory > height) {
      fakeCursory = height;
    }
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
      translate(100, 0);
      rotate(PI);
    }
    this.tip.update();
    print('update run');
    let x = this.tip.loc.x;
    let y = this.tip.loc.y;
    fill('#EEE0CB');
    noStroke();
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

function startScene3() {
  scene3 = true;
  noCursor();
  fill(0);
  noStroke();
  fakeCursorx = mouseX;
  fakeCursory = mouseY;
}

// make a button for the fuzzy mouse
// disoriented
// degraded image
// non-linear
// change color for scene 1
// make scene 1 shapes fuzzier (opacity, rounder shapes, multiple editions)
// radio noise
