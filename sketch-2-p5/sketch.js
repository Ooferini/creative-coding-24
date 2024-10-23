let mode = 9;
let factor = 1;
function setup() {
  createCanvas(800, 800);
  background("#DAD2D8");
}

function draw() {
  if (mode == 1) {
    for (let i = 0; i <= 700; i += 50) {
      for (let j = 0; j <= 700; j += 100) {
        if (i % j == 0) makeCluster(i, j, i == j, 1);
      }
    }
  } else if (mode == 2) {
    for (let i = 0; i <= 700; i += 100) {
      for (let j = 0; j <= 700; j += 100) {
        if (i % 300 == 0 || j % 300 == 0) makeCluster(i, j, true, 1);
      }
    }
  } else if (mode == 3) {
    let k = 100;
    for (let i = 0; i <= 700; i += 100) {
      for (let j = 0; j <= 700; j += k) {
        makeCluster(j, i, false);
      }
      makeCluster(k, k, false);
      k -= 10;
    }
  }
  if (mode == 4) {
    for (var i = 0; i <= 700; i += 100) {
      for (var j = 0; j <= 700; j += 100) {
        makeCluster(i, j, true, 1);
      }
    }
  } else if (mode == 5) {
    for (var i = 0; i <= 700; i += 100) {
      for (var j = 0; j <= 300; j += 100) {
        makeCluster(i, j, true, 1);
      }
      for (var j = 300; j <= 700; j += 200) {
        makeCluster(i, j, true, 1);
      }
    }
  } else if (mode == 6) {
    for (var i = 0; i <= 800; i += 150) {
      for (var j = 0; j <= 800; j += 150) {
        makeCluster(i, j, true, 1);
      }
    }
  } else if (mode == 7) {
    background("#DAD2D8");
    var k = int(mouseX / 100) + 1;
    print(k);
    for (var i = 0; i < 1600 - k * 100; i += 100 * k) {
      for (var j = 0; j < 1600 - k * 100; j += 100 * k) {
        makeCluster(i, j, true, k);
      }
    }
  } else if (mode == 8) {
    if (factor < 4) {
      factor += 0.3;
    } else {
      factor = 1;
    }
    push();
    rotate(factor * HALF_PI);
    makeCluster(mouseX - 50, mouseY - 50, false, 1);
    pop();
  } else if (mode == 9) {
    background("#DAD2D8");
    var kx = int((mouseX / 100) * (5 / 8)) + 1;
    var ky = int((mouseY / 100) * (5 / 8)) + 1;
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        if ((kx % 2 != 0 && ky % 2 != 0) || i % 2 == 0 || j % 2 == 0) {
          makeCluster(i * 160, j * 160, true, 8 / 5);
        } else {
          push();
          translate(i * 160, j * 160);
          rotate(QUARTER_PI);
          makeCluster(2.5, -110, false, 2.2);
          pop();
        }
      }
    }
    if (kx % 2 == 0 || ky % 2 == 0) {
      rotate();
    }
  }
}

function mouseClicked() {
  if (mode != 9) {
    mode++;
    background("#DAD2D8");
  } else {
    mode = 1;
    background("#DAD2D8");
  }
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
