// 📝 Short Note:
// Objects in JavaScript are like maps or dictionaries — they store data in "key-value" pairs.

// An array holding multiple values (less descriptive than an object)
var details = ["chandan", 19, 89.5, true];

// Creating an alias for console.log
let print = console.log;

// Declaring an object with named properties
let x = {
    "name": "chandan",     // String key with string value
    age: 19,               // Numeric key-value pair
    percentage: 89.5,      // Float value
    isSingle: true         // Boolean value
};

// Printing the entire object
print(x);                 // Output: { name: 'chandan', age: 19, percentage: 89.5, isSingle: true }

// Accessing properties using dot notation
print(x.name);            // Output: chandan
print(x.age);             // Output: 19
print(x.percentage);      // Output: 89.5
print(x.isSingle);        // Output: true

// Accessing properties using bracket notation
print(x);                 // Same full object
print(x["name"]);         // Output: chandan
print(x["age"]);          // Output: 19
print(x["percentage"]);   // Output: 89.5
print(x["isSingle"]);     // Output: true

/* 📝 Short Note:
   - Dot notation (`x.name`) is cleaner and preferred when keys are valid identifiers.
   - Bracket notation (`x["name"]`) is useful when keys are dynamic or contain special characters.
*/

// Modifying object properties
x.age = 20;               // Updates age
x.name = "CKS";           // Updates name
print(x);                 // Output: { name: 'CKS', age: 20, percentage: 89.5, isSingle: true }

/* 📝 Short Note:
   - Objects are mutable — you can update their properties anytime.
   - This makes them ideal for representing structured, editable data.
*/
