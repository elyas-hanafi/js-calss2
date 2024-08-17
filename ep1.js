// What is a Programming Language and JavaScript?

/**
 * Programming Language:
 * A programming language is a formal language used to write computer programs.
 * It consists of a set of instructions that produce various kinds of output.
 *
 * JavaScript (JS):
 * JavaScript is a high-level, that is commonly used for web development.
 * It is versatile, allowing you to create dynamic content, control multimedia, and animate images on web pages.
 */

console.log("Hello, World!"); // This is your first JavaScript code. It prints 'Hello, World!' to the console.

// Programming Concepts - Values and Variables, Data Types

/**
 * Values and Variables:
 * Variables are containers for storing data values. In JavaScript, you can declare a variable using `let`, `const`, or `var`.
 */
let myName = "Alice"; // String
const myAge = 25; // Number
var isStudent = true; // Boolean

console.log(myName, myAge, isStudent); // Outputs: Alice 25 true

/**
 * Data Types:
 * JavaScript has several data types, including:
 * - String: Text, enclosed in single or double quotes.
 * - Number: Numeric values.
 * - Boolean: true or false.
 * - Undefined: A variable that has been declared but not assigned a value.
 * - Null: Represents "nothing" or empty value.
 * - Object: Collections of key-value pairs.
 * - Array: Lists of values.
 */
let undefinedVariable; // Undefined
let nullVariable = null; // Null
let person = { firstName: "John", lastName: "Doe" }; // Object
let hobbies = ["Reading", "Traveling", "Coding"]; // Array

console.log(undefinedVariable, nullVariable, person, hobbies); // Outputs: undefined null {firstName: "John", lastName: "Doe"} ["Reading", "Traveling", "Coding"]

// Programming Concepts - Basic Operators, Strings, Template Literals, If-Else Statements

/**
 * Basic Operators:
 * Operators perform operations on values and variables.
 * - Arithmetic Operators: +, -, *, /, %, ++, --
 */
let sum = 5 + 3; // Addition
let difference = 10 - 6; // Subtraction
let product = 4 * 7; // Multiplication
let quotient = 20 / 4; // Division
let remainder = 9 % 4; // Modulus (remainder)

console.log(sum, difference, product, quotient, remainder); // Outputs: 8 4 28 5 1

/**
 * Strings and Template Literals:
 * Strings can be concatenated using + or template literals using backticks ``.
 */
let greeting = "Hello, " + myName + "!"; // Using +
let templateGreeting = `Hello, ${myName}! You are ${myAge} years old.`; // Using template literals

console.log(greeting); // Outputs: Hello, Alice!
console.log(templateGreeting); // Outputs: Hello, Alice! You are 25 years old.

/**
 * Taking Decisions - If-Else Statements:
 * If-else statements allow you to execute code based on a condition.
 */
if (myAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// Simple Calculator (Coding Challenge)
let num1 = 10;
let num2 = 5;
let operator = "*";

if (operator === "+") {
  console.log(num1 + num2); // Addition
} else if (operator === "-") {
  console.log(num1 - num2); // Subtraction
} else if (operator === "*") {
  console.log(num1 * num2); // Multiplication
} else if (operator === "/") {
  console.log(num1 / num2); // Division
} else {
  console.log("Invalid operator");
}
// Outputs: 50 (since operator is *)

// Programming Concepts - Type Conversion, Coercion, Equality Operators, Boolean Logic, Switch, Ternary

/**
 * Type Conversion and Coercion:
 * Type conversion is when you manually convert a value from one type to another.
 * Type coercion is when JavaScript automatically converts types.
 */
let stringNumber = "123";
let convertedNumber = Number(stringNumber); // Type Conversion (String to Number)
console.log(convertedNumber); // Outputs: 123

let coercedResult = "5" + 5; // Type Coercion (5 is converted to "5", result is "55")
console.log(coercedResult); // Outputs: "55"

/**
 * Truthy and Falsy Values:
 * In JavaScript, some values are "truthy" (treated as true) and others are "falsy" (treated as false).
 */
let falsyValue = 0; // 0 is falsy
let truthyValue = 1; // 1 is truthy

if (falsyValue) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}
// Outputs: This is falsy

/**
 * Equality Operators:
 * == checks for equality after type coercion.
 * === checks for equality without type coercion (strict equality).
 */
let value1 = 10;
let value2 = "10";

console.log(value1 == value2); // Outputs: true (because "10" is coerced to 10)
console.log(value1 === value2); // Outputs: false (different types, no coercion)

/**
 * Boolean Logic and Logical Operators:
 * Logical operators combine multiple boolean values.
 * - && (AND): True if both operands are true.
 * - || (OR): True if at least one operand is true.
 * - ! (NOT): Inverts the truthiness of the operand.
 */
let isLoggedIn = true;
let hasPermissions = false;

if (isLoggedIn && hasPermissions) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}
// Outputs: Access denied. (because hasPermissions is false)

/**
 * The switch Statement:
 * Switch statements allow you to execute different code based on the value of a variable.
 */
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Wednesday":
    console.log("Midweek day.");
    break;
  case "Friday":
    console.log("End of the work week.");
    break;
  default:
    console.log("Another day.");
}
// Outputs: Start of the work week.

/**
 * The Conditional (Ternary) Operator:
 * A shorthand for if-else statements.
 */
let canVote = myAge >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Outputs: Yes, you can vote.

// Programming Concepts - Functions, Declarations, Expressions, Arrow Functions, Functions Calling Other Functions

/**
 * Functions:
 * Functions are reusable blocks of code that perform a specific task.
 */
function greetUser(name) {
  return `Hello, ${name}!`;
}
console.log(greetUser("Alice")); // Outputs: Hello, Alice!

/**
 * Function Declarations vs. Expressions:
 * Function Declaration: A standard way to declare a function.
 * Function Expression: A function stored in a variable.
 */
function add(a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
};

console.log(add(10, 5)); // Outputs: 15
console.log(subtract(10, 5)); // Outputs: 5

/**
 * Arrow Functions:
 * A concise way to write functions using the `=>` syntax.
 */
const multiply = (a, b) => a * b;
console.log(multiply(10, 5)); // Outputs: 50

/**
 * Functions Calling Other Functions:
 * Functions can call other functions.
 */
function square(x) {
  return x * x;
}

function calculateSquareAndAdd(a, b) {
  return square(a) + square(b);
}

console.log(calculateSquareAndAdd(2, 3)); // Outputs: 13 (4 + 9)

// Programming Concepts - Dot vs. Bracket Notation, Object and Array Methods, Iteration with for Loop, Looping Arrays

/**
 * Dot vs. Bracket Notation:
 * JavaScript objects allow properties to be accessed using dot notation (object.property)
 * or bracket notation (object['property']).
 */
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

// Accessing properties using dot notation
console.log(car.make); // Outputs: Toyota

// Accessing properties using bracket notation
console.log(car["model"]); // Outputs: Corolla

// When to use bracket notation:
// - If the property name is stored in a variable:
let property = "year";
console.log(car[property]); // Outputs: 2020

// - If the property name contains spaces or special characters:
let strangeObject = {
  "strange property": "strange value",
};
console.log(strangeObject["strange property"]); // Outputs: strange value

/**
 * Object and Array Methods:
 * JavaScript provides built-in methods to manipulate objects and arrays.
 */

let fruits = ["apple", "banana", "cherry"];

// Array methods
fruits.push("orange"); // Adds an item to the end
console.log(fruits); // Outputs: ["apple", "banana", "cherry", "orange"]

fruits.pop(); // Removes the last item
console.log(fruits); // Outputs: ["apple", "banana", "cherry"]

fruits.shift(); // Removes the first item
console.log(fruits); // Outputs: ["banana", "cherry"]

fruits.unshift("apple"); // Adds an item to the start
console.log(fruits); // Outputs: ["apple", "banana", "cherry"]

// Object methods
let personInfo = {
  name: "John",
  age: 30,
  city: "New York",
};

// Get object keys
let keys = Object.keys(personInfo);
console.log(keys); // Outputs: ["name", "age", "city"]

// Get object values
let values = Object.values(personInfo);
console.log(values); // Outputs: ["John", 30, "New York"]

// Get object entries (key-value pairs)
let entries = Object.entries(personInfo);
console.log(entries); // Outputs: [["name", "John"], ["age", 30], ["city", "New York"]]

/**
 * Iteration - The for Loop:
 * A for loop is used to repeat a block of code a certain number of times.
 */
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration number: ${i}`);
}
// Outputs:
// Iteration number: 1
// Iteration number: 2
// Iteration number: 3
// Iteration number: 4
// Iteration number: 5

/**
 * Looping Arrays:
 * You can loop through arrays using a for loop or a forEach loop.
 */
let numbers = [10, 20, 30, 40, 50];

// Using a for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(`Index ${i}: ${numbers[i]}`);
}
// Outputs:
// Index 0: 10
// Index 1: 20
// Index 2: 30
// Index 3: 40
// Index 4: 50

// Using forEach (simpler, recommended for arrays)
numbers.forEach((number, index) => {
  console.log(`Index ${index}: ${number}`);
});
// Outputs:
// Index 0: 10
// Index 1: 20
// Index 2: 30
// Index 3: 40
// Index 4: 50
