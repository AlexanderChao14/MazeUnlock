document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
          console.log("Left key is pressed.");
          
          let i = 0;
          picArray = ["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*", 
                      "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
                      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"];
          setInterval(() => {
              
              document.getElementById("picture").src=picArray[i];
              if(i > 1){
                  i = 0;
              }else{
                  i++;
              }
          }, 1000);
          break;
       case 38:
          console.log("Up key is pressed.");
          break;
       case 39:
          console.log("Right key is pressed.");
          break;
       case 40:
          console.log("Down key is pressed.");
          break;
    }
 };