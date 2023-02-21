//Part 1 JS
//create var to hold the #like-counter p object
// var likeCounter = document.querySelector("#like-counter");
// //create var to hold the current number
// var currentCount = 3;

// //onclick event triggers currentCount++ and then sets our likeCounter inner text to the new value
// function incLikeCount() {
//     currentCount ++;
//     likeCounter.innerText = currentCount;
// }


//Part 2 JS

var likeCounterA = document.querySelector('#like-counterA');
var currentCountA = 9;

var likeCounterB = document.querySelector('#like-counterB');
var currentCountB = 12;

var likeCounterC = document.querySelector('#like-counterC');
var currentCountC = 9;

function incLikeCount(element) {
    if (element.id === "buttonA") {
        currentCountA++;
        likeCounterA.innerText = currentCountA;
    }
    else if (element.id === "buttonB") {
        currentCountB++;
        likeCounterB.innerText = currentCountB;
    }
    else if (element.id === "buttonC") {     
        currentCountC++;
        likeCounterC.innerText = currentCountC;
    } /* It's probably safer to make this another elif rather than just an else
         so that we have to find a match for C for it to do anything */
}