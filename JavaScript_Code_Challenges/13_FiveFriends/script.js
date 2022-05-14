// Difficulty lvl: 4/4

// Functions declared with the async keyword allow us to write asynchronous code in a synchronous manner. And together with the Fetch API, we can make asynchronous API requests. In this challenge, you're building a new component for your space, a brand new social media application that allows you to find friends. This component space user's top five friends. Given some JSON data returned from the random user API, you should dynamically generate image thumbnails for the top five friends. You should use the Fetch API to call the random user API. You can use the URL, https//randomuser.me/api/?result=5. To get data for five users. Your solution should also use async/await.


///////////////////////// *** START *** /////////////////////////

// Let's start by declaring our asynchronous function, we can use either a function expression or a function declaration. A function expression is when we assign an anonymous function to a variable and invoke the variable. 
// const getUsers = async() => {

// }

// Let's refactor our function expression into a function declaration. Both options work using the async keyword. 
async function getUsers() {
    let people = await fetch("https//randomuser.me/api/?result=5");
    let data = await people.json();
    // console.log(data);
    const timeline = document.querySelector('#timeline');
    data.results.forEach(person => {
        let image = document.createElement('img');
        image.src = person.picture.medium;
        timeline.appendChild(image);
    });
}

getUsers();