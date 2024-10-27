// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

class Bird {

 
  constructor(){
     this.y = height / 2;
     this.x = 64;

    // vectors for gravity (small/tiny), velocity, and lift (enabling upward motion)
   

  }

 
  show(){
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }

  
  up(){
    //add lift to velocity
   
  
  }

  //this.update = function() {
  update(){
    //add gravity to velocity
   
    // this.velocity *= 0.9; // leave this here to play with 
    //add velocity to y location
   

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
