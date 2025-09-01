//Map are basically blah blah 
let arr = [1, 7, 6, 8, 20]
let brr = []
// for (const ele of arr) {
//     brr.push(ele * 2)
// }
function double(n) {
    return n * 2;
}
function square(n) {
    return n * n;
}
brr = arr.map(square)
let print = console.log
print(brr)

