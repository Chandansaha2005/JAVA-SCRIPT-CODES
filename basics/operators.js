// Variable declarations
let a = 12;
let b = 9;

// Creating an alias for console.log to make logging cleaner
let clog = console.log;

// Basic arithmetic operations
clog(a + b);   // Addition → 21
clog(a - b);   // Subtraction → 3
clog(a * b);   // Multiplication → 108
clog(a / b);   // Division → 1.333...
clog(a % b);   // Modulus → 3 (remainder of 12 ÷ 9)

// Exponentiation (a raised to the power of b)
clog(a ** b);  // → 51520374361

// Post-increment: returns current value, then increments
a++;
clog(a);       // → 13

// Post-decrement: returns current value, then decrements
b--;
clog(b);       // → 8

// Pre-increment: increments first, then returns value
clog(++a);     // → 14

// Pre-decrement: decrements first, then returns value
clog(--b);     // → 7
