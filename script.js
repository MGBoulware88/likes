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

// var likeCounterA = document.querySelector('#like-counterA');
// var currentCountA = 9;

// var likeCounterB = document.querySelector('#like-counterB');
// var currentCountB = 12;

// var likeCounterC = document.querySelector('#like-counterC');
// var currentCountC = 9;

// function incLikeCount(element) {
//     if (element.id === "buttonA") {
//         currentCountA++;
//         likeCounterA.innerText = currentCountA;
//     }
//     else if (element.id === "buttonB") {
//         currentCountB++;
//         likeCounterB.innerText = currentCountB;
//     }
//     else if (element.id === "buttonC") {     
//         currentCountC++;
//         likeCounterC.innerText = currentCountC;
//     } /* It's probably safer to make this another elif rather than just an else
//          so that we have to find a match for C for it to do anything */
// }

/* Chase Matherly taught me another way to do this by using parentNode: */

function incLikeCount(element) {
    var parent = element.parentNode.querySelector(".like-counter"); //this targets the parent of our element [button], grabbing a div.likes from line 55, 70, or 84 from index.html, and selects the p.like-counter that relates to the button that was clicked
    parent.innerText++; //because the only inner text is a number, we can perform addition on it
}

/*
This would require some HTML updates:
All '<p id="like-counterL">N</p>' would become just '<p class="like-counter">N</p>'

This solution works because this(keyword) passes in the button element
We then select the .like-counter from the parent of the button, which gives us the p element holding the current value of the likes
*/
