console.log('Classes')

// ################### Classes: Basics ################ //

// class Rectengle {
//     // Constroctur is used to setup the Object
//     constructor(_width, _hight, _color) {

//         console.log('The Rectengle is being created!');

//         this.width = _width;
//         this.hight = _hight;
//         this.color = _color;
//     }

//     getArea(){
//         return this.width * this.hight;
//     }

//     printDescription() {
//         console.log(`I am a rectengle of ${this.width} * ${this.hight} and i am ${this.color}`);
//     }
// }

// let myRectengle1 = new Rectengle();
// console.log(myRectengle1)                   // Output: Rectengle { width: undefined, hight: undefined, color: undefined }

// let myRectengle2 = new Rectengle(9, 2, 'RED');
// // console.log(myRectengle2.getArea())         // Output: 18




// const area = myRectengle2.getArea();
// console.log(area);


// myRectengle2.printDescription();

// if (area > 20) {
//     console.log("The area is greater than 20.");
// } else {
//     console.log("The area is not greater than 20.");
// }

// ################### Classes: Getters/Setters ################ //


// class Square {
//     constructor (_width) {
//         this.with = _width;
//         this.height = _width;
//         this.numberOfRequestsFromArea = 0;
//     }

//     get area() {
//         this.numberOfRequestsFromArea++;
//         return this.with * this.height;
//     }

//     set area(area) {
//         this.width = Math.sqrt(area);
//         this.height = this.width;
//     }
// }

// let square1 = new Square(4);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);

// // square1.area = 25;
// // console.log(square1.width);
// // console.log(square1.height);
// // console.log(square1.height);
// console.log(square1.numberOfRequestsFromArea);


// ################### Classes: Static Methods ################ //

// class Square {
//     constructor(_width) {
//         this.width = _width;
//         this.height = _width;
//     }

//     static equal(a, b) {
//         return a.width * a.height === b.width * b.height;
//     }

//     static isValidDimentions(width, height) {
//         return width === height;
//     }
// }

// let square1 = new Square(3);
// let square2 = new Square(9);
// console.log(Square.equal(square1, square2));  // Output: false
// console.log(Square.isValidDimentions(6, 6));  // Output: true

// ################### Classes: Inheritance $ Extends ################ //

// Perent and Child Class

class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    describe() {
        console.log(`I am ${this.name}, I am ${this.age} years old`);
    }
}

class Programmer extends Person {
    constructor(_name, _age, _yearsOfExperience) {
        super(_name, _age);

        // Custom behavior specific to Programmer
        if (typeof _yearsOfExperience === 'number' && _yearsOfExperience >= 0) {
            this.yearsOfExperience = _yearsOfExperience;
        }
    }
    code() {
        if (this.yearsOfExperience !== undefined && this.yearsOfExperience >= 1) {
            console.log(`${this.name} is coding`);
        } else if (this.yearsOfExperience !== undefined && this.yearsOfExperience === 0) {
            console.log(`${this.name} cannot code`);
        } else {
            console.log(`We don't have any information about ${this.name}'s code experience`);
        }
    }
}

// Create instances of Person and Programmer
const person1 = new Person("Jeff", 24);
const programmer1 = new Programmer("Dom", 56, 12);

// Output the objects
console.log(person1);
console.log(programmer1);

// Call methods on Programmer instance
programmer1.code();         // Output: Dom is coding
programmer1.describe();     // Output: I am Dom, I am 56 years old

// Function that works with an array of programmers
function developSoftware(list) {
    // Develop software
    for (let worker of list) {
        worker.code();
    }
}

// Call the function with an array of Programmer instances
const programmers_list = [
    new Programmer('Dom', 50, 12),
    new Programmer('Jeff', 24, 4),
    new Programmer('Ben', 28, 5),
    new Programmer('Clare', 18, 0),
    new Programmer('Mary', 30)
];


developSoftware(programmers_list);

// ################### Classes: Polymorphism ################ //

