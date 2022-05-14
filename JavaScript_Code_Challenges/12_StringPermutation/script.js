// Difficulty lvl: 4/4

// Recursion is when a function calls itself with an argument that gets progressively smaller and smaller until a base case is reached. Once that base case is reached, the previous stack of executions returns and your solution is calculated. Suppose you're playing Scrabble with your best friend and you want to know how many possible combinations of letters you can make with the letters you have. Create a recursive function that takes in a string of letters and calculates the number of possible combinations you can play. Calculating the number of possible combinations of a set of values is known as a factorial. We achieve a factorial solution by starting with the total number of items in the set and multiplying it by each proceeding number of values until we reach one.


///////////////////////// *** START *** /////////////////////////

// iterative solution:
// function numPermutations(letters) {
//     let total;
//     for (let i=1; i<=letters.length; i++) {
//         if (total === undefined) {
//             total = i;
//             continue;
//         }
//         total *= i;
//     }
//     return total;
// }

// recursive solution:
// the goal of recursion is to break a complex problem down into smaller sub-problems that can be easily solved, but don't forget to have a base case !
function numPermutations(letters) {
    // when to quit -> stop when there's one letter remaining in our set of letters:
    if (letters.length === 1) {
        return 1;
    }
    // chop off the first letter in the set and multiply with current number of letters:
    return letters.length * numPermutations(letters.slice(1));
}

console.log(numPermutations("hello"));