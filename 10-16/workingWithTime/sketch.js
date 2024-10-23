let currentTime;
let lastTime;
let interval;
let interval2;

let scene1_;
let scene2_;
let scene3_;

let r = 255;

function setup() {
  createCanvas(800, 800);
  frameRate(20); // <---frameRate should be set once and not changed on the fly
  lastTime = 0;
  interval = 2000;
  scene1_ = true;
  scene2_ = false;
  scene3_ = false;
  interval2 = 10000;
}

function draw() {
  // put drawing code here
  // background(0);
  /*
  if(frameCount < 500){
    //do nothing
  } else if (frameCount < 700){
    scene1();
  } else if (frameCount < 1000){
    scene2();
  }
*/

  //*
  if (currentTime - lastTime > interval && scene3_ != true) {
    lastTime = currentTime;
    print("lastTime is " + lastTime);
    print("currentTime is " + currentTime);

    scene3();
  }
  /*
  //print(lastTime);
  if(currentTime - lastTime > interval2 && scene3_ === true){
    print("here");
    lastTime = currentTime;
    print("lastTime is " + lastTime);
    print("currentTime is " + currentTime);
    scene3_ = false;
    scene1_ = true;;

  }
  */

  // */

  //print(scene1_);

  print("scene1_ is " + scene1_);
  print("scene2_ is " + scene2_);
  print("scene3_ is " + scene3_);

  if (scene1_ == true) {
    scene1();
  }
  if (scene2_ == true) {
    scene2();
  }
  if (scene3_ == true) {
    scene3();
  }
  //print(frameCount);
}

function scene1() {
  background(r, 0, 0);
  //calling more functions + objects

  if (mouseIsPressed) {
    r = r - 5;
    if (r < 10) {
      scene1_ = false;
      scene2_ = true;
      r = 255;
    }
  }
  print(r);
}

function scene2() {
  background(0, 255, 0);
  //calling more functions + objects

  if (keyIsPressed) {
    if (keyCode == 32) {
      scene3_ = true;
      lastTime = currentTime;
      currentTime = millis(); // returns the millis second
      scene2_ = false;
    }
  }
}

function scene3() {
  //calling more functions + objects
  background(0, 0, 255);
  //frameRate(3); <---- NOOOOOO do not do this; changing frameRate on the fly

  print("scene 3 happened!");

  scene3_ = false;

  scene1_ = true;

  //*/
}

function scene4() {
  background(127);
}

function mousePressed() {
  // currentTime = millis(); // returns the millis seconds that the code has been running
}
