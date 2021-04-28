leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
noseX = 0;
noseY = 0;
difference = 100;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 410);
    canvas = createCanvas(550, 410);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("poseNet Is Initialized!");
}

function gotPoses(results){
}

function draw(){
    background("#DC143C");
    fill("#23EBC3");
    stroke("#23EBC3");
    textSize(difference);
    text("Aditya", noseX - width / 2, noseY );
}