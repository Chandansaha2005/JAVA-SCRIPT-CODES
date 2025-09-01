let print = console.log;

// Initial array
let arr = [4, 2, 8, 5, 9, 6];

// ❌ Default sort (lexicographic, not numeric)
print(arr.sort());  
// Output: [2, 4, 5, 6, 8, 9] — looks correct here, but it's actually sorting as strings

/* 📝 Short Note:
   - By default, `.sort()` converts elements to strings and sorts them lexicographically.
   - This can lead to incorrect results for numeric arrays, especially with negative numbers.
*/

// ✅ Custom comparator for descending order
function decn(a, b) {
    return b - a;
}
print(arr.sort(decn));  // Output: [9, 8, 6, 5, 4, 2]

// ✅ Inline named function
print(arr.sort(
    function decn(a, b) {
        return b - a;
    }
));  // Output: [9, 8, 6, 5, 4, 2]

// ✅ Arrow function with block body
print(arr.sort((a, b) => {
    return b - a;
}));  // Output: [9, 8, 6, 5, 4, 2]

// ✅ Concise arrow function
print(arr.sort((a, b) => b - a));  // Output: [9, 8, 6, 5, 4, 2]

// ✅ Re-sorting again (same result)
print(arr.sort((a, b) => b - a));  // Output: [9, 8, 6, 5, 4, 2]

// ❌ Default sort fails with negative numbers
arr = [-2, 4, -9, 3];
print(arr.sort());  
// Output: [-2, -9, 3, 4] — incorrect due to lexicographic sorting

// ✅ Proper numeric ascending sort
print(arr.sort((a, b) => a - b));  
// Output: [-9, -2, 3, 4] — correct numeric order

/* 📝 Short Note:
   - Always use a comparator `(a, b) => a - b` for numeric sorting.
   - Without it, `.sort()` treats numbers as strings, leading to unexpected results.
*/

// ✅ Sorting by absolute value
print(arr.sort((a, b) => Math.abs(a) - Math.abs(b)));  
// Output: [-2, 3, 4, -9] — sorted by magnitude, not actual value

/* 📝 Short Note:
   - `Math.abs()` returns the absolute value of a number.
   - Sorting by `Math.abs(a) - Math.abs(b)` arranges elements by their distance from zero.
*/
