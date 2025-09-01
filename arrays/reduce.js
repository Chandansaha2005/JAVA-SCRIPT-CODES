let print = console.log;

// Initial array
let arr = [4, 2, 5, 8, 6, 3];
print(arr);  // Output: [4, 2, 5, 8, 6, 3]

// ✅ Function to sum two numbers
function sum(a, b) {
    return a + b;
}

// Using reduce to calculate the sum of all elements
let s = arr.reduce(sum);
/*
   Step-by-step:
   a = 4, b = 2 → a = 6
   a = 6, b = 5 → a = 11
   a = 11, b = 8 → a = 19
   a = 19, b = 6 → a = 25
   a = 25, b = 3 → a = 28
*/
print(s);  // Output: 28

/* 📝 Short Note:
   - `reduce()` applies a function cumulatively to array elements.
   - It starts with the first two elements unless an initial value is provided.
*/

// Using reduce to subtract elements (left-to-right)
s = arr.reduce(
    function sum(a, b) {
        return a - b;
    }
);
print(s);  // Output: -20 → (((((4 - 2) - 5) - 8) - 6) - 3)

/* 📝 Short Note:
   - Subtraction is not associative like addition.
   - The order of operations matters, especially without an initial value.
*/

// Using arrow function with block body
s = arr.reduce((a, b) => {
    return a - b;
});
print(s);  // Output: -20 → same result as above

// Using concise arrow function (implicit return)
s = arr.reduce((a, b) => a - b);
print(s);  // Output: -20

/* 📝 Short Note:
   - Arrow functions can be concise when the body is a single expression.
   - `reduce()` is powerful for aggregation: sum, product, max, min, etc.
   - Always be mindful of the operation and whether you need an initial value.
*/
