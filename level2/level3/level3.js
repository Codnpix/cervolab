var ship;
var chev;
var chevImage;
var shipImage;
var bgImg;
var chevs;

var lgBorder1;
var lgBorder2;
var lgBorder3;
var lgBorder4;
var chevBorder;

var yBorder1;
var yBorder2;
var yBorder3;
var yBorder4;
var yBorder5;
var xBorder1;
var xBorder2;
var xBorder3;
var recBorder1;
var recBorder2;
var recBorder3;
var recBorder4;
var recBorder5;
var recBorder6;
var recBorder7;
var sqrBorder;
var bigrecBorder;

var direction = -90;

var death;

var win;

var song;

function preload() {
  shipImage = loadImage('spritecar.png');
    bgImg = loadImage("laby3.png");
    chevImage = loadImage("spritechev.png");
    death = loadImage("animCranes.gif");
}

function setup() {
  var canvas = createCanvas(614, 615);
  canvas.parent('playground');

  song = document.getElementById("soundtrack");
  song.play();

  chevs = new Group();

  ship = createSprite(275, 580);
  ship.rotation = -90 ;
  ship.maxSpeed = 1.2;
  ship.friction = .03;
  ship.addImage("normal", shipImage);
    
for(var i = 0; i<3; i++) {
  var newChev = createSprite(random(0,width), random(0,height));
    newChev.addImage("normal", chevImage);
    direction = direction + random(8,352) ;
    newChev.setSpeed(1.3, direction);
    newChev.mass = (0);
    chevs.add(newChev);
  }

lgBorder1 = createSprite(5,335,14,547);
lgBorder1.shapeColor = color(0,0,0,0);
    
lgBorder2 = createSprite(607,308,14,617);
lgBorder2.shapeColor = color(0,0,0,0);
    
lgBorder3 = createSprite(308,6,617,14);
lgBorder3.shapeColor = color(0,0,0,0);
    
lgBorder4 = createSprite(308,607,617,14);
lgBorder4.shapeColor = color(0,0,0,0);
    
chevBorder = createSprite(5,35, 5,65);
chevBorder.shapeColor = color(0,0,0,0);
    
yBorder1 = createSprite(186,40,11,60);
yBorder1.shapeColor = color(0,0,0,0);
    
yBorder2 = createSprite(306,155,11,60);
yBorder2.shapeColor = color(0,0,0,0);
    
yBorder3 = createSprite(426,338,11,60);
yBorder3.shapeColor = color(0,0,0,0);
    
yBorder4 = createSprite(247,465,11,60);
yBorder4.shapeColor = color(0,0,0,0);
    
yBorder5 = createSprite(307,570,11,60);
yBorder5.shapeColor = color(0,0,0,0);
    
xBorder1 = createSprite(40,247,60,11);
xBorder1.shapeColor = color(0,0,0,0);
    
xBorder2 = createSprite(519,307,60,11);
xBorder2.shapeColor = color(0,0,0,0);

xBorder3 = createSprite(400,427,60,11);
xBorder3.shapeColor = color(0,0,0,0);
    
recBorder1 = createSprite(127,100,127,63);
recBorder1.shapeColor = color(0,0,0,0);
    
recBorder2 = createSprite(396,98,300,66);
recBorder2.shapeColor = color(0,0,0,0);
    
recBorder3 = createSprite(215,398,305,70);
recBorder3.shapeColor = color(0,0,0,0);
    
recBorder4 = createSprite(490,398,120,70);
recBorder4.shapeColor = color(0,0,0,0);
    
recBorder5 = createSprite(160,516,182,70);
recBorder5.shapeColor = color(0,0,0,0);
    
recBorder6 = createSprite(428,516,248,63);
recBorder6.shapeColor = color(0,0,0,0);
    
recBorder7 = createSprite(573,247,63,131);
recBorder7.shapeColor = color(0,0,0,0);
    
bigrecBorder = createSprite(188,247,248,131);
bigrecBorder.shapeColor = color(0,0,0,0);
    
sqrBorder = createSprite(427,247,130,131);
sqrBorder.shapeColor = color(0,0,0,0);
    
}

function draw() {
  background(bgImg);
    
  if(keyDown(LEFT_ARROW))
  {
      ship.rotation -= 4;
  }
  if(keyDown(RIGHT_ARROW))
  {
      ship.rotation += 4;
  }
  if(keyDown(UP_ARROW))
    {
    ship.addSpeed(.2, ship.rotation);
    }
    
    if(keyDown(DOWN_ARROW)) {
        ship.addSpeed(-0.2,ship.rotation);
    }

   
    ship.collide(lgBorder1);
    ship.collide(lgBorder2);
    ship.collide(lgBorder3);
    ship.collide(lgBorder4);
    ship.collide(yBorder1);
    ship.collide(yBorder2);
    ship.collide(yBorder3);
    ship.collide(yBorder4);
    ship.collide(yBorder5);
    ship.collide(xBorder1);
    ship.collide(xBorder2);
    ship.collide(xBorder3);
    ship.collide(recBorder1);
    ship.collide(recBorder2);
    ship.collide(recBorder3);
    ship.collide(recBorder4);
    ship.collide(recBorder5);
    ship.collide(recBorder6);
    ship.collide(recBorder7);
    ship.collide(bigrecBorder);
    ship.collide(sqrBorder);
   
    ship.collide(chevs);
    
    chevs.bounce(lgBorder1);
    chevs.bounce(lgBorder2);
    chevs.bounce(lgBorder3);
    chevs.bounce(lgBorder4);
    chevs.bounce(chevBorder);
    chevs.collide(ship);
    
if (ship.overlap(chevs)) {
    interlevels.removeChild(playground);
    interlevels.removeChild(level);
    interlevels.removeChild(title);
    interlevels.removeChild(diffButtons);
    death = document.createElement('img');
    death.setAttribute("src", "animCranes.gif");
    document.getElementById("interlevels").appendChild(death);
    setTimeout(reloadTiming, 3000);
    
}
if (ship.overlap(chevBorder)) {
    interlevels.removeChild(playground);
    interlevels.removeChild(level);
    interlevels.removeChild(title);
    interlevels.removeChild(diffButtons);
    win = document.createElement("img");
    win.setAttribute("src", "gifchevreuil.gif");
    document.getElementById('interlevels').appendChild(win);
    
    var newlevel = (function() {window.location.href = "level4/index.html";})
                    
    setTimeout(newlevel, 3000);
}

  drawSprites();
  
    return false;
}

function reloadTiming(){
    location.reload();
}

function easy() {
    chevs[0].setSpeed(0.6, (direction + random(8,352)));
    chevs[1].setSpeed(0.6, (direction + random(8,352)));
    chevs[2].setSpeed(0.6, (direction + random(8,352)));
    ship.maxSpeed = 1.1;
}

function medium() {
    chevs[0].setSpeed(1.3, (direction + random(8,352)));
    chevs[1].setSpeed(1.3, (direction + random(8,352)));
    chevs[2].setSpeed(1.3, (direction + random(8,352)));
    ship.maxSpeed = 1.2;
}

function hard() {
    chevs[0].setSpeed(2.1, (direction + random(8,352)));
    chevs[1].setSpeed(2.1, (direction + random(8,352)));
    chevs[2].setSpeed(2.1, (direction + random(8,352)));
    ship.maxSpeed = 1.6;
}