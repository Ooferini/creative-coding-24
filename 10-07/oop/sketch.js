let menPerRow;
let menPerCol;
let men = new Array();
function setup() {
  createCanvas(800, 800);
  background("#000000");
  for (let i = 0; i < 8; i++) {
    let man = new Snowman();
    print(man);
    men.push(man);
  }
  menPerRow = width / 200;
  menPerCol = height / 400;
}

function draw() {
  fill("#ffffff");
  for (var i = 0; i < menPerCol; i++) {
    for (var j = 0; j < menPerRow; j++) {}
  }
}

class Snowman {
  constructor() {
    this.baseOffset = random(0, 10);
    this.midOffset = random(0, 10);
    this.headOffset = random(0, 10);
  }

  drawSnowman() {
    circle(100, 350, 50, 50);
  }
}
