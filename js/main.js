// JS COUNTER
let counter = 0;
  
//declares a var. to store the counter being presented
const number = document.getElementById('heading');

//declares a var. to store the increase button and see if its clicked
const buttonIncrease = document.getElementById("button+");
buttonIncrease.onclick = function increase() {
    counter++;
    //represents the new counter value
    heading.innerHTML = counter;
}

//declares a var. to store the decrease button and see if its clicked
const buttonDecrease = document.getElementById("button-");
buttonDecrease.onclick = function decrease() {
    counter -= 1;
    //represents the new counter value
    heading.innerHTML = counter;
}