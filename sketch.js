var fixedRect, movingRect;

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(250,200,50,100);

  fixedRect.shapeColor= "green";
  movingRect.shapeColor = "green";

  fixedRect.debug = true;
  movingRect.debug = true;

}

function draw() {
  background(0);  

 movingRect.x = mouseX;
  movingRect.y = mouseY;

 if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect .x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2)
 {
  fixedRect.shapeColor= "red";
  movingRect.shapeColor = "red";
 }
 else{
  fixedRect.shapeColor= "green";
  movingRect.shapeColor = "green";
 }
  drawSprites();
}
