let print = console.log;

// ❌ These lines are commented out but demonstrate useful Math functions:
// print(Math.floor(46.5));      // Rounds down → 46
// print(Math.ceil(46.6));       // Rounds up → 47
// print(Math.max(4, 5));        // Maximum → 5
// print(Math.min(2, 5));        // Minimum → 2
// print(Math.abs(-7));          // Absolute value → 7
// print(Math.pow(7, 8));        // 7^8 → 5764801
// print(Math.sqrt(1024));       // Square root → 32
// print(Math.cbrt(12465024));   // Cube root → ~234.3
// print(Math.log(12465024));    // Natural log → ~16.34

/* 📝 Short Note:
   - The `Math` object provides built-in methods for mathematical operations.
   - These are useful for rounding, powers, roots, and more.
*/

// Generates a random number between 0 (inclusive) and 1 (exclusive)
print(Math.random());  // Output: e.g., 0.7321

// Loop to generate 100 random numbers between roughly -10 and +10
for (let i = 0; i < 100; i++)
    print(Math.floor(((Math.random() * 10) - (Math.random() * 10))));

/* 📝 Short Note:
   - `Math.random()` generates a float between 0 and 1.
   - Multiplying by 10 scales it to 0–10.
   - Subtracting two random values gives a range from -10 to +10.
   - `Math.floor()` rounds down to the nearest integer.
*/

// Loop to generate 100 random integers between 0 and 9
for (let i = 0; i < 100; i++)
    print(Math.floor(Math.random() * 10));

/* 📝 Short Note:
   - This is a common way to simulate dice rolls, random indexes, etc.
   - `Math.floor(Math.random() * n)` gives a random integer from 0 to n-1.
*/

// Random conditional output
if (Math.random() > 0.5) {
    print("hello");
} else {
    print("bye");
}

/* 📝 Short Note:
   - This simulates a coin flip.
   - Since `Math.random()` returns a value between 0 and 1, there's ~50% chance for either branch.
*/
