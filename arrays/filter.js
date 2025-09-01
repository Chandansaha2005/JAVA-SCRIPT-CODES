let arr = [8, 2, 4, 5, 6, 3, 9, 7];
let print = console.log;

print(arr);  // Output: [8, 2, 4, 5, 6, 3, 9, 7]

// ✅ Function to keep even numbers
function keepEven(ele) {
    return (ele % 2 == 0); // Returns true for even numbers
}
let brr = arr.filter(keepEven); // Filters elements where keepEven returns true
print(brr);  // Output: [8, 2, 4, 6]

/* 📝 Short Note:
   - `filter()` creates a new array with elements that pass the test (return true).
   - Here, it keeps only even numbers.
*/

// ✅ Function to keep odd numbers
function keepOdd(ele) {
    return (ele % 2 != 0); // Returns true for odd numbers
}
brr = arr.filter(keepOdd); // Filters elements where keepOdd returns true
print(brr);  // Output: [5, 3, 9, 7]

// ✅ Using an inline named function inside filter
brr = arr.filter(
    function keepOdd(ele) {
        return (ele % 2 != 0); // Same logic as above
    }
);
print(brr);  // Output: [5, 3, 9, 7]

// ✅ Using an arrow function with block body
brr = arr.filter((ele) => {
    return (ele % 2 != 0); // Arrow function version
});
print(brr);  // Output: [5, 3, 9, 7]

// ✅ Using a concise arrow function (no braces, implicit return)
brr = arr.filter((ele) => (ele % 2 != 0));
print(brr);  // Output: [5, 3, 9, 7]

/* 📝 Short Note:
   - Arrow functions offer cleaner syntax.
   - If the function body is a single expression, you can omit `{}` and `return`.
*/

// ✅ Filtering numbers less than 5
brr = arr.filter(ele => (ele < 5));
print(brr);  // Output: [2, 4, 3]

/* 📝 Short Note:
   - `filter()` is versatile — you can use it for any condition.
   - It doesn’t modify the original array, just returns a new one.
*/
