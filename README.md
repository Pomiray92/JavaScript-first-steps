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


