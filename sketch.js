let snow = [] ;
function preload(){
  snowbg=loadImage("snow1.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  snow.push(new Snow())
}

function draw() {
  background(snowbg);

  if(frameCount%60===0){
    snow.push(new Snow(random(0,800),0))
    console.log(22);
  }
  for (var k = 0; k <Snow.length;k++ ) 
  {
    Snow[k].display();
    console.log(12);
  }

}

