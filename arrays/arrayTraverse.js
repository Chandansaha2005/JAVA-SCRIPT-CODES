let print = console.log;

// Declaring an array
brr = [4, 5, 2, 3, 6];
print(brr);  // Output: [4, 5, 2, 3, 6]

// 🧭 Traversing using a traditional for loop
for (let i = 0; i < brr.length; i++) {
    print(i, brr[i]);  // Prints index and value
}

// 🧭 Traversing using for...of loop (value only)
for (const i of brr) {
    print(i);  // Prints each element
}

// 🧭 Traversing using forEach loop (value + index)
brr.forEach((element, index) => {
    print(element, index);  // Prints value and index
});

/* 📝 Short Note:
   - `for` loop gives full control over index and iteration.
   - `for...of` is cleaner when you only need values.
   - `forEach()` is a method on arrays that accepts a callback with (element, index).
*/

// Declaring another array
arr = [4, 5, 2, 3, 6, 8];
print(arr);  // Output: [4, 5, 2, 3, 6, 8]

// ❌ Attempting to mutate array using for...of (won't work)
for (const ele of arr) {
    ele *= 2;  // This modifies only the local copy, not the array
}
// print(arr); // Output remains unchanged

/* 📝 Short Note:
   - `for...of` gives a copy of each element, not a reference.
   - Modifying `ele` doesn't affect the original array.
*/

// ✅ Mutating array using forEach
arr.forEach((element, i) => {
    arr[i] = element * 2;  // Updates each element in-place
});
print(arr);  // Output: [8, 10, 4, 6, 12, 16]

/* 📝 Short Note:
   - `forEach()` allows direct access to both value and index.
   - You can safely mutate the array inside the callback.
*/
