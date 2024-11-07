//NEED TO COMMENT EVERYTHING

// declare and initialize global variables
let furs = [];
let pixels = [];
let fuzzOn = false;
let fuzzStage = 0;
let fuzzCount = 0;
let fakeCursorx = 0;
let fakeCursory = 0;
let scene3 = false;
let invert = 1;
let goal;
let scene3count = 0;
let spots = [];
let spotsOn = false;

function setup() {
  noCursor();
  createCanvas(windowWidth, windowHeight);
  background('#272727');
  frameRate(60);
  //create array of fur objects
  for (let i = 0; i < height; i += 200) {
    for (let j = 0; j < width; j += 100) {
      let k = new fur(100, 100, j, i, true);
      let l = new fur(100, 100, j, i, true);
      let m = new fur(100, 100, j, i, true);
      furs.push(k);
      furs.push(l);
      furs.push(m);
    }
    for (let j = 0; j < width; j += 100) {
      let k = new fur(100, 100, j, i + 200, false);
      let l = new fur(100, 100, j, i + 200, false);
      let m = new fur(100, 100, j, i + 200, false);
      furs.push(k);
      furs.push(l);
      furs.push(m);
    }
  }
  //create array of pixels for scene 2
  for (var i = 0; i < width; i += 20) {
    for (var j = 0; j < height; j += 20) {
      let pixel = new fuzzyPixel(i, j);
      pixels.push(pixel);
    }
  }
}

function draw() {
  //randomly turn on/off spots
  if (random() < 0.02) {
    spotsOn = !spotsOn;
  }
  //reset background
  background('#272727');
  if (!scene3) {
    //render fur objects
    for (let i = 0; i < furs.length; i++) {
      furs[i].update();
    }
    //random pixel fuzzy thing
    if (fuzzOn) {
      fuzzCount++;
      for (let i = 0; i < pixels.length; i++) {
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
    scene3update();
  }
  if (spotsOn) {
    var seed = random();
    if (seed <= 0.001) {
      spotsOn = false;
    }
    if (seed >= 0.8) {
      var spot = new Spot();
      spots.push(spot);
      print(spots);
    }
    for (var i = 0; i < spots.length; i++) {
      spots[i].update();
      spots[i].display();
    }
  }
}

//frame update for scene3 (fake cursor)
function scene3update() {
  scene3count++;
  if (frameCount % 120 == 0 && random(0, 1) > 0.1) {
    invert *= -1;
  }
  noStroke();
  fill('cdeff3');
  rect(fakeCursorx, fakeCursory, 10, 10);
  // move fake cursor based on cursor movement plus a little bit of noise
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
  goal.update();
  goal.display();
}

// goal to mouse over for scene 3
// also set radius for goal
const radius = 50;
class Goal {
  constructor() {
    this.x = random(radius, width - radius);
    this.y = random(radius, height - radius);
    this.ringDist = 0;
    this.ringOut = true;
  }

  update() {
    if (
      fakeCursorx >= this.x - radius &&
      fakeCursorx <= this.x + radius &&
      fakeCursory >= this.y - radius &&
      fakeCursory <= this.y + radius
    ) {
      this.reset();
    }
    if (this.ringOut) {
      this.ringDist++;
    } else {
      this.ringDist--;
    }
    if (this.ringDist === 20 || this.ringDist === 0) {
      this.ringOut = !this.ringOut;
    }
  }

  reset() {
    this.x = random(radius, width - radius);
    this.y = random(radius, height - radius);
  }

  display() {
    ellipseMode(CENTER);
    noStroke();
    fill('#700b0b');
    // main circle
    circle(this.x, this.y, radius);
    stroke('rgba(112, 11, 11, 0.5)');
    noFill();
    strokeWeight(5);
    // outer ring
    print(this.ringDist);
    circle(this.x, this.y, radius + this.ringDist);
  }
}

// fur object in scene 1
class fur {
  constructor(furWidth, furHeight, xoffset, yoffset, up) {
    this.xoffset = xoffset;
    this.yoffset = yoffset;
    //furWidth and furHeight don't really matter since they're all the same but it'd be good if I ever re-used the class
    this.furWidth = furWidth;
    this.furHeight = furHeight;
    this.tip = new furTip(this.furWidth, this.furHeight);
    this.up = up;
  }

  update() {
    push();
    // I feel like this was a good use of push/pop!
    // Instead of adding variables to all the bezierVertex calls, I just had to call them once
    translate(this.xoffset, this.yoffset);
    // flips it (rotates 180deg) if it's supposed to be upside-down
    if (!this.up) {
      translate(100, 0);
      rotate(PI);
    }
    this.tip.update();
    //print('update run');
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

// top of the fur object so it could move on its own without having too large of a fur class
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

// function that sets up scene 3 by
function startScene3() {
  goal = new Goal();
  scene3 = true;
  noCursor();
  fill(0);
  noStroke();
  fakeCursorx = mouseX;
  fakeCursory = mouseY;
}

//creates a spot in the vision
class Spot {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.radius = 0;
    this.opacity = 0.1;
    this.fadeOut = false;
    this.grow = true;
    this.max = random(50, 200);
    this.speed = random();
  }

  update() {
    this.opacity += 0.01;
    if (this.opacity >= 0.4) {
      this.fadeOut = true;
    }
    if (this.fadeOut) {
      this.opacity -= 0.01;
    }
    if (this.grow) {
      this.radius += this.speed;
    } else {
      this.radius -= this.speed;
    }
    if (this.radius >= this.max) {
      this.grow = false;
    }
    if (this.radius <= 0) {
      this.speed = 0;
    }
  }

  display() {
    noStroke();
    fill(`rgba(255,255,255,${this.opacity})`);
    circle(this.x, this.y, this.radius);
  }
}

// make a button for the fuzzy mouse
// disoriented
// degraded image
// non-linear
// change color for scene 1
// make scene 1 shapes fuzzier (opacity, rounder shapes, multiple editions)
// radio noise
