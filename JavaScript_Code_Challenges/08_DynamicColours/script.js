// Difficulty lvl: 2/4

// Closures are functions that close over their lexical environment or their scope. This allows us to access an outer function scope from an inner function. We use closures in many different places. For example, if we're filtering an array of items, or if we're creating a timeout. In this challenge, we'll use closures to create three buttons. Each button will represent a different color and we'll change the background color of the document body to the color value. Using a closure, create a function called change color that accepts a color value. When the button is clicked, the closure should be invoked and the body background color should be updated.


///////////////////////// *** START *** /////////////////////////

// there are three ways to solve this

// 1st attempt: we could create three separate functions, which each set the body's background color to a specific hexadecimal value. 
// function makeBodyBlue() {
//     document.body.style.background = '#0f62fe';
// };

// function makeBodyPink() {
//     document.body.style.background = '#ff7eb6';
// };

// function makeBodyGreen() {
//     document.body.style.background = '#42be65';
// };

// document.querySelector('#blue').addEventListener('click', makeBodyBlue);
// document.querySelector('#pink').addEventListener('click', makeBodyPink);
// document.querySelector('#green').addEventListener('click', makeBodyGreen);

// 2nd attempt:
// function changeColor(color) {
//     document.body.style.background = color;
// };

// document.querySelector('#blue').addEventListener('click', () => changeColor("#0f62fe"));
// document.querySelector('#pink').addEventListener('click', () => changeColor("#ff7eb6"));
// document.querySelector('#green').addEventListener('click', () => changeColor("#42be65"));

// 3rd attempt:  if we return a function, we create a closure over our color value. We can now create three variables, which will be invoked on button click. We can pass in their respective hexadecimal values. 
function changeColor(color) {
    return function () {
        document.body.style.background = color;
    }
};

const bgColorBlue = changeColor("#0f62fe");
const bgColorPink = changeColor("#ff7eb6");
const bgColorGreen = changeColor("#42be65");

document.querySelector('#blue').addEventListener('click', bgColorBlue);
document.querySelector('#pink').addEventListener('click', bgColorPink);
document.querySelector('#green').addEventListener('click', bgColorGreen);