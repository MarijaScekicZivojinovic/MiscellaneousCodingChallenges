// Difficulty lvl: 1/4

// Arrays come with many built-in loops and functions that allow us to manipulate data. One of those functions is the array dot filter method. The filter method, it's a callback function that gets run once for every item in the array and overturns a new array of items that pass a certain criteria. For example, if you have an array of animals and you want to create a new array of only mammals you can use the array dot filter method on the animal's array to only include animals in the mammal class. In this challenge you're planning the menu for an Italian dinner. Some of your guests are vegetarian and you need to create a list of vegetarian menu items for them. Given an array of Italian dishes, create an unordered list of all vegetarian dinner options. Each menu item is an object containing the dish name and a Boolean variable that indicates whether the dish is vegetarian. You should dynamically generate the list items in the DOM from the array of vegetarian items.


///////////////////////// *** FUNCTION SYNTAX *** /////////////////////////

function vegetarianMenu(menu) {
    const menuNode = document.querySelector("#menu");
    const vegetarianOptions = menu.filter(
        (option) => option.isVegetarian === true
    );
    vegetarianOptions.forEach(option => {
        let dish = document.createElement("li");
        dish.textContent = option.name;
        menuNode.appendChild(dish);
    });
};

const menu = [
    {
        name: "Chicken parmesan",
        isVegetarian: false
    },
    {
        name: "Stuffed shells",
        isVegetarian: true
    },
    {
        name: "Spaghetti and meatballs",
        isVegetarian: false
    },
    {
        name: "Tiramisu",
        isVegetarian: true
    }
];

vegetarianMenu(menu);