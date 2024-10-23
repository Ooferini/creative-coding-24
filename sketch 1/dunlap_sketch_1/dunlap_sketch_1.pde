void setup(){
  size(800, 800);
  background(250, 241, 197);
}

boolean drawn = false;

void draw(){
  if(!drawn){
  renegade();drawn = true;}
  
}

void renegade(){
  noStroke();
  //light orange background thing in right
  fill(#f7ad6d);
  quad(800,480,800,500,650,570,640,535);
  //light blue background stuff
  fill(#a7cfcd);
  beginShape();
  vertex(0,30);
  vertex(30,40);
  vertex(10,60);
  vertex(0,60);
  endShape();
  
  beginShape();
  vertex(0,65);
  vertex(220,80);
  vertex(0,80);
  endShape();
  
  beginShape();
  vertex(520,380);
  vertex(650,200);
  vertex(660,800);
  vertex(600,800);
  vertex(530,600);
  endShape();
  
  beginShape();
  vertex(0,410);
  vertex(200,350);
  vertex(0,450);
  endShape();
  
  beginShape();
  vertex(0,520);
  vertex(200,540);
  vertex(400,500);
  vertex(0,500);
  endShape();
  
  beginShape();
  vertex(0,270);
  vertex(110,380);
  vertex(0,300);
  endShape();
  
  beginShape();
  vertex(50,110);
  vertex(100,120);
  vertex(100,200);
  vertex(65,170);
  endShape();
  
  beginShape();
  vertex(140,230);
  vertex(170,130);
  vertex(265,125);
  vertex(250,210);
  endShape();
  
  beginShape();
  vertex(40,340);
  vertex(50,330);
  vertex(47,400);
  endShape();
  
  beginShape();
  vertex(300,30);
  vertex(800,25);
  vertex(300,40);
  endShape();
  
  beginShape();
  vertex(50,480);
  vertex(110,440);
  vertex(110,460);
  endShape();
  
  beginShape();
  vertex(110,390);
  vertex(130,370);
  vertex(130,490);
  vertex(110,490);
  endShape();
  
  beginShape();
  vertex(0,160);
  vertex(40,230);
  vertex(100,250);
  vertex(170,310);
  vertex(100,300);
  vertex(50,270);
  endShape();
  
  beginShape();
  vertex(670,500);
  vertex(685,520);
  vertex(800,480);
  vertex(800,460);
  endShape();
  
  beginShape();
  vertex(760,480);
  vertex(758,350);
  vertex(780,470);
  endShape();
  
  beginShape();
  vertex(800,380);
  vertex(700,410);
  vertex(690,400);
  vertex(800,360);
  endShape();
  
  beginShape();
  vertex(740,380);
  vertex(740,250);
  vertex(750,130);
  vertex(770,130);
  vertex(770,380);
  endShape();
  
  beginShape();
  vertex(580,0);
  vertex(580,40);
  vertex(660,130);
  endShape();
  
  beginShape();
  vertex(400,70);
  vertex(800,220);
  vertex(800,250);
  vertex(400,110);
  endShape();
  
  beginShape();
  vertex(720,0);
  vertex(760,0);
  vertex(430,230);
  vertex(400,200);
  endShape();
  
  beginShape();
  vertex(515,170);
  vertex(550,210);
  vertex(550,220);
  vertex(485,190);
  endShape();
  
  beginShape();
  vertex(300,330);
  vertex(650,150);
  vertex(700,150);
  vertex(470,330);
  endShape();
  
  beginShape();
  vertex(800,310);
  vertex(760,330);
  vertex(640,330);
  vertex(640,340);
  vertex(800,340);
  endShape();
  
  quad(0,770,80,770,80,800,0,800);
  triangle(140,510,90,630,120,620);
  triangle(220,790,450,670,450,730);
  quad(150,715,160,705,180,720,170,725);
  
  //light teal background stuff
  fill(#66d4c9);
  beginShape();
  vertex(380,250);
  bezierVertex(180,230,150,320,330,370);
  bezierVertex(250,310,280,280,380,250);
  endShape();
  
  triangle(450,570,450,480,475,480);
  triangle(475,620,520,620,520,510);
  
  //light pink background stuff
  noStroke();
  fill(#e6bcdb);
  
  beginShape();
  vertex(30,650);
  vertex(230,580);
  vertex(300,580);
  vertex(400,630);
  vertex(450,620);
  vertex(450,660);
  vertex(400,670);
  vertex(300,585);
  vertex(230,585);
  vertex(100,650);
  endShape();
  
  triangle(220,250,400,200,400,240);
  
  quad(800,715,600,800,710,800,800,770);
  
  //blue pillar looking things in the middle
  noStroke();
  fill(59, 87, 179);
  quad(205,295,230,330,230,500,200,500);
  quad(320,300,350,270,350,460,320,460);
  quad(50,130,53,133,53,290,50,287);
  
  //teal-er trapezoidal things in the bottom
  noStroke();
  fill(#2e89d9);
  
  quad(500,575,490,810,450,770,450,605);
  quad(550,590,550,830,490,750,490,630);
  quad(565,415,560,600,544,600,550,420);
  
  quad(320,600,350,640,365,800,318,800);
  
  quad(0,610,40,650,50,800,0,800);
  //big dark things that jut out from left
  noStroke();
  fill(20,0,90);
  
  beginShape();
  vertex(0,480);
  vertex(75,480);
  vertex(410,445);
  vertex(730,440);
  vertex(730,470);
  vertex(210,505);
  vertex(0,510);
  endShape();
  
  beginShape();
  vertex(0,680);
  vertex(95,660);
  vertex(285,670);
  vertex(285,695);
  vertex(0,730);
  endShape();
  
  stroke(20,0,90);
  strokeWeight(15);
  line(0,15,800,15);
  
//big dark things in bottom right
  noStroke();
  fill(#302e28);
  
  beginShape();
  vertex(250,800);
  vertex(660,640);
  vertex(800,580);
  vertex(800,610);
  vertex(700,670);
  vertex(660,665);
  vertex(400,800);
  endShape();
  
  beginShape();
  vertex(590,800);
  vertex(660,720);
  vertex(730,710);
  vertex(800,800);
  vertex(770,800);
  vertex(720,735);
  vertex(670,740);
  vertex(630,800);
  endShape();
  
  triangle(800,470,800,480,770,477);
  //yellow shape in top
  noStroke();
  fill(#f0d83c);
  beginShape();
  vertex(100,0);
  vertex(550,350);
  vertex(350,130);
  vertex(330,0);
  endShape();
  
  //blue lines that go across the screen
  stroke(#2455a3);
  strokeCap(PROJECT);
  strokeWeight(10);
  line(90,60,580,70);
  line(0,110,240,145);
  line(0,380,250,320);
  line(0,605,145,590);
  line(145,590,150,610);
  line(800,210,620,230);
  line(620,230,620,260);
  line(100,0,300,65);
  line(300,65,600,120);
  line(600,120,800,140);
  
  //light black curves that go around the screen
  noFill();
  stroke(0, 0, 0, 40);
  strokeWeight(4);
  bezier(0,220,220,220,220,490,0,480);
  bezier(0,560,400,570,350,280,0,120);
  bezier(700,150,500,200,500,300,700,400);
  
  strokeWeight(3);
  stroke(0,0,0,175);
  bezier(360,0,450,200,450,400,450,600);
  bezier(460,0,520,200,523,500,520,600);
  
  bezier(510,30,570,50,640,40,640,0);
  
  strokeWeight(2);
  bezier(150,30,220,50,120,110,180,140);
  bezier(0,270,100,280,100,340,20,350);
  bezier(40,630,150,605,170,620,140,660);
  line(0,300,50,250);
  
  
  
  //dusts around the canvas
  dust(500,800,500,800,100,4);
  dust(550,600,150,200,200,6);
  dust(0,110,30,440,100,3);
  dust(200,0,500,200,255,2);
  
}
  
  
//creates dusty points
void dust(int startX, int endX, int startY, int endY, int opac, int size){
  noFill();
  stroke(0,0,0,opac);
  strokeWeight(size);
  strokeCap(ROUND);
  float rLow = (endY-startY)/30;
  float rHigh = (endY-startY)/2;
  float incY = random(rLow,rHigh);
  for(int i=startX; i<=endX; i+=3){
    for(int j=(startY+ (int) incY); j<=endY; j+=incY){
      incY = random(rLow,rHigh);
      point(i,j);
    }
  }
}
  
