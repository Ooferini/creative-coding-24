let img;
let img2;
let x, y, rotation;

function preload() {
  img = loadImage('../data/legoVader.png', handImage, handError);
}

function setup() {
  createCanvas(100, 100);
  background(0);
  img2 = createImage(100, 100);
  copy();
}

function draw() {
  image(img, 0, 0, width, height);
}

function handImage() {
  console.log('okay!');
}

function handError() {
  console.log('oh no!!!!', Event);
}

function copy() {
  let count = img.loadPixels();
  for (let i = 0; i < img2.width; i++) {
    for (let j = 0; j < img2.height; j++) {}
  }
  img.updatePixels();
}
