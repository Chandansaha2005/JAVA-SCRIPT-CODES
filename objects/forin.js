// Declaring an object with multiple key-value pairs
let chandan = {
    name: "CKS",
    age: 19,
    college: "MCKV",
    isSingle: true
};

// Creating an alias for console.log
let print = console.log;

// Printing the entire object
print(chandan);  
// Output: { name: 'CKS', age: 19, college: 'MCKV', isSingle: true }

/* 📝 Short Note:
   - Objects in JavaScript store data as key-value pairs.
   - You can access properties using dot notation (chandan.name) or bracket notation (chandan["name"]).
*/

// Iterating over object properties with a safety check
for (const key in chandan) {
    if (Object.prototype.hasOwnProperty.call(chandan, key)) {
        print(key, chandan[key]);  // Prints key and its corresponding value
    }
}

/* 📝 Short Note:
   - `for...in` loops over all enumerable properties, including inherited ones.
   - `hasOwnProperty()` ensures only the object's own properties are accessed, avoiding prototype pollution.
*/

// Iterating again without the safety check
for (const key in chandan) {
    print(key, chandan[key]);  // Still works fine here since no inherited properties exist
}

/* 📝 Short Note:
   - In simple cases like this, skipping `hasOwnProperty()` is safe.
   - But in complex objects or when extending prototypes, it's best to include the check.
*/
