// Creating an alias for console.log
let print = console.log;

// Declaring a string
let s = "chandan";
print(s);             // Output: chandan
print(s.length);      // Output: 7 → length of the string

// Declaring another string with spaces
let s2 = "chandan is a coder";
print(s2);            // Output: chandan is a coder
print(s2.length);     // Output: 19 → includes spaces

// 📝 Short Note:
// The `.length` property returns the total number of characters in a string, including spaces.

// Iterating over string using traditional for loop
for (let index = 0; index < s.length; index++) {
    print(s[index]);  // Prints each character of 's' one by one
}

// Line break for clarity
print("\n");

// Iterating over string using for...of loop
for (const i of s) {
    print(i);         // Also prints each character of 's'
}

// Line break for clarity
print("\n");

// ❌ Attempting to use forEach directly on a string will not work
// s.forEach(i => {
//     print(i);
// }); // ❌ Error: forEach is not a function

/* 📝 Short Note:
   - Strings in JavaScript are iterable, so you can use `for...of` to loop through characters.
   - However, strings do not have a `.forEach()` method — that's available on arrays.
   - To use `.forEach()`, convert the string to an array: `Array.from(s).forEach(...)`
*/
