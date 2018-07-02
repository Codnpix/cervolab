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
var lgBorder6;
var chevBorder;
var cavBorder;
var recBorder1;
var recBorder2;
var recBorder3;
var recBorder4;
var recBorder5;
var recBorder6;
var recBorder7;
var recBorder8;
var recBorder9;
var recBorder10;
var recBorder11;
var recBorder12;
var ypassBorder1;
var ypassBorder2;
var ypassBorder3;
var ypassBorder4;
var ypassBorder5;
var ypassBorder6;
var xpassBorder1;
var xpassBorder2;
var xpassBorder3;


var direction = -90;

var death;

var win;

var song;

function preload() {
  shipImage = loadImage('spritecar.png');
    bgImg = loadImage("laby5.png");
    chevImage = loadImage("spritechev.png");
    death = loadImage("animCranes.gif");
}

function setup() {
var canvas = createCanvas(614, 615);
canvas.parent('playground');

    song = document.getElementById("soundtrack");
    song.play();

    chevs = new Group();

ship = createSprite(157, 30);
    ship.rotation = 90 ;
ship.maxSpeed = 1.2;
ship.friction = .03;
ship.addImage("normal", shipImage);
    
for(var i = 0; i<5; i++) {
  var newChev = createSprite(random(0,width), random(0,height));
    newChev.addImage("normal", chevImage);
    direction = direction + random(8,352) ;
    newChev.setSpeed(1.3, direction);
    newChev.mass = (0);
    chevs.add(newChev);
  }

lgBorder1 = createSprite(5,307,14,615);
lgBorder1.shapeColor = color(0,0,0,0);
    
lgBorder2 = createSprite(610,270,12,567);
lgBorder2.shapeColor = color(0,0,0,0);
    
lgBorder3 = createSprite(308,607,617,14);
lgBorder3.shapeColor = color(0,0,0,0);
    
lgBorder4 = createSprite(308,5,617,10);
lgBorder4.shapeColor = color(0,0,0,0);
    
chevBorder = createSprite(610, 590, 5,70);
chevBorder.shapeColor = color(0,0,0,0);
    
cavBorder = createSprite(280,360,65,5);
cavBorder.shapeColor = color(0,0,0,0);
    
recBorder1 = createSprite(97,187,65,127);
recBorder1.shapeColor = color(0,0,0,0);
    
recBorder2 = createSprite(277,130,65,127);
recBorder2.shapeColor = color(0,0,0,0);
    
recBorder3 = createSprite(458,187,65,127);
recBorder3.shapeColor = color(0,0,0,0);
    
recBorder4 = createSprite(455,370,65,127);
recBorder4.shapeColor = color(0,0,0,0);
    
recBorder5 = createSprite(212,157,60,71);
recBorder5.shapeColor = color(0,0,0,0);
    
recBorder6 = createSprite(394,157,60,71);
recBorder6.shapeColor = color(0,0,0,0);
    
recBorder7 = createSprite(395,397,60,71);
recBorder7.shapeColor = color(0,0,0,0);
    
recBorder8 = createSprite(455,517,177,71);
recBorder8.shapeColor = color(0,0,0,0);
    
recBorder9 = createSprite(277,587,73,71);
recBorder9.shapeColor = color(0,0,0,0);
    
recBorder10 = createSprite(575,270,65,567);
recBorder10.shapeColor = color(0,0,0,0);
    
recBorder11 = createSprite(68,39,127,65);
recBorder11.shapeColor = color(0,0,0,0);

recBorder12 = createSprite(397,39,420,65);
recBorder12.shapeColor = color(0,0,0,0);
    
ypassBorder1 = createSprite(65,430,9,250);
ypassBorder1.shapeColor = color(0,0,0,0);
    
ypassBorder2 = createSprite(130,391,9,181);
ypassBorder2.shapeColor = color(0,0,0,0);
    
ypassBorder3 = createSprite(247,425,7,117);
ypassBorder3.shapeColor = color(0,0,0,0);
    
ypassBorder4 = createSprite(311,460,7,181);
ypassBorder4.shapeColor = color(0,0,0,0);
    
ypassBorder5 = createSprite(207,338,50,190);
ypassBorder5.shapeColor = color(0,0,0,0);
    
ypassBorder6 = createSprite(345,338,50,190);
ypassBorder6.shapeColor = color(0,0,0,0);
    
xpassBorder1 = createSprite(150,550,171,8);
xpassBorder1.shapeColor = color(0,0,0,0);
    
xpassBorder2 = createSprite(185,486,121,8);
xpassBorder2.shapeColor = color(0,0,0,0);
    
xpassBorder3 = createSprite(280,267,180,50);
xpassBorder3.shapeColor = color(0,0,0,0);

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
    ship.collide(recBorder1);
    ship.collide(recBorder2);
    ship.collide(recBorder3);
    ship.collide(recBorder4);
    ship.collide(recBorder5);
    ship.collide(recBorder6);
    ship.collide(recBorder7);
    ship.collide(recBorder8);
    ship.collide(recBorder9);
    ship.collide(recBorder10);
    ship.collide(recBorder11);
    ship.collide(recBorder12);
    ship.collide(ypassBorder1);
    ship.collide(ypassBorder2);
    ship.collide(ypassBorder3);
    ship.collide(ypassBorder4);
    ship.collide(ypassBorder5);
    ship.collide(ypassBorder6);
    ship.collide(xpassBorder1);
    ship.collide(xpassBorder2);
    ship.collide(xpassBorder3);
   
    
    chevs.bounce(lgBorder1);
    chevs.bounce(lgBorder2);
    chevs.bounce(lgBorder3);
    chevs.bounce(lgBorder4);
    chevs.bounce(chevBorder);
    
    
if (ship.overlap(chevs)) {
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
    
    var newlevel = (function() {window.location.href = "../../../../index.html";})
                    
    setTimeout(newlevel, 3000);
}
    
if (ship.overlap(cavBorder)) {
    interlevels.removeChild(playground);
    interlevels.removeChild(level);
    interlevels.removeChild(title);
    interlevels.removeChild(instructions);
    interlevels.removeChild(diffButtons);
    var secret = document.createElement("img");
    secret.setAttribute("src", "gifsecretlevel.gif");
    document.getElementById('interlevels').appendChild(secret);
    
    var secretlevel = (function() {window.location.href = "secretlevel/index.html"; })
    
    setTimeout(secretlevel,3000);
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
    chevs[3].setSpeed(0.6, (direction + random(8,352)));
    chevs[4].setSpeed(0.6, (direction + random(8,352)));
    ship.maxSpeed = 1.1;
}

function medium() {
    chevs[0].setSpeed(1.3, (direction + random(8,352)));
    chevs[1].setSpeed(1.3, (direction + random(8,352)));
    chevs[2].setSpeed(1.3, (direction + random(8,352)));
    chevs[3].setSpeed(1.3, (direction + random(8,352)));
    chevs[4].setSpeed(1.3, (direction + random(8,352)));
    ship.maxSpeed = 1.2;
}

function hard() {
    chevs[0].setSpeed(2.1, (direction + random(8,352)));
    chevs[1].setSpeed(2.1, (direction + random(8,352)));
    chevs[2].setSpeed(2.1, (direction + random(8,352)));
    chevs[3].setSpeed(2.1, (direction + random(8,352)));
    chevs[4].setSpeed(2.1, (direction + random(8,352)));
    ship.maxSpeed = 1.6;
}