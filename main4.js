Chair_img = "";
status ="";
objects = [];


function preload(){
    Chair_img=loadImage('Chair.jpg');

}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(Chair_img, gotResult);
}


function gotResult(error,results){

    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(Chair_img,0,0,640,420);

    if(status != "")
    {

        for(i = 0; i< objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("purple");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y+ 150);
            noFill();
            stroke("purple");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }

    }

   
}