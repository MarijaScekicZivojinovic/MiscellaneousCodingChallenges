// Difficulty lvl: 2/4

// In a previous challenge we created a Book class that accepts a title, author, ISBN, and number of copies, and provides methods for selling and restocking. And this challenge we'll use inheritance to create a variation on our Book class. Your goal is to create a TechnicalBook class that inherits from the Book class in the previous challenge. This class will also take a title, author, ISBN, and number of copies, but will take a fifth argument, an edition. The TechnicalBook class will also provide a getEdition function which returns the following string. The current version of this book is, followed by the book's edition. You should use a template literal for this phrase.


///////////////////////// *** CLASS SYNTAX *** /////////////////////////

class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    // Getter
    get availability() {
        return this.getAvailability();
    }

    // Method
    getAvailability() {
        if (this.numCopies === 0) {
            return "Out of stock";
        } else if (this.numCopies < 10) {
            return "Low stock";
        }
        return "In stock";
    }

    sell(numCopiesSold = 1) {
        // we gave it a value of 1, in case we don't enter a value when we call this method
        this.numCopies -= numCopiesSold;
    }

    restock(numCopiesStocked = 5) {
        // we gave it a value of 5, in case we don't enter a value when we call this method
        this.numCopies += numCopiesStocked;
    }
};

class TechnicalBook extends Book {
    constructor(title, author, ISBN, numCopies, edition) {
        super(title, author, ISBN, numCopies);
        this.edition = edition;
    }

    getEdition() {
        return `The current version of this book is ${this.edition}.`;
    }
};

const CrackingTheCodingInterview = new TechnicalBook(
    "Cracking The Coding Interview",
    "Gayle Laackmann McDowell",
    1209123,
    7,
    "2.3"
);

console.log(CrackingTheCodingInterview.availability);
console.log(CrackingTheCodingInterview.getEdition());
