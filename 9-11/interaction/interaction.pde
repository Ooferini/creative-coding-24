void setup() {
  size(800, 800);
  background(0);
  noFill();
  noStroke();
}
double xpercent;
double ypercent;
int xcol;
int ycol;
int time = 0;
void draw() {
  time++;
  if(time>=255){time=0;}
  fill(255);
  quad(40,80,80,40,340,300,300,340);
  xpercent = ((double) mouseX) / width;
  ypercent = ((double) mouseY) / height;
  xcol = (int)(xpercent*255);
  ycol = (int)(ypercent*255);
  fill(xcol, ycol, time);
  rectMode(RADIUS);
  rect(mouseX, mouseY, 20, 20);
}
