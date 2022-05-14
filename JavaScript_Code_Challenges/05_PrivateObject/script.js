// Difficulty lvl: 2/4

// JavaScript Symbols where a new primitive data type introduced with ES6. Every value returned from a symbol is unique, meaning that we can use them as identifiers for object properties. (video game music) In this challenge, you will create a user object that has three properties, username, password, and age. Using JavaScript Symbols, ensure that username and password are private fields on the user character. This means they shouldn't be accessible by calling user.username or user.password.


///////////////////////// *** START *** /////////////////////////

const username = Symbol("username");
const password = Symbol("password");

const user = {
    //we can use our previously defined symbols as the object keys:
    [username]: "marijasz",
    [password]: "1234560",
    age: 32
};

console.log(user.username); //result is: undefined
console.log(user.password);