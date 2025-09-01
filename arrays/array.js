let print = console.log;

// Declaring a simple array of numbers
arr = [1, 5, 2, 6, 7];
print(arr);               // Output: [1, 5, 2, 6, 7]

// Getting the length of the array
n = arr.length;
print(n);                 // Output: 5

print("Traverse :-");
// Traversing the array using a for loop
for (i = 0; i < n; i++) print(arr[i]);  // Prints each element

// Accessing specific elements
print("first element = ", arr[0]);      // Output: 1
print("last element = ", arr[4]);       // Output: 7

/* 📝 Short Note:
   - Arrays are zero-indexed, so the first element is at index 0.
   - `arr.length` gives the total number of elements.
*/

// Declaring a mixed-type array
arr2 = [4, "chandan", 63.96, 'p', true];
print(arr2);             // Output: [4, "chandan", 63.96, 'p', true]

/* 📝 Short Note:
   - JavaScript arrays can hold multiple data types: numbers, strings, booleans, etc.
*/

// Declaring a 2D array (array of arrays)
arr2d = [[5, 9, 3], [7, 4, 5, 8, 9]];
print(arr2d);            // Output: [[5, 9, 3], [7, 4, 5, 8, 9]]

/* 📝 Short Note:
   - 2D arrays are useful for representing grids, matrices, or tabular data.
*/

// Declaring a nested array with mixed types and a sub-array
brr = [4, "chandan", 63.96, 'p', true, [8, 6, 2, 5, 1]];
print(brr);              // Output: full array including nested array

// Traversing the array and printing index-value pairs
for (let i = 0; i < brr.length; i++) {
    print(i, brr[i]);    // Prints index and corresponding value
}

/* 📝 Short Note:
   - Nested arrays can be accessed using double indexing: e.g., brr[5][2] → 2
   - Useful for storing structured or grouped data.
*/
