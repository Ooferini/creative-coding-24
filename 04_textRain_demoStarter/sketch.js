let allTheText;
let theFont;
let currentLine = ''; //empty string
let textPositions = []; //empty array one to hold the text positions
let charSize = []; // empty array to hold the sizes of the text

function preload() {
  allTheText = loadStrings('data/aliceinwonderland.txt'); // this creates an array of strings, with each individual line being it's one entry into the array
  theFont = loadFont('data/font2.otf');
}

function setup() {
  createCanvas(1200, 1200);
  textFont(theFont);
  getLine();
}

function draw() {
  background(255);
  let positionX = 0;

  for (let i = 0; i < currentLine.length; i++) {
    textSize(charSize[i]);
    text(currentLine.charAt(i), positionX, y);
    positionX += textWidth(currentLine.charAt(i));
  }
}

function getLine() {
  let currentLine = allTheText[floor(random(allTheText.length))];

  charSize;

  for (let i = 0; i < currentLine.length; i++) {
    textPositions[i] = 0;
    charSizes[i] = random(45, 70);
  }
}

function keyReleased() {
  getLine();
}
