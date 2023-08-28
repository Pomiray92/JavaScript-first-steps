 JavaScript First Steps

## Benefits of Object-Oriented Programming (OOP)

1. **Encapsulation**: Reduces complexity and increases reusability.
2. **Abstraction**: Reduces complexity and isolates the impact of changes.
3. **Inheritance**: Eliminates redundant code.
4. **Polymorphism**: Refactors ugly switch/case statements.

## Factory Function

A **factory function** is a function that creates an object and returns it. It's similar to constructor functions or class functions. Factory functions are a powerful tool in JavaScript as they directly return objects of any class.

## Constructor Function

A **constructor function** is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor is called when an object is created using the `new` keyword. Its purpose is to create a new object and set values for any existing object properties.

- **`this` Keyword**: In JavaScript, the `this` keyword refers to an object. Its reference depends on how `this` is used. In an object method, `this` refers to the object. When used alone, `this` refers to the global object.

- **`new` Operator**: The `new` operator allows developers to create an instance of a user-defined object type or a built-in object type with a constructor function.


### Understanding the Constructor Property

In JavaScript, every object has an internal property known as the **constructor** property. This property points to the function that was used to create the object. When you create an object using a constructor function (or a class constructor), the `constructor` property of that object will reference that constructor function.

For example, consider a constructor function `Person`:

```javascript
function Person(name) {
  this.name = name;
}
```

Creating an object using this constructor:

```javascript
const person1 = new Person("Alice");
```

The constructor property of person1 will refer to the Person constructor function:

```javascript
console.log(person1.constructor); // Outputs: ƒ Person(name) { this.name = name; }
```


## Value vs Reference Types

### Value Types (Primitive Types)
Value types, also known as primitive types, include data that is stored directly in memory. When you work with value types, you're dealing with the actual value itself. Examples of value types include:

- Number
- String
- Boolean
- Symbol
- undefined
- null

With value types, when you assign or copy a variable, you're making a distinct copy of the value. Changing one variable does not affect the others.

Example 1:
```javascript
let x = 10;
let y = x;

x = 20;

console.log("y:", y); // Output: y: 10
console.log("x:", x); // Output: x: 20
```

Example 2:
```javascript
let number = 10;
function increase(number) {
    number++;
}

increase(number);
console.log("Primitive Type:", number); // Output: Primitive Type: 10
```


### Reference Types (Objects)
Reference types encompass data that is stored as a reference or address in memory. When you work with reference types, you're working with a reference to the location of the actual data. Examples of reference types include:

- Object
- Function
- Array

When you assign or copy a reference type variable, you're copying a reference to the underlying data. If you modify the data through one variable, it will affect all variables that reference the same data.

Example:
```javascript
let x1 = { value: 10 };
let y1 = x1;

x1.value = 20;

console.log("y1:", y1); // Output: y1: { value: 20 }
console.log("x1:", x1); // Output: x1: { value: 20 }
```
Example 2:
```javascript
let number1 = {value: 10};

function increase(number1) {
    number1.value++;
}

increase(number1);
console.log("Reference Type:", number1); // Output: Reference Type: { value: 11 }
```


#### TAKEAWAY: 
  - `PREMERIVES` are copied by they value
  - `Objects` are copird by their reference

Understanding the distinction between value and reference types is essential for effectively managing and manipulating data in JavaScript.