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


function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const Circle1 = new Function("radius", `this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`);

const circle = new Circle1(1);

const another = new Circle(1); // "new" operator


// Functions are Objects? 