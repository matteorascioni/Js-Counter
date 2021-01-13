// JS COUNTER
let counter = 0;
  
// h2
const number = document.getElementById('heading');

// Increase Button
const buttonIncrease = document.getElementById("button+");
buttonIncrease.onclick = function increase() {
    counter++;

    heading.innerHTML = counter;
}

// Decrease Button
const buttonDecrease = document.getElementById("button-");
buttonDecrease.onclick = function decrease() {
    counter -= 1;

    heading.innerHTML = counter;
}