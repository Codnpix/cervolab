var ship;
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
var xBorder1;
var xBorder2;
var xBorder3;
var xBorder4;
var xBorder5;
var yBorder1;
var yBorder2;
var yBorder3;
var yBorder4;
var yBorder5;
var yBorder6;
var yBorder7;
var recBorder1;
var recBorder2;
var recBorder3;
var recBorder4;
var recBorder5;
var recBorder6;
var sqrBorder;

var direction = -90;

var death;

var win;

var song;

function preload() {
  shipImage = loadImage('spritecar.png');
    bgImg = loadImage("laby4.png");
    chevImage = loadImage("spritechev.png");
    death = loadImage("animCranes.gif");
}

function setup() {
createCanvas(614, 615);

    song = document.getElementById("soundtrack");
    song.play();

    chevs = new Group();

ship = createSprite(335, 40);
    ship.rotation = 90 ;
ship.maxSpeed = 1;
ship.friction = .01;
ship.addImage("normal", shipImage);
    
for(var i = 0; i<4; i++) {
  var newChev = createSprite(random(0,width), random(0,height));
    newChev.addImage("normal", chevImage);
    direction = direction + random (8,352) ;
    newChev.setSpeed(1.3, direction);
    newChev.mass = (0);
    chevs.add(newChev);
  }

lgBorder1 = createSprite(5,307,14,615);
lgBorder1.shapeColor = color(0,0,0,0);
    
lgBorder2 = createSprite(607,308,14,617);
lgBorder2.shapeColor = color(0,0,0,0);
    
lgBorder3 = createSprite(308,6,617,14);
lgBorder3.shapeColor = color(0,0,0,0);
    
lgBorder4 = createSprite(100,607,180,14);
lgBorder4.shapeColor = color(0,0,0,0);
    
lgBorder5 = createSprite(426,607,366,14);
lgBorder5.shapeColor = color(0,0,0,0);
    
chevBorder = createSprite(218,612,60,5);
chevBorder.shapeColor = color(0,0,0,0);
    
xBorder1 = createSprite(40,247,60,10);
xBorder1.shapeColor = color(0,0,0,0);
    
xBorder2 = createSprite(512,187,60,10);
xBorder2.shapeColor = color(0,0,0,0);
    
xBorder3 = createSprite(572,367,60,10);
xBorder3.shapeColor = color(0,0,0,0);
    
xBorder4 = createSprite(127,548,120,10);
xBorder4.shapeColor = color(0,0,0,0);
    
xBorder5 = createSprite(400,548,286,10);
xBorder5.shapeColor = color(0,0,0,0);
    
yBorder1 = createSprite(67,155,10,183);
yBorder1.shapeColor = color(0,0,0,0);
    
yBorder2 = createSprite(547,213,10,300);
yBorder2.shapeColor = color(0,0,0,0);
    
yBorder3 = createSprite(67,425,10,245);
yBorder3.shapeColor = color(0,0,0,0);
    
yBorder4 = createSprite(248,336,9,65);
yBorder4.shapeColor = color(0,0,0,0);
    
yBorder5 = createSprite(188,548,10,127);
yBorder5.shapeColor = color(0,0,0,0);
    
yBorder6 = createSprite(248,578,10,60);
yBorder6.shapeColor = color(0,0,0,0);
    
yBorder7 = createSprite(547,488,9,127);
yBorder7.shapeColor = color(0,0,0,0);

recBorder1 = createSprite(218,97,188,67);
recBorder1.shapeColor = color(0,0,0,0);
    
recBorder2 = createSprite(246,218,243,67);
recBorder2.shapeColor = color(0,0,0,0);
    
recBorder3 = createSprite(308,458,362,67);
recBorder3.shapeColor = color(0,0,0,0);
    
recBorder4 = createSprite(338,308,67,127);
recBorder4.shapeColor = color(0,0,0,0);
    
recBorder5 = createSprite(457,308,67,127);
recBorder5.shapeColor = color(0,0,0,0);
    
recBorder6 = createSprite(157,368,67,127);
recBorder6.shapeColor = color(0,0,0,0);
    
sqrBorder = createSprite(427,127,127,127);
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
    ship.collide(lgBorder5);
    ship.collide(xBorder1);
    ship.collide(xBorder2);
    ship.collide(xBorder3);
    ship.collide(xBorder4);
    ship.collide(xBorder5);
    ship.collide(yBorder1);
    ship.collide(yBorder2);
    ship.collide(yBorder3);
    ship.collide(yBorder4);
    ship.collide(yBorder5);
    ship.collide(yBorder6);
    ship.collide(yBorder7);
    ship.collide(recBorder1);
    ship.collide(recBorder2);
    ship.collide(recBorder3);
    ship.collide(recBorder4);
    ship.collide(recBorder5);
    ship.collide(recBorder6);
    ship.collide(sqrBorder);
   
    
    chevs.bounce(lgBorder1);
    chevs.bounce(lgBorder2);
    chevs.bounce(lgBorder3);
    chevs.bounce(lgBorder4);
    chevs.bounce(lgBorder5);
    chevs.bounce(chevBorder);
    
if (ship.overlap(chevs)) {
   remove();
    death = document.createElement('img');
    death.setAttribute("src", "animCranes.gif");
    document.getElementById("playground").appendChild(death);
    setTimeout(reloadTiming, 3000);
    
}
if (ship.overlap(chevBorder)) {
    remove();
    win = document.createElement("img");
    win.setAttribute("src", "gifchevreuil.gif");
    document.getElementById('playground').appendChild(win);
    
    var newlevel = (function() {window.location.href = "level5/index.html";})
                    
    setTimeout(newlevel, 3000);
}

  drawSprites();
  
    return false;
}

function reloadTiming(){
    location.reload();
}
