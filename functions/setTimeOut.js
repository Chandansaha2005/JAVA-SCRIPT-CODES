function hello() {
    console.log("Hello!!")
}
function mello() {
    console.log("Mello!!")
}
hello()
mello()

// setTimeout(hello, 2 * 1000);//function will be called after 2 sec
// setTimeout(mello, 6 * 1000);//function will be called after 6 sec

// setTimeout(hello, 2 * 1000);//function will be called after 2 sec
// setTimeout(mello, 1 * 1000);//function will be called after 1 sec
// // so in this case the second function will occur first
//funtion with in the set time out 
setTimeout(
    function ourFunction() {
        //defination of Our Function
        console.log("hii")
    }, 2 * 1000);


for (let i = 1; i <= 30; i++) {
    setTimeout(
        function ourFunction() {
            con// Function declarations
function hello() {
    console.log("Hello!!");
}
function mello() {
    console.log("Mello!!");
}

// Immediate function calls
hello();  // Output: Hello!!
mello();  // Output: Mello!!

// ❌ These are commented out but demonstrate delayed execution using setTimeout
// setTimeout(hello, 2 * 1000); // Calls hello after 2 seconds
// setTimeout(mello, 6 * 1000); // Calls mello after 6 seconds

// ❌ In this version, mello would execute before hello due to shorter delay
// setTimeout(hello, 2 * 1000);
// setTimeout(mello, 1 * 1000);

/* 📝 Short Note:
   - `setTimeout(func, delay)` schedules a function to run after a specified delay (in milliseconds).
   - Execution order depends on the delay, not the order in code.
*/

// Anonymous function passed directly into setTimeout
setTimeout(
    function ourFunction() {
        console.log("hii");  // Output after 2 seconds
    },
    2 * 1000
);

/* 📝 Short Note:
   - You can define and pass a function directly into `setTimeout`.
   - This is useful for one-off tasks or inline logic.
*/

// Loop to print numbers 1 to 30, one per second
for (let i = 1; i <= 30; i++) {
    setTimeout(
        function ourFunction() {
            console.log(i);  // Prints i after i seconds
        },
        i * 1000
    );
}

/* 📝 Short Note:
   - Each iteration schedules a print after `i` seconds.
   - This creates a timed sequence of outputs.
*/

// Loop to print countdown from 30 to 1, every 0.5 seconds
for (let i = 1; i <= 30; i++) {
    setTimeout(
        function ourFunction() {
            console.log(31 - i);  // Countdown logic
        },
        i * 500
    );
}

/* 📝 Short Note:
   - `(31 - i)` starts from 30 and decreases to 1.
   - Faster interval (500ms) creates a quicker countdown.
*/

// Loop to print 10 random numbers with increasing delay
for (let i = 1; i <= 10; i++) {
    setTimeout(
        function rand() {
            console.log(Math.random());  // Random number between 0 and 1
        },
        i * (50 * i)  // Increasing delay pattern
    );
}

/* 📝 Short Note:
   - `Math.random()` generates a float between 0 and 1.
   - Delay increases quadratically: 50ms, 200ms, 450ms, etc.
   - Useful for staggered animations or randomized effects.
*/
sole.log(i)
        }, i * 1000);
}

for (let i = 1; i <= 30; i++) {
    setTimeout(
        function ourFunction() {
            console.log((31 - i))
        }, i * 500);
}

for (i = 1; i <= 10; i++) {
    setTimeout(
        function rand() {
            console.log(Math.random())
        }, i * (50 * i)
    );
}
