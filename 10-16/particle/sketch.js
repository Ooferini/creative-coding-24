let p1;
let p2;
let particles = [];
function setup() {
  createCanvas(800, 800);
  p1 = new Particle(width / 2, height / 2, -0.0001, 0.01);
  p2 = new Particle(0, 0, -0.001, 0.02);
  particles.push(p1);
  particles.push(p2);
}

function draw() {
  background(0);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.checkEdges();
    p.display();
  }
  print(particles);
}

function mouseClicked() {
  particles.push(new Particle(width / 2, height / 2, 1, 1));
}
