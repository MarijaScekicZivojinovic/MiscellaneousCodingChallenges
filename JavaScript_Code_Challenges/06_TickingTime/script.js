// Difficulty lvl: 2/4

//  Callback functions are functions that get passed to other functions as arguments and get called at a later point in time. SetTimeout is one JavaScript function which requires a callback function. We pass setTimeout a function and after a certain amount of time, our function gets executed. In this challenge, you'll create a ticking clock in the document body. The index.html file contains a div with an ID of clock. Using callback functions and DOM manipulation, output a ticking digital clock which displays the current hours, minutes, and seconds.


///////////////////////// *** START *** /////////////////////////

function clock() {
    const clockNode = document.querySelector("#clock");
    return setInterval(() => {
        let date = new Date();
        let tick = date.toLocaleTimeString();
        clockNode.textContent = tick;
    }, 1000);
};

clock();