

let balls = [];

///////////////////////////////////////////////
function setup() {
  createCanvas(900,600);
  background(0);

  for(let i = 0; i < 100; i++)
  {
    balls.push(new Ball())
  }
}
////////////////////////////////////////////////
function draw() {
 
  balls.forEach(element => element.run())
  //balls.forEach(element => console.log(element))
}
///////////////////////////////////////////////
class Ball {

  constructor(){
    colorMode(HSB, 100);
    let randomX = width/2 + random(-100, 100)
    let randomY = height/2 + random(-100, 100)
    this.velocity = new createVector(0, 0);
    this.location = new createVector(randomX, randomY);
    this.acceleration = new createVector(0, 0);

    this.prevlocation = new createVector(randomX, randomY);

    this.maxVelocity = 5

    let randHue = int(random(0, 100))
    this.color = color(randHue, 100, 100)
    this.weight = random(0, 1)

  }

  run(){
    this.draw();
    this.move();
    this.edges();
  }

  draw(){
    //stroke(this.color)
    strokeWeight(this.weight)
    line(this.location.x, this.location.y, this.prevlocation.x, this.prevlocation.y)
    this.prevlocation = this.location.copy()
    if(mouseX > width/2)  stroke(90, 100, 100)
    else if(mouseX < width/2) stroke(this.color)

  }

  move(){
    var mouse = createVector(mouseX, mouseY);
    var dir = p5.Vector.sub(mouse, this.location);
    dir.normalize();
    dir.mult(this.weight/2);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxVelocity);
    this.location.add(this.velocity);
  }

  edges(){
    // if (this.location.x<0) this.location.x=width;
    // else if (this.location.x>width) this.location.x = 0;
    // else if (this.location.y<0) this.location.y = height;
    // else if (this.location.y>height) this.location.y = 0;
  }
}
