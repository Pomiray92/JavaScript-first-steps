// First JavaScript code;

console.log("")
console.log("############ Variables #############")

let name = 'Mosh'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // or False // Boolean Literal
let firsstName = undefined; // undefined name
let selectedColor = null; // defoult null

typeof age
typeof isApproved
typeof firsstName

// const interestRate = 0.3;
// // interestRate = 1; constants cannot be change
// console.log(interestRate)


// console.log(name);

console.log("############ Typeof #############")
console.log('name:', name, "-> is typeof:", typeof name)
console.log('age:', age, "-> is typeof:", typeof age)
console.log('isApproved:', isApproved, "-> is typeof:", typeof isApproved)
console.log('firsstName:', firsstName, "-> is typeof:", typeof firsstName)
console.log('selectedColor:', selectedColor, "-> is typeof:", typeof selectedColor)

console.log("")
console.log("")
console.log("############ Objects #############")

let person = {
    name: "Gosh",
    age: 35
};

// person.name = "Tosh"                     // Dot Notation
// person["name"] = "Bosh"                  // Bracket Notation


// let selection = "name"
// person[selection] = "Mary"               // parsing the selecton to the persone.name

console.log('Object:', typeof person)
console.log('Person:', person)
console.log('Person name:', person.name)
console.log('Person age:', person.age)


console.log("")
console.log("")
console.log("############ Arrays #############")
// usual Array or list indexing by the number and can be changed added or deleted
let selectColor = ['red', 'blue'];
selectColor[2] = ["green"]
selectColor[3] = 3
console.log('selectColor:', selectColor)
console.log('selectColor["0"]:', selectColor['0'])
console.log('selectColor["1"]:', selectColor['1'])
console.log('selectColor["2"]:', selectColor['2'])
console.log('selectColor["3"]:', selectColor['3'])

console.log('selectColor length:', selectColor.length)

console.log("")
console.log("")
console.log("############ Functions #############")

function greet(someName, someLastName) { // define the parameter
    console.log('Hi ' + someName, someLastName)
    // console.log('Hello from the func');

}

greet('Mary');
greet('Mary', 'Popens');
greet('There', 'How are you');   // Parse the argument

console.log("")
console.log("")
console.log("############ Performing a Task #############")

// calculate a value

function square(number) { // define the parameter
    return number * number

}
// square(2);

console.log(square(2))

// let sqNumber = square(2)
// console.log(sqNumber);
