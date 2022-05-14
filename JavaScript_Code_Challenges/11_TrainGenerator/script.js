// Difficulty lvl: 3/4

// Generators are functions that can be exited, and at a later point in time, reentered while maintaining their context. Generator functions used to be really great in solving problems with asynchronous programming, but recently, they've kind of been replaced by JavaScripts async await. We declare generator functions with an asterisk following the function keyword. Calling a generator function doesn't immediately execute the body of the function. Instead, an iterator object for the function is returned. We must call the iterator's next method to hit the next yield value. The next method returns an object with a value property that contains the yielded value and a done property, which tells us whether the generator has yielded its last value. In this challenge, you're going to build a generator function that returns the next stop in a list of stops along the Metro North Railroad in New York. Each time a button is clicked, the next stop in the journey should be returned until we reach Grand Central Station in New York City. The train stops are Poughkeepsie, Newburgh, Peekskill, Yonkers, Bronx, and Grand Central. You should use a generator function to yield these values. Console log each stop and once we reach the final stop, Grand Central, console log "We made it!" Once we reach our final stop, the next stop button should be disabled.


///////////////////////// *** START *** /////////////////////////

function* getStop() {
    yield "Poughkeepsie";
    yield "Newburgh";
    yield "Peekskill";
    yield "Yonkers";
    yield "Bronx";
    yield "Grand Central";
};

const nycTrainLine = getStop();
const nextStopButton = document.querySelector("#next-stop");

nextStopButton.addEventListener('click', () => {
    let currStop = nycTrainLine.next();
    if (currStop.done) {
        console.log("We made it!");
        nextStopButton.setAttribute("disabled", true);
    } else {
        console.log(currStop.value);
    };
});