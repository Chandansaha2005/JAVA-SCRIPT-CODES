let print = console.log
let arr = [4, 2, 5, 8, 6, 3]
print(arr)

function sum(a, b) {
    return a + b;
}
let s = arr.reduce(sum)
/*a=4,b=2..... a=(a+b)=6,b=5
 *a=6,b=5..... a=11,b=8
 * .
 * .
 * .
 * .
 * so on
 */
print(s)

s = arr.reduce(
    function sum(a, b) {
        return a - b;
    }
)
print(s)

s = arr.reduce((a, b) => {
    return a - b;
}
)
print(s)

s = arr.reduce((a, b) => a - b)
print(s)
