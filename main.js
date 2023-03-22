/*
Make clock hand move in interval of a second at a time
Define let count = 0
Use setInterval to move the hand
    make anon function to count++
    hand.style.transform = "rotate(6deg)"
    set interval timer to 1sec (1000ms)






*/




const hand = document.querySelector(".hand");
let countdeg = 0
//countdeg is the position of the hand. Each run of the function moves the hand 6 degrees.
setInterval(function (){countdeg+=6;hand.style.transform = `rotate(${countdeg}deg)`;},1000)

// setInterval(function (){hand.style.transform = `rotate(6deg)`;},1000)

// hand.style.transform = `rotate(90deg)`; //🔍 HINT: THis is an example of how to rotate the hand!
