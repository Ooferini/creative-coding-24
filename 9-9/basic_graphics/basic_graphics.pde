void setup(){
  frameRate(60);
  size(800, 600);
  pixelDensity(displayDensity());
}
//xcount and ycount are x and y position of moving green square
int xcount = 1;
int ycount = 1;
//size is the size of the moving green square
int size = 10;
//ypos and xpos are booleans that store whether the square is moving in the positive x and/or y directions
boolean ypos=true;
boolean xpos=true;
//inc changes the rate that the green square moves at
int inc=1;
//xw and yw are the x and y positions of the window
int xw =1;
int yw =1;
//xwpos and ywpos store whether the window is moving in the positive x and/or y directions
boolean xwpos=true;
boolean ywpos=true;

void draw(){
  //sets black background
  background(#001011);
  //creates green squares
  fill(#98CE00);
  noStroke();
  ellipse(80,60,40,40);
  ellipse(600,400,100,100);
  //creates orange line
  stroke(#EB5E28);
  strokeWeight(20);
  strokeCap(SQUARE);
  rectMode(CENTER);
  line(50,550,750,50);
  noStroke();
  //creates white box
  fill(#FFFFFC);
  rect(width/2+100, height/2+100, width/2, height/2);
  //creates green circle in white area
  fill(#98CE00);
  ellipse(600,400,100,100);
  //creates green circle with orange border
  stroke(#EB5E28);
  ellipse(150,250,70,70);
  fill(#757780, 220);
  //creates grey triangle
  noStroke();
  beginShape();
  vertex(300, 100);
  vertex(400, 500);
  vertex(600, 50);
  endShape();
  //renders moving green square
  fill(#98CE00);
  rect(xcount, ycount, size, size);
  //checks if the square is at the edge of the screen and if so, reverses it
  if(ycount>=height){ypos=false;size+=5;inc++;}
  if(ycount<=0){ypos=true;size+=5;inc++;}
  if(xcount>=width){xpos=false;size+=5;inc++;}
  if(xcount<=0){xpos=true;size+=5;inc++;}
  //moves the square one inc unit
  if(xpos){xcount+=inc;}else{xcount-=inc;}
  if(ypos){ycount+=inc;}else{ycount-=inc;}
  //checks that inc isn't too big, and if it is, resets it
  if(inc>=20){inc=1;}
  
  //
  println(xw + "," + yw);
  windowMove(xw,yw);
  if(xw+width>=displayWidth){xwpos=false;}
  if(xw<=0){xwpos=true;}
  if(yw+25+height>=displayHeight){ywpos=false;}
  if(yw-37<=0){ywpos=true;}
  if(xwpos){xw++;}else{xw--;}
  if(ywpos){yw++;}else{yw--;}
}

void mouseClicked(){
  xwpos=xpos;
  ywpos=ypos;
}
