let tweets;
let buttons = [];
let tweet = ['I'];
let punctuation = ['.', '!', '?', '...'];
let img;
let font;

function preload() {
  // get text file in
  tweets = loadStrings('tweets.txt');
  img = loadImage('TWEETBOX.png');
  font = loadFont('chirp-regular-web.woff');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put all lines together
  tweets = tweets.join(' ');
  // create RiTa markov chain object and add tweets
  markov = RiTa.markov(2);
  markov.addText(tweets);

  textSize(20);
  textFont(font);

  // initialize buttons array
  for (var i = 0; i < 4; i++) {
    let butt = new Button(i + 1);
    buttons.push(butt);
  }
  updateButtons();
}

function draw() {
  background('#ffffff');
  image(img, 10, 10);
  fill('#F7F9F9');
  rectMode(CORNERS);
  text(createString(), 100, 100, 600, 150);
  for (var i = 0; i < 4; i++) {
    buttons[i].display();
  }
}

// Button class for interactivity!
class Button {
  constructor(order) {
    this.order = order;
    this.word = '';
    this.width;
    this.height;
  }

  update(word) {
    this.word = word;
  }

  display() {
    if (this.word != undefined) {
      this.width = textWidth(this.string()) + 32;
      this.height = textSize() + 32;
      noStroke();
      fill('#15202B');
      rectMode(CORNER);
      rect(this.calcX(), 400, this.width, this.height, 16);
      rectMode(CENTER);
      fill('#F7F9F9');
      text(this.string(), this.calcX() + 16, 416 + textSize());
    }
  }

  calcX() {
    let x = 32;
    for (let i = 0; i < this.order - 1; i++) {
      x += 96 + textWidth(buttons[i].string());
    }
    return x;
  }

  string() {
    return this.order + ': ' + this.word;
  }

  getWidth() {
    return this.width;
  }

  getWord() {
    return this.word;
  }
}

function updateButtons() {
  print(tweet);
  let next = markov.completions(tweet);
  for (var i = 0; i < 4; i++) {
    buttons[i].update(next[i]);
  }
}

function createString() {
  let string = '';
  for (var i = 0; i < tweet.length; i++) {
    if (punctuation.includes(tweet[i + 1])) {
      string += tweet[i];
    } else {
      string += tweet[i] + ' ';
    }
  }
  return string;
}

function keyPressed() {
  let word = buttons[parseInt(key) - 1].getWord();
  if (word != undefined) {
    tweet.push(word);
    updateButtons();
  }
}
