void setup(){
background(#DAD2D8);
size(800,800);
}

String mode="one";
void draw(){
  background(#DAD2D8);
  if(mode.equals("one")){
    for(int i=0;i<=700;i+=100){
      for(int j=0; j<=700; j+=100){
        makeCluster(i,j);
      }
    }
  }else if(mode.equals("two")){
    for(int i=0;i<=700;i+=100){
      for(int j=0; j<=300; j+=100){
        makeCluster(i,j);
      }
      for(int j=300; j<=700; j+=200){
        makeCluster(i,j);
      }
    }
  }else if(mode.equals("three")){
    for(int i=0;i<=800;i+=150){
      for(int j=0; j<=800; j+=150){
        makeCluster(i,j);
      }
    }
  }
}

void mouseClicked(){
  if(mode.equals("one")){
    mode = "two";
  }else if(mode.equals("two")){
    mode = "three";
  }else if(mode.equals("three")){
    mode = "one";
  }
}

void makeCluster(int x, int y){
  //outer cirlce
  noStroke();
  //top petal
  fill(#0F8B8D);
  bezier(50+x,0+y,65+x,10+y,65+x,30+y,50+x,40+y);
  bezier(50+x,0+y,35+x,10+y,35+x,30+y,50+x,40+y);
  //bottom petal
  fill(#EC9A29);
  bezier(50+x,60+y,65+x,70+y,65+x,90+y,50+x,100+y);
  bezier(50+x,60+y,35+x,70+y,35+x,90+y,50+x,100+y);
  //left petal
  fill(#143642);
  bezier(0+x,50+y,10+x,65+y,30+x,65+y,40+x,50+y);
  bezier(0+x,50+y,10+x,35+y,30+x,35+y,40+x,50+y);
  //right petal
  fill(#A8201A);
  bezier(60+x,50+y,70+x,65+y,90+x,65+y,100+x,50+y);
  bezier(60+x,50+y,70+x,35+y,90+x,35+y,100+x,50+y);
  
  //middle square
  fill(#ffffff);
  beginShape();
  vertex(50+x,40+y);
  vertex(60+x,50+y);
  vertex(50+x,60+y);
  vertex(40+x,50+y);
  vertex(50+x,40+y);
  endShape();
  
  //corners
  //bottom left
  beginShape();
  vertex(0+x,80+y);
  bezierVertex(10+x,85+y,10+x,85+y,20+x,80+y);
  bezierVertex(15+x,90+y,15+x,90+y,20+x,100+y);
  vertex(0+x,100+y);
  endShape();
  //bottom right
  beginShape();
  vertex(100+x,80+y);
  bezierVertex(90+x,85+y,90+x,85+y,80+x,80+y);
  bezierVertex(85+x,90+y,85+x,90+y,80+x,100+y);
  vertex(100+x,100+y);
  endShape();
  //top left
  beginShape();
  vertex(0+x,20+y);
  bezierVertex(10+x,15+y,10+x,15+y,20+x,20+y);
  bezierVertex(15+x,10+y,15+x,10+y,20+x,0+y);
  vertex(0+x,0+y);
  endShape();
  //top right
  beginShape();
  vertex(100+x,20+y);
  bezierVertex(90+x,15+y,90+x,15+y,80+x,20+y);
  bezierVertex(85+x,10+y,85+x,10+y,80+x,0+y);
  vertex(100+x,0+y);
  endShape();
}
