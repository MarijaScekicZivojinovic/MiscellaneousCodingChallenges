// Difficulty lvl: 3/4

// The array reduce method runs a function once for every item in an array and returns a single value. The reduced function is a function that you provide that takes an accumulator value and a current value. The accumulator value is the combined total of all previous callback function runs and the current value is the current value in the array that we're executing this function on. In this challenge, you'll be using the array reduce function to calculate the total bill from a trip to the coffee shop with your friends. Each person has ordered some number of coffees and you offer to pay the entire bill. Given an array of integers where each value is greater than zero, calculate the total price of all coffees. Each coffee costs $1.25. You should return your answer in the following format: `The total bill is ${total}`. You should use template literals for your return value. Template literals also known as template strings allow you to combine JavaScript expressions and strings into one. Where you previously had to use the plus sign to concatenate strings with values you can now use back ticks. And where you need to evaluate variable or expression, you can surround it with a dollar sign and curly brackets.


///////////////////////// *** START *** /////////////////////////

function coffeeDate(coffeeArr) {
    let coffeeSum = coffeeArr.reduce(
        (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
        //Our array reduce function takes two arguments, the accumulator or the current value from all previous executions which we'll call totalCoffees, and the current array value which we'll call them numCoffees. It will return totalCoffees plus the current number of coffees. 
    );
    return `The total bill is $${coffeeSum * 1.25}`;
};

console.log(coffeeDate([2, 5, 7, 1, 4]));

//  instead of running array filter method and then mapping over that new array, we can actually just use the array reduce method to only pass through the array once. 