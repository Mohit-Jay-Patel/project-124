var canvas;
var video,posenet;
function preload(){

}
function setup(){
canvas=createCanvas(550,550);
canvas.position(560,150);

video = createCapture(VIDEO);
video.size(550,500);

posenet=ml5.poseNet(video , modelload);
posenet.on("pose", gotposes);
}
function modelload(){
    console.log("Model has been loaded");
}
function draw(){

}
function gotposes(results){
    if(results.lenght>0){
        console.log(results);
    }
}