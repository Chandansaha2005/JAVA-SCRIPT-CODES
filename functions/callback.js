// 📝 Short Note:
// A callback function is a function passed as an argument to another function.
// It allows for flexible and reusable code by letting one function control the execution of another.

// A simple function that returns the product of three numbers
function product(a, b, c) {
    return a * b * c;
}
console.log(product(5, 6, 4));  // Output: 120

// ❌ This function is commented out but shows how a callback can be used
// function fun(x, y) {
//     console.log(x - y);
// }
// fun(product(1, 4, 7), 7); // Calls product first, then subtracts 7

// A function that takes another function (callback) as its first argument
function fun2(x, y) {
    let a = x(4, 7, 5);  // x is the callback function (product)
    return a - y;        // Subtracts y from the result of x
}
console.log(fun2(product, 7));  // Output: 133 → (4 * 7 * 5) - 7

/* 📝 Short Note:
   - `fun2` accepts a function (`x`) and a number (`y`).
   - It calls `x(4, 7, 5)` — which is `product(4, 7, 5)` → 140.
   - Then it subtracts `y` (7) → 140 - 7 = 133.
   - This is a classic example of using a callback to inject logic into another function.
*/
