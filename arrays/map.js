// 📝 Short Note:
// In JavaScript, arrays are powerful and flexible — no need for separate structures like C++ vectors or Java ArrayLists.
// The `.map()` method is used to transform each element of an array and return a new array.

let arr = [1, 7, 6, 8, 20];
let brr = [];

// ❌ Traditional loop (commented out) to double each element
// for (const ele of arr) {
//     brr.push(ele * 2);
// }

// ✅ Using map with a named function
function double(n) {
    return n * 2;
}
brr = arr.map(double);  // Output: [2, 14, 12, 16, 40]

// ✅ Using map with a square function
function square(n) {
    return n * n;
}
brr = arr.map(square);  // Output: [1, 49, 36, 64, 400]

// ✅ Using map with a function that adds 10
function add10(n) {
    return n + 10;
}
brr = arr.map(add10);   // Output: [11, 17, 16, 18, 30]

// ✅ Using map with an inline named function
brr = arr.map(
    function mul5(n) {
        return n * 5;
    }
);                      // Output: [5, 35, 30, 40, 100]

// ✅ Using map with an arrow function (block body)
brr = arr.map(
    (n) => {
        return n * 5;
    }
);                      // Output: [5, 35, 30, 40, 100]

// ✅ Mutating the original array using map
arr = arr.map(
    (n) => {
        return n * 5;
    }
);                      // arr becomes: [5, 35, 30, 40, 100]

// ✅ Further transforming arr using concise arrow function
arr = arr.map((n) => n * 100);  // arr becomes: [500, 3500, 3000, 4000, 10000]

let print = console.log;
print(brr);  // Output: [5, 35, 30, 40, 100]
print(arr);  // Output: [500, 3500, 3000, 4000, 10000]

/* 📝 Short Note:
   - `.map()` is ideal for transforming arrays without mutating the original.
   - It returns a new array based on the return value of the callback function.
   - Arrow functions offer cleaner syntax, especially for one-liners.
   - You can chain `.map()` for multiple transformations.
*/
