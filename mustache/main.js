noseX=0;
noseY=0;
img="";
function preload(){
img=loadImage("Mustache.png");
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet Is Intialized');
}
function gotPoses(results)
{
 if(results.length > 0){
     console.log(results);
     console.log("nose x= "+ results[0].pose.nose.x);
     console.log("nose y= "+ results[0].pose.nose.y);
     noseX=results[0].pose.nose.x-47;
     noseY=results[0].pose.nose.y-5;
 }  

}
function draw(){
image(video, 0,0,400,400);
image(img,noseX,noseY,100,50);
}
function take_snapshot(){
    save('FilterPhoto.png');
}