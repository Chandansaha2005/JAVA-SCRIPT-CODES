// let n = 10
let print = console.log;

// ❌ This loop is commented out but would print numbers from 1 to n
// for (let i = 1; i <= n; i++) {
//     print(i);
// }

/* 📝 Short Note:
   - A `for` loop is used to execute a block of code repeatedly.
   - `i = 1` starts the loop, `i <= n` is the condition, and `i++` increments the counter.
*/

// Function to print numbers from 1 to n
function oneToN(n) {
    let print = console.log;
    for (let i = 1; i <= n; i++) {
        print(i);  // Prints each number from 1 to n
    }
}
oneToN(5);  // Output: 1 2 3 4 5

/* 📝 Short Note:
   - Functions help modularize code — reusable blocks that can be called with different inputs.
   - `oneToN(n)` prints numbers from 1 to n using a loop.
*/

// Function to return the sum of two numbers
function sum(a, b) {
    return (a + b);  // Returns the result of a + b
}
print(sum(5, 8));    // Output: 13

/* 📝 Short Note:
   - `return` sends the result back to the caller.
   - This function is pure — it doesn't depend on or modify external variables.
*/
