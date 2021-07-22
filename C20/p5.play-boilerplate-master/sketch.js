var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
 fixedRect= createSprite (600, 100, 50, 80);
 fixedRect.shapeColor = "green"

 movingRect= createSprite (400, 200, 80, 30);
 movingRect.shapeColor = "blue"

}

function draw() {
  background("black");  
  movingRect.x=mouseX
  movingRect.y=mouseY
  if (fixedRect.x-movingRect.x===fixedRect.width/2+movingRect.width/2 && movingRect.x-fixedRect.x===fixedRect.width/2+movingRect.width/2 ){
    fixedRect.shapeColor = "yellow"
    movingRect.shapeColor = "yellow"
  }
  else {
    fixedRect.shapeColor = "green"
    movingRect.shapeColor = "blue"
  }
  drawSprites();
}