function setup(){
createCanvas(400,400);
}

function draw(){
background("navy");
//esta se puede omitir solo es para ejemplicicar como se puede mover algo.
fill("purple");
stroke("#7fff00");
strokeWeight(1);
ellipse(mouseX,mouseY,5,5);
//movimeinto en coordenas 
fill("white");
noStroke();
text("X: "+mouseX+","+"Y: "+mouseY,mouseX,mouseY);
}