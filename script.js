const answer = ["Up","Up","Up","Up"]
let seq = []
let i = 0;

document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
          console.log("Left key is pressed.");
          
          
          var myTimer = setInterval(() => Move("Left", 8 , myTimer), 100);
          
          console.log("Done walking")
          break;
       case 38:
          console.log("Up key is pressed.");

        var myTimer = setInterval(() => Move("Up", 16, myTimer), 100);
        

          break;
       case 39:
          console.log("Right key is pressed.");

          var myTimer = setInterval(() => Move("Right",5,myTimer), 100);
        console.log("Done walking")

          break;
       case 40:
          console.log("Down key is pressed.");

          var myTimer = setInterval(() => Move("Down",18,myTimer), 100);
        console.log("Done walking")

          break;
    }
 };

function combination (input){
    
    if(answer[seq.length] == input){
        seq.push(input);
    }else{
        seq= [];
    }

    if(arrayEquals(answer, seq)){
        // console.log("unlock")
        document.getElementById("iphone").src ="./Assets/Unlock.png";
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
              }
             i++
}