// ##################  BENEFITS OF OOP ####################  //

// Encapsulation = Reduce complexity + increase resability  //
// Abstraction = Reduce complexity + isolate impact of changes  //
// Inheritance = Eliminate redundant code  //
// Polymorphism = Refactor ugly switch/case satements  //

// console.log('Hi again');


// const circle = { // circle object  //
//     redius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {                      // draw method  //
//         console.log('drow');
//     }
// };

// circle.draw();


// ##################   Factory Function ####################  //


// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {                      // draw method  //
//             console.log('drow');
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw();

// // ################### Construction Function ################ //


// function Circle(radius) {
//     console.log('this', this);
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const Circle1 = new Function("radius", `this.radius = radius;
// this.draw = function() {
//     console.log('draw');
// }
// `);

// // Using the constructor function to create an instance
// const circle = new Circle(1);

// // Using the `call` method to invoke the Circle function with a custom `this` value
// Circle.call({}, 1); // The first argument is the custom `this` value, and subsequent arguments are function arguments

// // Using the `apply` method to invoke the Circle function with a custom `this` value and an array of function arguments
// Circle.apply({}, [1, 2, 3]);


// Functions are Objects? 

// ################### Value vs Reference Types ################ //

// // Value Types
// let x = 10;
// let y = x;

// console.log("y:", y); // Output: y: 10
// console.log("x:", x); // Output: x: 20
// // Primitives are copied by they value


// // Reference Types
// let x1 = {value: 10};
// let y1 = x1;

// console.log("y1:", y1); // Output: y1: { value: 20 }
// console.log("x1:", x1); // Output: x1: { value: 20 }
// // Objects are copied by their reference

// let number = 10;
// function increase(number) {
//     number++;
// }

// increase(number);
// console.log("Primitive Type:", number);



// let number1 = {value: 10};

// function increase(number1) {
//     number1.value++;
// }

// increase(number1);
// console.log("Reference Type:", number1);

// function Circle(radius) {
//     console.log('this', this);
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// // user.token = 'asdadsadsad';

// circle.location = {x: 1};

// const propertyName = 'center-location';
// circle[propertyName] = {x: 1};

// delete circle[propertyName]; // or delete circle['location']
// delete circle.drow

// ################### Enumerating Properties ################ //
// consept of closuare
// function Circle(radius) {
//     // console.log('this', this);

//     // let color = 'red'; // local func variable


//     this.radius = radius;
//     let defoultLocation = { x: 0, y: 0};
//     let computeOptimumLocation = function(factor) {
//         // ...
//     }

//     this.draw = function() {
//         // let x, y;                       // scopes are temprolely
//         computeOptimumLocation(0.1);        // call comput... method inside drow method
//         console.log('draw');
//     };
// } 

// const circle = new Circle(10);
// circle.draw();
// // console.log('test:', circle.draw)
// // circle.drow.computeOptimumLocation();
// // circle.location = {x: 1};
// // const propertyName = 'center-location';
// // circle[propertyName] = {x: 1};

// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//         console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle)
//     console.log('Circle has a radius of', circle.radius)

// ################### Getters/Setters ################ //
// ########## First get method 

// function Circle(radius) {
//     this.radius = radius;

//     let defoultLocation = { x: 0, y: 0};    
//     let computeOptimumLocation = function(factor) {
//         // ...
//     }

//     this.getDefoultLocation = function() {
//         return defoultLocation;
//     };

//     this.draw = function() {       
//         console.log('draw');
//     };
// }

// const circle = new Circle(10);
// circle.getDefoultLocation();
// circle.draw();


// ######### Second get method 
// function Circle(radius) {
//     this.radius = radius;

//     let defoultLocation = { x: 0, y: 0};    
//     // let computeOptimumLocation = function(factor) {
//     //     // ...
//     // }

//     this.getDefoultLocation = function() {
//         return defoultLocation;
//     };

//     this.draw = function() {       
//         console.log('draw');
//     };

//     Object.defineProperty(this, 'defoultLocation', {
//         get: function() {
//             return defoultLocation
//         },
//         set: function(value) {
//             if (!value.x || !value.y)
//                 throw new Error('invalid Location.');
//             defoultLocation = value;
//         }
//     });
// }


// const circle = new Circle(10);
// circle.defoultLocation = 1;
// //circle.defoultLocation
// circle.draw();

// ################### Exercise ################ //

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
            throw new Error('Stopwatch has already started.');

        running = true

        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch is not started.');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

        duration += seconds;
    };
        
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}