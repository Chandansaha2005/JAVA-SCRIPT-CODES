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

setTimeout(
    function ourFunction() {
        //defination of Our Function
        console.log("hii")
    }, 2 * 1000);


// for (let i = 1; i <= 30; i++) {
//     setTimeout(
//         function ourFunction() {
//             console.log(i)
//         }, i * 1000);
// }

for (let i = 1; i <= 30; i++) {
    setTimeout(
        function ourFunction() {
            console.log((31 - i))
        }, i * 500);
}
