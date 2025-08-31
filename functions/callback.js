//callback functions are kind of functions which passes though another funtion
function product(a, b, c) {
    return a * b * c;
}
console.log(product(5, 6, 4))

// function fun(x, y) {
//     console.log(x - y)
// }
// fun(product(1, 4, 7), 7)

function fun2(x, y) {
    let a = x(4, 7, 5)//x is the product function here 
    return a - y
}
console.log(fun2(product, 7)) 