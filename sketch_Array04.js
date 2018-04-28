var xPos = new Array(10);
var yPos = new Array(10);
var xDir = new Array(10);
var yDir = new Array(10);
var colorofrect = new Array(10);

function setup() {
  createCanvas(400,300);
  background(0);
  
  for(var i=0; i<10; i++) {
    xPos[i] = random(380);
    yPos[i] = random(280);
    xDir[i] = random(10);
    yDir[i] = random(10);
  }  
}

function draw() {
  background(0);
  
  for(var i=0; i<10; i++) {
    xPos[i] = xPos[i] + xDir[i];
    yPos[i] = yPos[i] + yDir[i];
    colorofrect[i] = random(255);
  
    fill(colorofrect[i],100,100);
    rect(xPos[i],yPos[i],20,20);
  
    if(xPos[i]<0 || xPos[i]>380) {
      xDir[i]*=-1;
    }
    if(yPos[i]<0 || yPos[i]>280) {
      yDir[i]*=-1;
    }
  }
}