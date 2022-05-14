// Difficulty lvl: 1/4

// Unlike other programming languages, JavaScript uses objects to construct inheritance. Each object has a private property which links to another object. This object is known as its prototype. This prototype object has a prototype of its own, and this chain continues until an object with a null prototype has been reached. Your task is to create a movie object that takes in five arguments. Title, director, genre, release year and rating. The movie prototype should have a function called get overview, which logs the following overview for each film. Movie, a genre film directed by director was released in release here. It received a rating of rating. You can use either class or function syntax to create your prototype. Once you create your movie object, create a few movies to test it out.


// ///////////////////////// *** FUNCTION SYNTAX *** /////////////////////////

// function Movie(title, director, genre, releaseYear, rating) {
//     this.title = title;
//     this.director = director;
//     this.genre = genre;
//     this.releaseYear = releaseYear;
//     this.rating = rating;
// }

// Movie.prototype.getOverview = function () {
//     return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
// }


// Instead of using the function keyword, we can use the class keyword.

// ///////////////////////// *** CLASS SYNTAX *** /////////////////////////

class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
    }
}

// While using constructor functions, it's just as valid as using class notation. Class notation encapsulates all of the functionality in one place. So it's a little bit simpler and easier to read.

const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);
const Batman = new Movie(
    "The Dark Knight",
    "Christopher Nolan",
    "Action",
    2008,
    83
);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(Batman.getOverview());
// If we console log Spiderman's get overview value and Batman's get overview value, they're using the properties we declared above, even though they're using the same get overview function.