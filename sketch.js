
var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  var car=createSprite(400, 200, 50, 50);
  var wall=createSprite(1500,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;

  
}

function draw() {
  background("black");  
  wall.shapeColor="purple";

if (wall.x-car.x<(car.width+wall.width)/2) {
  car.velocityX=0
  var deformation=0.5 * weight * speed * speed/22509;
  if (deformation>180) {
    car.shapecolor=color(green);
  }

  if (deformation>180 && deformation>100) {
    car.shapecolor=color(red);
  }

  if (deformation>100) {
    car.shapecolor=color(blue);
  }
}

  drawSprites();
}


