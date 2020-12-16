var hr,mn,sc;
var hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(0);  
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);
  fill("white");
  textSize(20);
  text("The Getaway Clock",500,200);
  
  translate(200,200);
  rotate(-90);

  //hours
  strokeWeight(8);
  stroke("yellow");
  noFill();
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(hrAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //minutes
  strokeWeight(8);
  stroke("red");
  noFill();
  arc(0,0,280,280,0,mnAngle);

  push();
  rotate(mnAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //seconds
  strokeWeight(8);
  stroke("blue");
  noFill();
  arc(0,0,300,300,0,scAngle);

  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}