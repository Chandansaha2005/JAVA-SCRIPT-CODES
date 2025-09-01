// Creating an alias for console.log
let print = console.log;

// Declaring variables
let age = 19;
let clg = "MCKV";

// String concatenation using + operator
print("My age is " + age + " my college name is " + clg);  
// Output: My age is 19 my college name is MCKV

// Printing strings using different quote styles
print("chandan");   // Double quotes
print('chandan');   // Single quotes
print(`chandan`);   // Backticks (template literal)

// Invalid string due to incorrect syntax
// print("chand"and") // ❌ Syntax error: unexpected identifier

// Valid string with embedded double quote using backticks
print(`chand"an`);   // Output: chand"an

// Template literal with variable interpolation
print(`My age is ${age} my college name is ${clg}`);  
// Output: My age is 19 my college name is MCKV
