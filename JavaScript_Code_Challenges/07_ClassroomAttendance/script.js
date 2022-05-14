// Difficulty lvl: 2/4

//  De-structuring is an expression, which allows us to extract values from objects and arrays into variables. To destructure values from arrays, we use square brackets and to destructure values from objects, we use curly brackets. The first variable declared in the brackets will receive the first array item as its value. The second variable will receive the second array item as its value, and so on. You can use the spread operator or three dots to replace the remaining array or object values into one variable. For this challenge, you'll use array and object de-structuring to return a list of students. Create a function called get students, which takes one argument, Classroom classroom will contain a bullion value called has teaching assistant and class list, which is an array of people in the classroom. The first value in class lists will be the teacher. If has teaching assistant is true, The second value in the class list is the teaching assistant and the remaining values in the class list are the students. If has teaching assistant is false, The second value through the end of the class list are the students. Your job is to return a list of students. You must use object and array de-structuring.


///////////////////////// *** START *** /////////////////////////

function getStudents(classroom) {
    let { hasTeachingAssistant, classList } = classroom;
    let teacher, teachingAssistant, students; //We want to declare them outside of our if statement so we can return the students array.

    if (hasTeachingAssistant) {
        [teacher, teachingAssistant, ...students] = classList; //If there's a teaching assistant, we want to destructure the first value into the teacher variable and the second value into the teaching assistant variable. The rest of the values will be spread into the students array 
    } else {
        [teacher, ...students] = classList; //Otherwise we will spread the first value into the teacher variable and the rest of the values into the student's array.
    }
    return students;
};

console.log(
    getStudents({
        hasTeachingAssistant: false,
        classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
    })
);