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
var lgBorder5;
var chevBorder;
var sqrBorder1;
var sqrBorder2;
var ltsqrBorder1;
var ltsqrBorder2;
var ltsqrBorder3;
var ltsqrBorder4;
var recBorder1;
var recBorder2;
var recBorder3;
var recBorder4;
var recBorder5;
var yBorder1;
var yBorder2;
var yBorder3;
var yBorder4;
var yBorder5;
var yBorder6;
var xBorder1;
var xBorder2;
var xBorder3;
var xBorder4;
var xBorder5;
var xBorder6;
var xBorder7;
var xBorder8;
var xBorder9;
var xBorder10;

var song;

var direction = -90;

var death;

var win;

function preload() {
  shipImage = loadImage('spritecar.png');
    bgImg = loadImage("laby2.png");
    chevImage = loadImage("spritechev.png");
    death = loadImage("animCranes.gif");

}

function setup() {
var canvas = createCanvas(614, 615);
canvas.parent("playground");

    song = document.getElementById("soundtrack");
    song.play();
    
    chevs = new Group();

ship = createSprite(50, 580);
ship.rotation = 0 ;
ship.maxSpeed = 1.2;
ship.friction = .03;
ship.addImage("normal", shipImage);
    
for(var i = 0; i<2; i++) {
  var newChev = createSprite(random(0,width), random(0,height));
    newChev.addImage("normal", chevImage);
    direction = direction + random(8,352) ;
    newChev.setSpeed(1.3, direction);
    newChev.mass = (0);
    chevs.add(newChev);
  }


lgBorder1 = createSprite(5,307,14,615);
lgBorder1.shapeColor = color(0,0,0,0);
    
lgBorder2 = createSprite(607,308,14,615);
lgBorder2.shapeColor = color(0,0,0,0);
    
lgBorder3 = createSprite(180,6,380,14);
lgBorder3.shapeColor = color(0,0,0,0);
    
lgBorder4 = createSprite(308,607,617,14);
lgBorder4.shapeColor = color(0,0,0,0);
    
lgBorder5 = createSprite(522,6,180,14);
lgBorder5.shapeColor = color(0,0,0,0);
    
chevBorder = createSprite(400, 5, 70,5);
chevBorder.shapeColor = color(0,0,0,0);
    
sqrBorder1 = createSprite(308,308,130,130);
sqrBorder1.shapeColor = color(0,0,0,0);
    
sqrBorder2 = createSprite(485,70,130,125);
sqrBorder2.shapeColor = color(0,0,0,0);
    
ltsqrBorder1 = createSprite(159,277,68,68);
ltsqrBorder1.shapeColor = color(0,0,0,0);
    
ltsqrBorder2 = createSprite(38,398,68,68);
ltsqrBorder2.shapeColor = color(0,0,0,0);
    
ltsqrBorder3 = createSprite(218,456,68,68);
ltsqrBorder3.shapeColor = color(0,0,0,0);
    
ltsqrBorder4 = createSprite(405,217,56,68);
ltsqrBorder4.shapeColor = color(0,0,0,0);
    
recBorder1 = createSprite(308,40,130,65);
recBorder1.shapeColor = color (0,0,0,0);

recBorder2 = createSprite(128,157,128,70);
recBorder2.shapeColor = color (0,0,0,0);    

recBorder3 = createSprite(369,577,130,65);
recBorder3.shapeColor = color (0,0,0,0);
    
recBorder4 = createSprite(517,187,65,130);
recBorder4.shapeColor = color (0,0,0,0);
    
recBorder5 = createSprite(517,428,65,251);
recBorder5.shapeColor = color (0,0,0,0);
    
xBorder1 = createSprite(150,67,170,13);
xBorder1.shapeColor = color(0,0,0,0);
    
xBorder2 = createSprite(308,128,230,12);
xBorder2.shapeColor = color(0,0,0,0);

xBorder3 = createSprite(310,188,135,13);
xBorder3.shapeColor = color(0,0,0,0);
    
xBorder4 = createSprite(130,308,131,13);
xBorder4.shapeColor = color(0,0,0,0);
    
xBorder5 = createSprite(455,308,65,13);
xBorder5.shapeColor = color(0,0,0,0);
    
xBorder6 = createSprite(278,368,303,13);
xBorder6.shapeColor = color(0,0,0,0);
    
xBorder7 = createSprite(283,428,170,13);
xBorder7.shapeColor = color(0,0,0,0);
    
xBorder8 = createSprite(283,488,170,13);
xBorder8.shapeColor = color(0,0,0,0);
    
xBorder9 = createSprite(455,488,65,13);
xBorder9.shapeColor = color(0,0,0,0);
    
xBorder10 = createSprite(187,548,125,13);
xBorder10.shapeColor = color(0,0,0,0);
    
yBorder1 = createSprite(68,219,13,60);
yBorder1.shapeColor = color(0,0,0,0);
    
yBorder2 = createSprite(426,269,11,60);
yBorder2.shapeColor = color(0,0,0,0);
    
yBorder3 = createSprite(426,399,11,60);
yBorder3.shapeColor = color(0,0,0,0);
    
yBorder4 = createSprite(68,430,11,240);
yBorder4.shapeColor = color(0,0,0,0);
    
yBorder5 = createSprite(128,430,11,240);
yBorder5.shapeColor = color(0,0,0,0);
    
yBorder6 = createSprite(308,520,11,60);
yBorder6.shapeColor = color(0,0,0,0);
    

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
    ship.collide(sqrBorder1);
    ship.collide(sqrBorder2);
    ship.collide(ltsqrBorder1);
    ship.collide(ltsqrBorder2);
    ship.collide(ltsqrBorder3);
    ship.collide(ltsqrBorder4);
    ship.collide(recBorder1);
    ship.collide(recBorder2);
    ship.collide(recBorder3);
    ship.collide(recBorder4);
    ship.collide(recBorder5);
    ship.collide(yBorder1);
    ship.collide(yBorder2);
    ship.collide(yBorder3);
    ship.collide(yBorder4);
    ship.collide(yBorder5);
    ship.collide(yBorder6);
    ship.collide(xBorder1);
    ship.collide(xBorder2);
    ship.collide(xBorder3);
    ship.collide(xBorder4);
    ship.collide(xBorder5);
    ship.collide(xBorder6);
    ship.collide(xBorder7);
    ship.collide(xBorder8);
    ship.collide(xBorder9);
    ship.collide(xBorder10);
    
    chevs.bounce(lgBorder1);
    chevs.bounce(lgBorder2);
    chevs.bounce(lgBorder3);
    chevs.bounce(lgBorder4);
    chevs.bounce(lgBorder5);
    chevs.bounce(chevBorder);
    
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
    
    var newlevel = (function() {window.location.href = "level3/index.html";})
                    
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
    ship.maxSpeed = 1.1;
}

function medium() {
    chevs[0].setSpeed(1.3, (direction + random(8,352)));
    chevs[1].setSpeed(1.3, (direction + random(8,352)));
    ship.maxSpeed = 1.2;
}

function hard() {
    chevs[0].setSpeed(2.2, (direction + random(8,352)));
    chevs[1].setSpeed(2.2, (direction + random(8,352)));
    ship.maxSpeed = 1.6;
}