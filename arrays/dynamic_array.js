// 📝 Short Note:
// In C++ we use vectors, in Java we use ArrayList — but in JavaScript, arrays handle it all.
// They are dynamic, can hold mixed types, and come with powerful built-in methods.

let print = console.log;

// Initial array
arr = [4, 2, 5, 6];
print(arr);  // Output: [4, 2, 5, 6]

// ➕ Add element to the end of the array
arr.push(0);
print(arr);  // Output: [4, 2, 5, 6, 0]

/* 📝 Short Note:
   - `push()` appends an element to the end of the array.
   - It modifies the original array and returns the new length.
*/

// ➖ Remove element from the end of the array
arr.pop();
print(arr);  // Output: [4, 2, 5, 6]

/* 📝 Short Note:
   - `pop()` removes the last element and returns it.
   - Useful for stack-like behavior (LIFO).
*/

// ➕ Add element to the beginning of the array
arr.unshift(1);
print(arr);  // Output: [1, 4, 2, 5, 6]

/* 📝 Short Note:
   - `unshift()` adds one or more elements to the front.
   - Shifts existing elements to the right.
*/

// ➖ Remove element from the beginning of the array
arr.shift();
print(arr);  // Output: [4, 2, 5, 6]

/* 📝 Short Note:
   - `shift()` removes the first element and returns it.
   - Useful for queue-like behavior (FIFO).
*/
