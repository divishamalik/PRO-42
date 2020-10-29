var hr,mn,sec;
var hrangle,mnangle,secangle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);
  translate(200,200);
  rotate(-90);
  hr=hour();
  mn=minute();
  sec=second();
  secangle=map(sec,0,60,0,360);
  mnangle=map(mn,0,60,0,360);
  hrangle=map(hr%12,0,12,0,360);
  ellipseMode(CENTER);
  ellipse(0,0,60,60);
  
  push();
  rotate(secangle);
  stroke("red");
  strokeWeight(5);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnangle);
  stroke("blue");
  strokeWeight(6);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrangle);
  stroke("green");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  noFill();
  
  stroke("red");
  arc(0,0,300,300,0,secangle);

  stroke("blue");
  arc(0,0,280,280,0,mnangle);

  stroke("green");
  arc(0,0,260,260,0,hrangle);

  drawSprites();
}