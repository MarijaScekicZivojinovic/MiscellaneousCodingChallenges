// Difficulty lvl: 3/4

// Sets are a primitive JavaScript type that allow us to create a unique set of items. We can use sets when we have a dataset that contains repeating values, and we want to remove duplicate instances. (electronic music) You're in charge of building a website for a food truck festival. Each vendor has a menu. And some vendors might be serving the same item. Given an array of food trick menus, where each menu is an array. Return one master menu which contains all food items that will be served at the festival without duplicates. We'll take this unique menu and use DOM manipulation to create an unordered list containing these unique menu items. You should have an unordered list with an ID of combined-menu in your HTML that you can use to append list node children to.


///////////////////////// *** START *** /////////////////////////

function foodTruckFestival(menus) {
    let flatMenus = menus.flat();
    // We can use the array flat method to flatten our array of menus into one long array. Now let's create a new set. For each item in flat menu we want to add it to our set. 
    let combinedMenu = new Set();
    flatMenus.forEach(item => {
        combinedMenu.add(item);
    });

    const menuNode = document.querySelector("#combined-menu");

    for (let item of combinedMenu) {
        let foodNode = document.createElement('li');
        foodNode.innerText = item;
        menuNode.appendChild(foodNode);
    };
};

foodTruckFestival([["tacos", "burgers"], ["pizza"], ["burgers", "fries"]]);