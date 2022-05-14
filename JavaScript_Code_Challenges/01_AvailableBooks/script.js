// Difficulty lvl: 1/4

// In this challenge you'll be developing an inventory application for a bookstore. You need to create a book class, which provides information about different books in the store. Each book will have a title, author, ISBN, and keep track of the number of available copies. You'll need a way to get each book's availability. If there aren't any copies of the book left, the function should return out of stock. If there are less than 10 copies, the function should return low stock. Otherwise the function should return in stock. You'll also need a function for selling a book. This will take the number of copies sold and subtract it from the total number of copies. If no argument is passed, we can default the number of copies to sell to one. Lastly, you'll want a restock function, which takes in a number of copies to restock and adds it to the total number of copies. If no argument is passed, we can default the restock number to five. You should use JavaScript's class keyword as well as a getter function for the availability method.

///////////////////////// *** FUNCTION SYNTAX *** /////////////////////////
// function Book(title, author, ISBN, numCopies) {
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;
// }
// //we can refactor the function above into a class

// Book.prototype.getAvailability = function () {
//     if (this.numCopies === 0) {
//         return "Out of stock";
//     }
//     else if (this.numCopies < 10) {
//         return "Low stock";
//     }
//     return "In stock";
// }
// //We declare this function on the prototype because we don't need to create a new instance of this function each time we make a new object, We can declare it on the prototype and each book instance can use the prototype's function. We can follow the same structure to declare the sell and restock functions. 

// Book.prototype.sell = function (numCopiesSold = 1) {
//     this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function (numCopiesStocked = 5) {
//     this.numCopies += numCopiesStocked;
// }

///////////////////////// *** CLASS SYNTAX *** /////////////////////////
class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    getAvailability() {
        if (this.numCopies === 0) {
            return "Out of stock";
        } else if (this.numCopies < 10) {
            return "Low stock";
        }
        return "In stock";
    }

    // You'll notice that all of the book-related code lives inside of the book class. This is called encapsulation.

    get availability() {
        return this.getAvailability();
    }

    sell(numCopiesSold = 1) {
        this.numCopies -= numCopiesSold;
    }

    restock(numCopiesRestocked = 5) {
        this.numCopies += numCopiesRestocked;
    }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 1239191, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());