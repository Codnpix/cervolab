var ship;
var chevImage;
var shipImage;
var bgImg;
var chevs;
var particule;
var dirParticule = 0;
var chevgreenImage;

var lgBorder1;
var lgBorder2;
var lgBorder3;
var lgBorder4;
var exitBorder;
var exitGate;
var closedGateImage;
var openGateImage;
var sqrBorder1;
var sqrBorder2;
var sqrBorder3;
var sqrBorder4;
var sqrBorder5;
var sqrBorder6;
var sqrBorder7;
var sqrBorder8;
var sqrBorder9;
var sqrBorder10;
var sqrBorder11;
var sqrBorder12;
var recBorder1;
var recBorder2;
var recBorder3;
var recBorder4;
var recBorder5;
var recBorder6;
var recBorder7;
var recBorder8;
var recBorder9;
var yBorder1;
var yBorder2;
var yBorder3;
var yBorder4;
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
  shipImage = loadImage('spritemask.png');
    bgImg = loadImage("labysecret.png");
    chevImage = loadImage("spritechev.png");
    death = loadImage("animCranes.gif");
    particuleImage = loadImage('particule.png');
    chevgreenImage = loadImage("spritechevgreen.png");
    closedGateImage = loadImage("closedGate.png");
    openGateImage = loadImage("openGate.png");
    
}

function setup() {
createCanvas(614, 615);

    song = document.getElementById("soundtrack");
    song.play();

    chevs = new Group();

ship = createSprite(157, 40);
ship.rotation = 90 ;
ship.maxSpeed = 1;
ship.friction = .06;
ship.addImage("normal", shipImage);
    
for(var i = 0; i<7; i++) {
  var newChev = createSprite(random(0,width), random(0,height));
    newChev.addImage("green", chevgreenImage);
    newChev.addImage("normal", chevImage);
    direction = direction + random (8,352) ;
    newChev.setSpeed(1.2, direction);
    newChev.mass = (.001);
    newChev.setCollider = ("circle",0,0,30);
    chevs.add(newChev);
}


particule = createSprite(random(0,width), random(0,height));
particule.addImage("normal", particuleImage);
dirParticule = dirParticule + random (0,360);
particule.setSpeed(2,dirParticule);
particule.mass = (.000001);
particule.friction = .001
particule.setCollider("circle",0,0,3);
    
exitGate = createSprite(579,480);
exitGate.addImage("closed", closedGateImage);
exitGate.addImage("open", openGateImage);

lgBorder1 = createSprite(5,307,14,615);
lgBorder1.shapeColor = color(0,0,0,0);
lgBorder1.immovable = true;
    
lgBorder2 = createSprite(611,308,14,617);
lgBorder2.shapeColor = color(0,0,0,0);
lgBorder2.immovable = true;

lgBorder3 = createSprite(308,5,615,14);
lgBorder3.shapeColor = color(0,0,0,0);
lgBorder3.immovable = true;
    
lgBorder4 = createSprite(308,607,617,14);
lgBorder4.shapeColor = color(0,0,0,0);
lgBorder4.immovable = true;
    
sqrBorder1 = createSprite(98,97,64,64);
sqrBorder1.shapeColor = color(0,0,0,0);
sqrBorder1.immovable = true;
    
sqrBorder2 = createSprite(40,218,64,64);
sqrBorder2.shapeColor = color(0,0,0,0);
sqrBorder2.immovable = true;
    
sqrBorder3 = createSprite(155,218,64,64);
sqrBorder3.shapeColor = color(0,0,0,0);
sqrBorder3.immovable = true;
    
sqrBorder4 = createSprite(518,97,64,64);
sqrBorder4.shapeColor = color(0,0,0,0);
sqrBorder4.immovable = true;
    
sqrBorder5 = createSprite(398,40,64,64);
sqrBorder5.shapeColor = color(0,0,0,0);
sqrBorder5.immovable = true;
    
sqrBorder6 = createSprite(398,156,64,64);
sqrBorder6.shapeColor = color(0,0,0,0);
sqrBorder6.immovable = true;
    
sqrBorder7 = createSprite(98,516,64,64);
sqrBorder7.shapeColor = color(0,0,0,0);
sqrBorder7.immovable = true;
    
sqrBorder8 = createSprite(218,460,64,64);
sqrBorder8.shapeColor = color(0,0,0,0);
sqrBorder8.immovable = true;
    
sqrBorder9 = createSprite(458,398,64,64);
sqrBorder9.shapeColor = color(0,0,0,0);
sqrBorder9.immovable = true;
    
sqrBorder10 = createSprite(516,518,71,64);
sqrBorder10.shapeColor = color(0,0,0,0);
sqrBorder10.immovable = true;
    
sqrBorder11 = createSprite(308,308,127,127);
sqrBorder11.shapeColor = color(0,0,0,0);
sqrBorder11.immovable = true;
    
sqrBorder12 = createSprite(218,577,64,64);
sqrBorder12.shapeColor = color(0,0,0,0);
sqrBorder12.immovable = true;
    
recBorder1 = createSprite(248,40,127,64);
recBorder1.shapeColor = color(0,0,0,0);
recBorder1.immovable = true;
    
recBorder2 = createSprite(248,158,127,64);
recBorder2.shapeColor = color(0,0,0,0);
recBorder2.immovable = true;
    
recBorder3 = createSprite(40,367,64,127);
recBorder3.shapeColor = color(0,0,0,0);
recBorder3.immovable = true;
    
recBorder4 = createSprite(158,367,64,127);
recBorder4.shapeColor = color(0,0,0,0);
recBorder4.immovable = true;
    
recBorder5 = createSprite(457,249,64,127);
recBorder5.shapeColor = color(0,0,0,0);
recBorder5.immovable = true;
    
recBorder6 = createSprite(577,249,64,127);
recBorder6.shapeColor = color(0,0,0,0);
recBorder6.immovable = true;
    
recBorder7 = createSprite(577,398,64,64);
recBorder7.shapeColor = color(0,0,0,0);
recBorder7.immovable = true;
    
recBorder8 = createSprite(368,457,127,64);
recBorder8.shapeColor = color(0,0,0,0);
recBorder8.immovable = true;
    
recBorder9 = createSprite(368,576,127,64);
recBorder9.shapeColor = color(0,0,0,0);
recBorder9.immovable = true;
    
yBorder1 = createSprite(308,100,9,64);
yBorder1.shapeColor = color(0,0,0,0);
yBorder1.immovable = true;
    
yBorder2 = createSprite(68,160,9,64);
yBorder2.shapeColor = color(0,0,0,0);
yBorder2.immovable = true;
    
yBorder3 = createSprite(308,512,9,64);
yBorder3.shapeColor = color(0,0,0,0);
yBorder3.immovable = true;

yBorder4 = createSprite(547,460,9,64);
yBorder4.shapeColor = color(0,0,0,0);
yBorder4.immovable = true;
    
xBorder1 = createSprite(456,67,64,9);
xBorder1.shapeColor = color(0,0,0,0);
xBorder1.immovable = true;
    
xBorder2 = createSprite(514,308,64,9);
xBorder2.shapeColor = color(0,0,0,0);
xBorder2.immovable = true;
    
xBorder3 = createSprite(400,367,64,9);
xBorder3.shapeColor = color(0,0,0,0);
xBorder3.immovable = true;
    
xBorder4 = createSprite(100,308,64,9);
xBorder4.shapeColor = color(0,0,0,0);
xBorder4.immovable = true;
    
xBorder5 = createSprite(155,547,64,9);
xBorder5.shapeColor = color(0,0,0,0);
xBorder5.immovable = true;
    
exitBorder = createSprite(579,450,31,112);
exitBorder.shapeColor = color(255,0,0,0);
exitBorder.immovable = true;
    
chevBorder = createSprite(579,460,31,5);
chevBorder.shapeColor = color(0,0,0,0);
    

}

function draw() {
  background(bgImg);

  fill(255);
  textAlign(CENTER);
  textSize(10.3);
  text("Les chevreuils sont contaminés par une particule radioactive. Aide-les en l'attrapant et tu pourras sortir d'ici !", width/2, 10);
    
 if(keyDown(LEFT_ARROW))
  {
      ship.addSpeed(.2,180);
  }
  if(keyDown(RIGHT_ARROW))
  {
      ship.addSpeed(.2,0);
  }
  if(keyDown(UP_ARROW))
    {
    ship.addSpeed(.2,-90);
    }
    
    if(keyDown(DOWN_ARROW)) 
    {
        ship.addSpeed(.2,90);
    }

   
    ship.collide(lgBorder1);
    ship.collide(lgBorder2);
    ship.collide(lgBorder3);
    ship.collide(lgBorder4);
    ship.collide(exitBorder);
    ship.collide(sqrBorder1);
    ship.collide(sqrBorder2);
    ship.collide(sqrBorder3);
    ship.collide(sqrBorder4);
    ship.collide(sqrBorder5);
    ship.collide(sqrBorder6);
    ship.collide(sqrBorder7);
    ship.collide(sqrBorder8);
    ship.collide(sqrBorder9);
    ship.collide(sqrBorder10);
    ship.collide(sqrBorder11);
    ship.collide(sqrBorder12);
    ship.collide(recBorder1);
    ship.collide(recBorder2);
    ship.collide(recBorder3);
    ship.collide(recBorder4);
    ship.collide(recBorder5);
    ship.collide(recBorder6);
    ship.collide(recBorder7);
    ship.collide(recBorder8);
    ship.collide(recBorder9);
    ship.collide(yBorder1);
    ship.collide(yBorder2);
    ship.collide(yBorder3);
    ship.collide(yBorder4);
    ship.collide(xBorder1);
    ship.collide(xBorder2);
    ship.collide(xBorder3);
    ship.collide(xBorder4);
    ship.collide(xBorder5);
    
    chevs.bounce(lgBorder1);
    chevs.bounce(lgBorder2);
    chevs.bounce(lgBorder3);
    chevs.bounce(lgBorder4);
    
    particule.bounce(lgBorder1);
    particule.bounce(lgBorder2);
    particule.bounce(lgBorder3);
    particule.bounce(lgBorder4);
    particule.bounce(chevs);  
    
exitGate.changeImage("closed");
    
if (ship.overlap(particule)) {
    particule.remove();
    exitBorder.setCollider("rectangle",0,-30,50,1);
    particule.visible = false;
}
    
if (particule.visible == false) {
    exitGate.changeImage("open");
    
    for (var i=0; i<chevs.length; i++) {
       var x =  chevs[i];
        x.changeImage("normal");
    }
    
}

                                 
    
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
    win.setAttribute("src", "smilingchevs.gif");
    document.getElementById('playground').appendChild(win);
    
    var newlevel = (function() {window.location.href = "../index.html";})
                    
    setTimeout(newlevel, 4800);
}


  drawSprites();
  
    return false;
}

function reloadTiming() {
    location.reload();
}