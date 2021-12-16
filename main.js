alarm = "";
function preload() {
    alarm = loadSound("EA.html"); 
     }
     
     function setup() {
         canvas = createCanvas(380, 380);
         canvas.center();
         video = createCapture(VIDEO);
         video.hide();
         video.size(380, 380);
         objectDetector = ml5.objectDetector('cocossd', modelLoaded);
         document.getElementById("status").innerHTML = "Status : Detecting Objects";
     }
     
     function draw() {
         
         image(video, 0, 0, 380, 380);
     
         if(status != "") {
            objectDetector.detect(video,gotResult);
            document.getElementById("status").innerHTML = "Status : Baby detected";
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            alarm.stop();
             } else {
                document.getElementById("status").innerHTML = "Status : Baby not detected";
                alarm.play();
             }
        }
     
     function modelLoaded() {
         console.log("Model Loaded");
         status = true;
         objectDetector.detect(video, gotResult);
     }
     
     function gotResult(error, results) {
         if (error) {
             console.log(error);
         }
         console.log(results);
         objects = results;
     }