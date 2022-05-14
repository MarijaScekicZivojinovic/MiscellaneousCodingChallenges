// Difficulty lvl: 4/4

// Regular expressions or RegEx are sequences of characters that define a pattern in a string. We can use regular expressions to do things like remove certain characters in a string or check whether a string matches a set of criteria. In this challenge, you'll build a password validator for a signup form, which tests whether or not a user's desired password is strong enough. You must use a regular expression in your solution. If the user's password is strong enough, return the string, "your password is valid". Otherwise, return the string, "your password is invalid". You must also use a ternary operator to return a Boolean value. Ternary operators check to see if a certain condition has been met. We follow the expression we want to check with a question mark, and if the condition is truthy, it will execute the code following the question mark. The truthy expression is followed by a colon. And if the condition is falsy, it will execute the following code.
// Here are the criteria which must be met in order for a password to be strong enough:
// - The password must have at least one lowercase letter.
// - The password must have at least one uppercase letter.
// - It must contain one digit and one special character.
// - And it must be at least eight characters long.


///////////////////////// *** START *** /////////////////////////


function checkPassword(password) {
    // Let's test for at least one lowercase letter. I'll be using the regular expression literal. This consists of a series of characters to check for and is surrounded by two slashes. There are several ways to write the following regular expressions, but I will be using a positive lookahead. A positive lookahead is a zero with assertion, which means that it will match characters in a string but will only return whether there was a match or no match. In other words, it doesn't consume the specific string characters; it just test whether it matches possible or not. We want to test that there is at least one character in the entire string. So we can use the period which will match any character except a line break, and the plus sign is a quantifier which ensures that we have one or more of these characters. We can create a set of characters to test with a pair of brackets. And since we want all alphabetical characters, we can write a hyphen z.
    let oneLowerCaseLetter = /(?=.+[a-z])/;
    // We can copy and paste this format for the uppercase letter requirement. This time, instead of a lowercase, a hyphen z, we can write capital A hyphen capital Z.
    let oneUpperCaseLetter = /(?=.+[A-Z])/;
    // The one-digit requirement works exactly the same, except instead of a to z, we want zero through nine.
    let oneDigit = /(?=.+[0-9])/;
    // To test for a special character, we can include them between the brackets.
    let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
    // Finally, to ensure a length of eight characters, we can use curly brackets. Here, we're checking that the password is at least eight characters, but we're not setting an upper bound.
    let minimumEightCharacters = /(?=.+{8,})/;
    // Let's create a Boolean variable that checks if the password matches all of the RegEx patterns. 
    let isValid =
        oneLowerCaseLetter.test(password) &&
        oneUpperCaseLetter.test(password) &&
        oneDigit.test(password) &&
        oneSpecialCharacter.test(password) &&
        minimumEightCharacters.test(password);
    return isValid ? "Your password is valid" : "Your password is invalid";
};

console.log(checkPassword("abc")); //invalid
console.log(checkPassword("9A!abc")); //valid