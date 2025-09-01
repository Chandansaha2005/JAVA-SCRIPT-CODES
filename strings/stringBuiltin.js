let print = console.log;

// String declaration
let s = "ChaNdan";
print(s);                        // Output: ChaNdan

// Converts all characters to uppercase
print(s.toUpperCase());         // Output: CHANDAN

// Original string remains unchanged (strings are immutable)
print(s);                        // Output: ChaNdan

// Converts all characters to lowercase
print(s.toLowerCase());         // Output: chandan

/* 📝 Short Note:
   - `toUpperCase()` and `toLowerCase()` return new strings.
   - Original string `s` is not modified because strings are immutable in JavaScript.
*/

// String with extra spaces
let s2 = "    javascript  ";
print(s2, s2.length);            // Output: "    javascript  ", 17

// Removes leading and trailing spaces
print(s2.trim(), s2.trim().length); // Output: "javascript", 10

/* 📝 Short Note:
   - `trim()` removes whitespace from both ends of a string.
   - Useful for cleaning user input or formatting.
*/

// Finding character positions
print(s.indexOf('a'));           // Output: 2 → first occurrence of 'a'
print(s.lastIndexOf('a'));       // Output: 5 → last occurrence of 'a'

// Accessing characters by index
print(s.charAt(3));              // Output: 'N' → character at index 3
print(s[3]);                     // Output: 'N' → same result using bracket notation

/* 📝 Short Note:
   - `charAt(index)` and `s[index]` both return the character at the given position.
   - Bracket notation is more modern and readable.
*/

// Extracting substrings
print(s.slice(2));              // Output: 'Ndan' → from index 2 to end
print(s.slice(2, 5));           // Output: 'Nda' → from index 2 up to (but not including) index 5

/* 📝 Short Note:
   - `slice(start, end)` extracts a portion of the string.
   - The `end` index is exclusive.
*/

// Splitting a sentence into words
let s3 = "chandan saha is a student of MCKV";
print(s3);                      // Output: full sentence

let arr = s3.split(" ");        // Splits string into array of words
print(arr);                     // Output: ['chandan', 'saha', 'is', 'a', 'student', 'of', 'MCKV']

// Iterating over the array
for (const element of arr) {
    print(element);             // Prints each word on a new line
}

/* 📝 Short Note:
   - `split(" ")` breaks a string into an array using space as the delimiter.
   - Useful for parsing sentences or tokenizing input.
*/
