//Map are basically blah blah 
let arr = [1, 7, 6, 8, 20]
let brr = []
// for (const ele of arr) {
//     brr.push(ele * 2)
// }
function double(n) {
    return n * 2;
}
brr = arr.map(double)

function square(n) {
    return n * n;
}
brr = arr.map(square)

function add10(n) {
    return n + 10;
}
brr = arr.map(add10)

brr = arr.map(
    function mul5(n) {
        return n * 5
    }
);

brr = arr.map(
    (n) => {
        return n * 5
    }
);

arr = arr.map(
    (n) => {
        return n * 5
    }
);

arr = arr.map((n) => n * 100);

let print = console.log
print(brr)
print(arr)

