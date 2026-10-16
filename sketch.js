
let t = 0;
let color1 = 255
let color2 = 255
let color3 = 255
let i =0
let speed = 0.09
let bugColor1 = 50
let bugColor2 = 210
let bugColor3 = 180
let k = 30
function setup() {
  createCanvas(600, 450);
  angleMode(DEGREES);
}

function draw() {
  background(20, 24, 45);
  t += 2;

  // Stars
  noStroke();
  fill(255, 255, 180);
  for (let i = 0; i < 35; i++) {
    circle((i * 83) % 600, (i * 47) % 400, 3);
  }

  // Creature follows a gentle floating motion
  let bob = sin(t * 2) * 8;
  translate(300, 220 + bob);

  // Tail
  stroke(170, 100, 255);
  strokeWeight(12);
  noFill();
  beginShape();
  for (let i = 0; i < 6; i++) {
    let x = 65 + i * 15;
    let y = sin(t * 3 + i * 30) * 15 + i * 3;
    }
  endShape();

  // Six moving legs
  stroke(90, 230, 210);
  strokeWeight(7);
  for (let i = 0; i < 3; i++) {
    let y = -15 + i * 28;
    let movement = sin(t * 4 + i * 60) * 12;

    line(-45, y, -75, y + movement);
    line(-75, y + movement, -95, y + 10);

    line(45, y, 75, y - movement);
    line(75, y - movement, 95, y + 10);
  }

  // Antennae
  stroke(90, 230, 210);
  strokeWeight(5);
  line(-25, -65, -40, -100 + sin(t * 3) * 8);
  line(25, -65, 40, -100 + sin(t * 3 + 90) * 8);

  // Antenna tips
  noStroke();
  fill(255, 100, 180);
  circle(-40, -100 + sin(t * 3) * 8, 15);
  circle(40, -100 + sin(t * 3 + 90) * 8, 15);

  // Main body
  fill(bugColor1, bugColor2, bugColor3);
  stroke(160, 255, 230);
  strokeWeight(3);
  ellipse(0, 0, 125, 145);

  // Belly
  noStroke();
  fill(120, 245, 205);
  ellipse(0, 25, 75, 75);

  // Three eyes
  for (let i = -1; i <= 1; i++) {
    fill(255);
    circle(i * 32, -25, 27);

    fill(35, 40, 65);
    circle(i * 32 + sin(t) * 3, -25, 13);

    fill(255);
    circle(i * 32 + sin(t) * 3 - 3, -29, 4);
  }

  // Smile
  noFill();
  stroke(35, 100, 100);
  strokeWeight(3);
  arc(0, 8, k, 20, 15, 165);

  // Spots
  noStroke();
  fill(255, 130, 190);
  circle(-30, 45, 10);
  circle(30, 45, 10);
  circle(0, 55, 8);


  drawFace(-200,100)
  if (mouseIsPressed == true){
    speed = 20
    if (i>=10){
      color1 = random(0,255)
      color2 = random(0,255)
      color3 = random(0,255)
      i = 0
    }
    
    
    if(mouseX>50 && mouseX<150 && mouseY>270 && mouseY<360){
      bugColor1 = 255
      bugColor2 = 0
      bugColor3 = 0
      k = 110
    }
    
    i++
  }
  if(mouseIsPressed ==false){
    speed = 5
    bugColor1 = 50
    bugColor2 = 210
    bugColor3 = 180
    k=30
  }
  fill(0,0,255)
  text("Egg", -210,170)

  
  
}
let circleX = 0
let circleY =0
function drawFace(x,y){
  push()
  translate(x, y)
  rotate(frameCount*speed)
  fill(color1, color2, color3)
  circle(circleX, circleY, 100)
  fill(0)

  circle(0-20,0,10)
  circle(0+20,0,10)
  circle(0,0-20,10)
  circle(0,0+20,10)
  pop()
}