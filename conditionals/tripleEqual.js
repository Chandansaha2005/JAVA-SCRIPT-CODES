a = 5;       // number
b = '5';     // string

// Loose equality (==) checks only the value, not the type
console.log(a == b);   // ✅ true → '5' (string) is coerced to 5 (number)

// Strict equality (===) checks both value and type
console.log(a === b);  // ❌ false → number !== string

/* 📝 Short Notes:
   - `==` allows **type coercion**, meaning it converts operands to the same type before comparing.
   - `===` is **strict**, requiring both value and type to match.
   - Prefer `===` in modern JavaScript to avoid unexpected bugs due to implicit conversions.
*/
