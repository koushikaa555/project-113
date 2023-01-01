function preload(){

}

function setup()
{
  canvas=createCanvas(640,480);
  canvas.position(110,250);
  video= createCapture(VIDEO);
  video.hide()
}
function draw(){
    image(video, 0, 0, 640, 480);
    rect(30, 20, 55, 55, 10, 10, 10, 10);
    rect(45, 75, 20,400);
    rect(30,420 , 55, 55, 10, 10, 10, 10);
    rect(600, 50, 20,400);
    rect(590,410 , 55, 55, 10, 10, 10, 10);
    rect(590, 20, 55, 55, 10, 10, 10, 10);
    rect(85, 30,505, 20);
    rect(85, 430,505, 20);

}
function take_snapshot()
{
    save('myImage.png');
}