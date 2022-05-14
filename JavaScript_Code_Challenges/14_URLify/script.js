// Difficulty lvl: 4/4

// String are one of the core data types in JavaScript, so understanding how to manipulate them is a vital skill for all front end developers. The string data type comes with many utility functions which we can use to find and replace characters. Let's create a function that takes in a blog post title and returns the URL-ified version. To create a URL friendly version of a blog post title, all punctuation must be removed, all letters must be lowercase, and all spaces must be joined by hyphens. You should use a combination of regular expressions and string prototype functions to complete this challenge.


///////////////////////// *** START *** /////////////////////////

function urlify(blogTitle) {
    // The first thing we'll do is remove the punctuation. There is no remove function on the string prototype, so we'll use the replace function. The first argument for the replace function is the set of characters we want to replace and the second argument is the set of characters we want to replace the first argument with.
    // blogTitle.replace (charactersToReplace, charactersToReplaceRemovedWith) 
    // To define the set of punctuation we want to remove, we can use a regular expression, or regex. To create a regex, you can use the literal notation by placing the characters inside two forward slashes or you can use the constructor function.
    // const punctuation = /regex/;
    // const punctuation = new RegExp('regex');
    // We'll use the literal notation. We'll also include a second argument, a G flag, to the regex constructor to indicate that we should apply this regex to the entire string. 
    const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
    // You'll notice we didn't use the slash capital w regex to select all non-word characters. This is because this regex will also remove spaces, and we must preserve the individual words so we can replace the spaces with hyphens in a later step. Thus, we have to explicitly define all punctuation characters. Now we can use this regex to remove all punctuation from our blog post title. We will use the string replace method to do this. The first argument is our regex, and the second argument is the string we will use as the replacement. Since we're removing punctuation, we can leave this argument as an empty string. 
    const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, "");
    // Next we'll ensure all characters are lowercase. We can use the string dot to lowercase function to achieve this. We also need to trim the white space from the end of our string so that we don't end up with a hyphen at the front or end of our URL. We can use the string dot trim method to do this. Lastly, we want to replace all spaces in the title with hyphens. We can use the string dot replace all method to do this because we want to replace all spaces in the string, and not the first instance.  
    return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
};

console.log(urlify("How I got into programming!!!"));
console.log(urlify("I Got A New Job :)"));