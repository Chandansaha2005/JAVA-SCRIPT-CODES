// Creating an alias for console.log
let print = console.log;

// Assigning a value to x (implicitly global, not recommended)
let x = 455;

// Checking if x is a three-digit number
if (x >= 100 && x <= 999) {
    print("Three Digit Number");  // Executes if x is between 100 and 999
} else {
    print("Not Three Digit Number"); // Executes otherwise
}
