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


# CLASSES

 **In `JavaScript`, a class is a blueprint for creating objects with shared properties and methods. It defines the structure and behavior of objects that will be created based on that class. Classes were introduced in ECMAScript 6 (ES6) and provide a more organized and object-oriented way to work with objects.**


-  **`Instance Properties`**: These are properties that belong to individual objects created from the class. For example, if you have a `Person` class, the `name` and `age` of each person object would be instance properties.

- `Instance Methods`: These are functions defined within the class that describe the actions or behaviors objects can perform. For instance, in a `Person` class, instance methods might include `b`, `run()`, `jump()`, and others. These methods can operate on the instance properties.

### Getter and Setters

**`Getters` and `setters` are special `methods` in a class that `allow controlled access` to the class's properties. They are used to get and set the values of instance properties while `providing an additional layer of control or logic`.**

### Getters
- **`Getters`**: A getter method is used to retrieve the current value of a property. It is defined using the `get` keyword and a method name. For example, you might have a getter to retrieve the `age` of a person object.

- Example: 
```javascript
get age() {
    return this._age; // Using _age to store the age property
}
```

### Setters
- **`Setters`**: A setter method is used to change the value of a property. It is defined using the `set` keyword and a method name. Setters often include validation or logic to ensure that the property is set correctly. For example, you might have a setter to set the `age` of a person object.

- Example: 

```javascript
set age(newAge) {
    if (newAge >= 0 && newAge <= 120) {
        this._age = newAge; // Using _age to store the age property
    } else {
        console.log('Invalid age value');
    }
}
```

In the above examples, `_age` is used to store the actual age property, and the getters and setters provide controlled access to it. Using getters and setters helps encapsulate the class's properties and adds a layer of validation or logic when getting or setting these properties.

For instance, when you get the age property using the getter, it can enforce constraints or perform additional actions before returning the age value. Similarly, when you set the age property using the setter, it can validate the new value before updating the property. This encapsulation and control are key features of object-oriented programming.

## Classes: Stattic Methods or helper methods

**In JavaScript classes, static methods are functions that belong to the class itself rather than to instances of the class. They are defined using the static keyword within the class definition. Unlike regular methods, `static` methods are called on the class itself, not on instances of the class.**

### Key Characteristics of Satic Methods:

- `Belong to the Class`:  Static methods are associated with the class itself, not with instances of the class. They can be called on the class without creating an instance.

- `No Access to Instance Properties`:  Static methods do not have access to instance-specific data or properties. They work with class-level data and cannot access `this` to refer to instance properties.

- `Utility Functions`:  Static methods are often used for utility functions, helper methods, or operations that are related to the class but don't depend on specific instance data.

- `Examples`: Common use cases for static methods include calculations, comparisons, data validation, and operations that don't modify instance state.

- Syntax for Defining Static Methods:

```javascript
class ClassName {
    // ...
    static methodName() {
        // Static method logic here
    }
    // ...
}
```
- Usage Example:

```javascript
class MathUtils {
    static add(x, y) {
        return x + y;
    }

    static multiply(x, y) {
        return x * y;
    }
}

const sum = MathUtils.add(5, 3); // Calling a static method
const product = MathUtils.multiply(4, 2); // Calling another static method

```
- Static methods provide a way to encapsulate and organize functionality that is related to a class but does not require instance-specific data, promoting code organization and maintainability.


## Classes: Inheritance & Extends, Parent and Child Classes

**In object-oriented programming (OOP), classes are blueprint templates for creating objects. In JavaScript, classes provide a way to create reusable and organized code structures.**

- `Inheritance `:  is a fundamental concept in OOP, where a new class can inherit properties and methods from an existing class. The existing class is referred to as the `parent class` or `base class`, while the new class is the `child class` or `derived class`. This relationship allows the child class to reuse and extend the behavior of the parent class.


### Key Points

- `Parent Class`: The parent class defines common properties and methods that are shared by its child classes.

- `Child Class`: Child classes inherit properties and methods from the parent class and can also have their own additional properties and methods.

- **`extends`** `Keyword`: In JavaScript, the `extends` keyword is used to create a child class that inherits from a parent class.

Example:

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`I am ${this.name}, I am ${this.age} years old`);
    }
}

class Programmer extends Person {
    constructor(name, age, yearsOfExperience) {
        super(name, age); // Call the constructor of the parent class
        this.yearsOfExperience = yearsOfExperience;
    }
    code() {
        console.log(`${this.name} is coding`);
    }
}

```

- In this example, `Person` is the parent class, and `Programmer` is the child class that inherits properties and methods from `Person`. Child classes can also have their own methods, and they can override methods inherited from the parent class.

**Classes and inheritance help organize code, promote reusability, and facilitate the creation of complex software systems. They are core concepts in modern JavaScript development.**


```javascript
```


```javascript
```