function preload(){

}
function setup(){
    canvas=createCanvas(650,450);
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.posenet(video ,modelLoaded);
    posenet.on('pose', gotPoses)
}
function draw(){
    image(video,0,0,650,450);
}
function modelLoaded(){
    console.log("MODEL IS LOADED");
}
function gotPoses(){
    
}