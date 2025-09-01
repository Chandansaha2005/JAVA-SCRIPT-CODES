// Using var: allows redeclaration and reassignment
var a = 4;
console.log(a);  // Output: 4

a = 8;
console.log(a);  // Output: 8

// Using const: allows assignment only once
const b = 4;
console.log(b);  // Output: 4

// b = 8;         // ❌ Error: Assignment to constant variable
// console.log(b);

// Using let: similar to var but block-scoped and preferred
let c = 0;        // ✅ More modern and safer than var
console.log(c);   // Output: 0

c = 60;
console.log(c);   // Output: 60

// Creating an alias for console.log
let clog = console.log;
clog("This is working");  // Output: This is working

// Redeclaration with var — allowed
var g = 500;
clog(g);          // Output: 500

var g = 9;        // ✅ No error with var redeclaration
clog(g);          // Output: 9

// Redeclaration with const — not allowed
// const g = 800; // ❌ SyntaxError: Identifier 'g' has already been declared
// clog(g);
