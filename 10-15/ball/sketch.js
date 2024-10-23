let ball;
function setup() {
  createCanvas(800, 800);
  background("#DAD2D8");
  ball = new Ball(10, 10, 2, 1);
}
function draw() {
  background(0);
  ball.update();
  ball.display();
  ball.checkEdges();
}
