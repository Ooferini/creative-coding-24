// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

var bird;
var pipes = []; // create an array

function setup() {
  createCanvas(640, 480);
  //make a new bird:
  
  // push a new pipe 
 
  // push that new pipe into the pipes array:
  
}

function draw() {
  background(0);

  for (var i = pipes.length - 1; i >= 0; i--) {
    //cycling through the pipes array, pull out an indice/run the methods
    // show and update:

   

    //if this pipe that we are cycling thru, hits a bird
    //call the method "hits" on the pipe we are iterating through, passing
    // the bird object to check:
    if () {
      console.log('HIT');
    }

    // is this pipe off screen?
    // call the offscreen() method of pipe and run it
    if () {
      pipes.splice(i, 1);
    }
  }
  // update the bird object + show it:


  if (frameCount % 75 == 0) {
    //make a new pipe
    //push that new pipe into the pipes array
    
  }
}

function keyPressed() {
  //if the spacebar is pressed:
  if (key == ' ') {
    //make the bird go up /call the objects "up" method
  
    //console.log("SPACE");
  }
}
