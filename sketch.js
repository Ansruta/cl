

function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(0); 
  angleMode(DEGREES);

  var hr=hour();
var min=minute();
var sec=second();


 
  secAngle=map(sec,0,60,0,360);
  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(width/2,height/2,width/2,110);
  pop();
 
 
  minAngle=map(min,0,60,0,360);
  push();
  rotate(minAngle)
  stroke(0,255,64);
  strokeWeight(7);
  line(width/2,height/2,width/2,120);
  pop();
 
 
  hrAngle=map(hr,0,12,0,360);
  push();
  rotate(hrAngle)
  stroke(0,64,255);
  strokeWeight(7);
  line(width/2,height/2,width/2,150);
  pop();
  drawSprites();
}