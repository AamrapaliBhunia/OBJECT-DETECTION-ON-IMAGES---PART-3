Goats_Cows_Humans_img = "";
status ="";
objects = [];


function preload(){
    Goats_Cows_Humans_img=loadImage('Goats_Cows_Humans.jpg');

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
    objectDetector.detect(Goats_Cows_Humans_img, gotResult);
}


function gotResult(error,results){

    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(Goats_Cows_Humans_img,0,0,640,420);

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