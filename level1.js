var ship;
var chev;
var chevImage;
var shipImage;
var bgImg;
var sqrBorder;
var sqrBorder2;
var rectBorder1;
var rectBorder2;
var rectBorder3;
var rectBorder4;
var ltsqrBorder1;
var ltsqrBorder2;
var ltsqrBorder3;
var ltsqrBorder4;
var lgBorder1;
var lgBorder2;
var lgBorder3;
var lgBorder4;
var yBorder1;
var yBorder2;
var yBorder3;
var yBorder4;
var yBorder5;
var yBorder6;
var yBorder7;
var xBorder1;
var xBorder2;
var xBorder3;
var xBorder4;
var xBorder5;
var chevBorder;

var direction = -90;

var death;

var win;
var song;

function preload() {
    shipImage = loadImage('spritecar.png');
    bgImg = loadImage("laby.png");
    chevImage = loadImage("spritechev.png");
    death = loadImage("animCranes.gif");
}

function setup() {
var canvas = createCanvas(614, 615);
canvas.parent("playground");
    
song = document.getElementById("soundtrack");
song.play();
    
ship = createSprite(39, 580);
ship.rotation = -90 ;
ship.maxSpeed = 1.2;
ship.friction = .03;
ship.addImage("normal", shipImage);
    
chev = createSprite(random(0, width),random(0,height));
    chev.addImage("normal", chevImage);
    direction = direction + random(0,360) ;
    chev.setSpeed(1.3, direction);
    chev.mass = (0);
    
sqrBorder = createSprite(488, 486, 127, 127);
sqrBorder.shapeColor = color(0, 0, 0, 0);
    
sqrBorder2 = createSprite(127, 540, 127, 115);
sqrBorder2.shapeColor = color(0,0,0,0); 
    
rectBorder1 = createSprite(96, 369, 68, 127);
rectBorder1.shapeColor = color(0,0,0,0);
    
rectBorder2 = createSprite(512, 337, 180, 68);
rectBorder2.shapeColor = color(0,0,0,0);

rectBorder3 = createSprite(515, 127, 68, 250);
rectBorder3.shapeColor = color(0,0,0,0);
    
rectBorder4 = createSprite(366, 96, 127, 68);
rectBorder4.shapeColor = color(0,0,0,0);
    
ltsqrBorder1 = createSprite(100,100,68,68);
ltsqrBorder1.shapeColor = color(0,0,0,0);
    
ltsqrBorder2 = createSprite(218,38,68,68);
ltsqrBorder2.shapeColor = color(0,0,0,0);
    
ltsqrBorder3 = createSprite(218,218,68,68);
ltsqrBorder3.shapeColor = color(0,0,0,0);
    
ltsqrBorder4 = createSprite(338,218,68,68);
ltsqrBorder4.shapeColor = color(0,0,0,0);
    
lgBorder1 = createSprite(5,307,14,615);
lgBorder1.shapeColor = color(0,0,0,0);
    
lgBorder2 = createSprite(607,335,14,547);
lgBorder2.shapeColor = color(0,0,0,0);
    
lgBorder3 = createSprite(308,6,617,14);
lgBorder3.shapeColor = color(0,0,0,0);
    
lgBorder4 = createSprite(308,607,617,14);
lgBorder4.shapeColor = color(0,0,0,0);

yBorder1 = createSprite(68, 127, 14, 127);
yBorder1.shapeColor = color(0,0,0,0);
    
yBorder2 = createSprite(128, 218, 14, 70);
yBorder2.shapeColor = color(0,0,0,0);
    
yBorder3 = createSprite(188, 450, 14, 300);
yBorder3.shapeColor = color(0,0,0,0);
    
yBorder4 = createSprite(248, 429, 14, 251);
yBorder4.shapeColor = color(0,0,0,0);
    
yBorder5 = createSprite(308, 398, 14, 190);
yBorder5.shapeColor = color(0,0,0,0);
    
yBorder6 = createSprite(368, 372, 14, 230);
yBorder6.shapeColor = color(0,0,0,0);
    
yBorder7 = createSprite(426, 310, 14, 487);
yBorder7.shapeColor = color(0,0,0,0);
    
xBorder1 = createSprite(112,247,200,14)
xBorder1.shapeColor = color(0,0,0,0);
    
xBorder2 = createSprite(150,68,180,12)
xBorder2.shapeColor = color(0,0,0,0);
    
xBorder3 = createSprite(250,127,137,14)
xBorder3.shapeColor = color(0,0,0,0);
    
xBorder4 = createSprite(336,487,68,14)
xBorder4.shapeColor = color(0,0,0,0);
    
xBorder5 = createSprite(336,547,180,14)
xBorder5.shapeColor = color(0,0,0,0);
    
chevBorder = createSprite(610, 40, 5,70);
    chevBorder.shapeColor = color(0,0,0,0);
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
    
    if(keyDown(DOWN_ARROW)) 
    {
        ship.addSpeed(-0.2,ship.rotation);
    }
    
    

    ship.collide(sqrBorder);
    ship.collide(sqrBorder2);
    ship.collide(rectBorder1);
    ship.collide(rectBorder2);
    ship.collide(rectBorder3);
    ship.collide(rectBorder4);
    ship.collide(ltsqrBorder1);
    ship.collide(ltsqrBorder2);
    ship.collide(ltsqrBorder3);
    ship.collide(ltsqrBorder4);
    ship.collide(lgBorder1);
    ship.collide(lgBorder2);
    ship.collide(lgBorder3);
    ship.collide(lgBorder4);
    ship.collide(yBorder1);
    ship.collide(yBorder2);
    ship.collide(yBorder3);
    ship.collide(yBorder4);
    ship.collide(yBorder5);
    ship.collide(yBorder6);
    ship.collide(yBorder7);
    ship.collide(xBorder1);
    ship.collide(xBorder2);
    ship.collide(xBorder3);
    ship.collide(xBorder4);
    ship.collide(xBorder5);
    
    chev.bounce(lgBorder1);
    chev.bounce(lgBorder2);
    chev.bounce(lgBorder3);
    chev.bounce(lgBorder4);
    chev.bounce(chevBorder);
    
if (ship.overlap(chev)) {
    interlevels.removeChild(playground);
    interlevels.removeChild(level);
    interlevels.removeChild(title);
    interlevels.removeChild(instructions);
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
    interlevels.removeChild(instructions);
    interlevels.removeChild(diffButtons);
    win = document.createElement("img");
    win.setAttribute("src", "gifchevreuil.gif");
    document.getElementById('interlevels').appendChild(win);
    
    var newlevel = (function() {window.location.href = "level2/index.html";})
                    
    setTimeout(newlevel, 3000);
                    
}

  drawSprites();
  
    return false;
}

function reloadTiming() {
    location.reload();
}

function easy() {
    chev.setSpeed(0.6, (direction + random(0,360)));
    ship.maxSpeed = 1.1;
}

function medium() {
    chev.setSpeed(1.3, (direction + random(0,360)));
    ship.maxSpeed = 1.2;
}

function hard() {
    chev.setSpeed(2.2, (direction + random(0,360)));
    ship.maxSpeed = 1.6;
}