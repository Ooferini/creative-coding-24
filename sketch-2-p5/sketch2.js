function setup() {
  createCanvas(800, 800);
  background("#DAD2D8");
}
var i = 0;
function draw() {
  if (i < 2) {
    i += 0.05;
  } else if ((i = 2)) {
    i = 0;
  }
  makeCluster(mouseX - 50, mouseY - 50, mouseX % mouseY == 100, i);
}

function makeCluster(x, y, makeCorners, ratio) {
  push();
  translate(x, y);
  scale(ratio);
  //outer cirlce
  noStroke();
  //top petal
  fill("#0F8B8D");
  bezier(50, 0, 65, 10, 65, 30, 50, 40);
  bezier(50, 0, 35, 10, 35, 30, 50, 40);
  //bottom petal
  fill("#EC9A29");
  bezier(50, 60, 65, 70, 65, 90, 50, 100);
  bezier(50, 60, 35, 70, 35, 90, 50, 100);
  //left petal
  fill("#143642");
  bezier(0, 50, 10, 65, 30, 65, 40, 50);
  bezier(0, 50, 10, 35, 30, 35, 40, 50);
  //right petal
  fill("#A8201A");
  bezier(60, 50, 70, 65, 90, 65, 100, 50);
  bezier(60, 50, 70, 35, 90, 35, 100, 50);

  //middle square
  fill("#ffffff");
  beginShape();
  vertex(50, 40);
  vertex(60, 50);
  vertex(50, 60);
  vertex(40, 50);
  vertex(50, 40);
  endShape();

  //corners
  if (makeCorners) {
    //bottom left
    beginShape();
    vertex(0, 80);
    bezierVertex(10, 85, 10, 85, 20, 80);
    bezierVertex(15, 90, 15, 90, 20, 100);
    vertex(0, 100);
    endShape();
    //bottom right
    beginShape();
    vertex(100, 80);
    bezierVertex(90, 85, 90, 85, 80, 80);
    bezierVertex(85, 90, 85, 90, 80, 100);
    vertex(100, 100);
    endShape();
    //top left
    beginShape();
    vertex(0, 20);
    bezierVertex(10, 15, 10, 15, 20, 20);
    bezierVertex(15, 10, 15, 10, 20, 0);
    vertex(0, 0);
    endShape();
    //top right
    beginShape();
    vertex(100, 20);
    bezierVertex(90, 15, 90, 15, 80, 20);
    bezierVertex(85, 10, 85, 10, 80, 0);
    vertex(100, 0);
    endShape();
  }
  pop();
}
