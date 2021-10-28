const answer = ["Up", "Up", "Right"]
let seq = []
let i = 0;
let fpsY= 75;
let fpsX= 135;
let currentlyMoving =false;



// document.onkeydown = function (event) {

//     switch (event.keyCode) {
//         case 37:
            
//             moveLeft();
//             break;
//         case 38: 
        
//             moveUp();
//             break;
//         case 39:
        
//             moveRight();
//             break;
//         case 40:
        
//             moveDown();
//             break;
//         }

//  };


function moveLeft(){  
    if(!currentlyMoving){
        currentlyMoving=true;
        var myTimer = setInterval(() => Move("Left", 8 , myTimer), fpsX);
    }
}


function moveUp(){  
    if(!currentlyMoving){
        currentlyMoving=true;
        var myTimer =  setInterval(() => Move("Up", 16, myTimer), fpsY);
    }
}

function moveRight(){  
    if(!currentlyMoving){
        currentlyMoving=true;
        var myTimer = setInterval(() => Move("Right",5,myTimer), fpsX);
    }
}

function moveDown(){  
    if(!currentlyMoving){
        currentlyMoving=true;
        var myTimer = setInterval(() => Move("Down",18,myTimer), fpsY);
    }
}



function combination (input){
    
    if(answer[seq.length] == input){
        seq.push(input);
    }else{
        seq= [];
    }

    if(arrayEquals(answer, seq)){
        // console.log("unlock")
        document.getElementById("iphone").src ="./Assets/Unlock.png";
        document.getElementById("webcam-container").style("display:hidden;");
        document.getElementById("result").style("display:hidden;");
    }
    console.log(seq)
}   

function arrayEquals(array1, array2){
    return JSON.stringify(array1) ==JSON.stringify(array2)
}

function Move(direction, max, myTimer){
    document.getElementById("iphone").src ="./Assets/"+direction+"/"+i +".png";
            
            if(i >= max){
                document.getElementById("iphone").src ="./Assets/Start.png";
                i = 0;
                combination(direction) //TODO
                console.log("Done walking")
                clearInterval(myTimer);
                currentlyMoving =false;
              }
             i++
}




const URL = "https://teachablemachine.withgoogle.com/models/X1SkYaAOO/";

let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(100, 100, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    let result ='';
    let prob = 0;
    
    for (let i = 0; i < maxPredictions; i++) {
        
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
        // console.log(prediction[i].probability, prob)
        if((Math.round(prediction[i].probability  * 100) / 100) > (Math.round(prob * 100) / 100)){
            
            result = prediction[i].className
            prob=prediction[i].probability
            // console.log("------------------------------------",result, prob)
            // console.log(result + " Loooooook here")

            if("Left" == result){
                console.log("Left");
                moveLeft();
                
            }else if("Up" == result){
                console.log("Up");
                moveUp();
            }else if("Right" == result){
                console.log("Right");
                moveRight();
            }else if("Down" == result){
                console.log("Down");
                moveDown();
            }
            else{
                // console.log("Nothing")
            }
            
        }
        // console.log("asdfhksahfhsalkdhfshh",prediction[i].probability, prob)
        
        
    }
    $('#result').text(result);
}

init();