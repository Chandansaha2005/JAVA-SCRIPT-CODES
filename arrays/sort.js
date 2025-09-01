let print = console.log
let arr = [4, 2, 8, 5, 9, 6]
print(arr.sort())
function decn(a, b) {
    return b - a;
}
print(arr.sort(decn))

print(arr.sort(
    function decn(a, b) {
        return b - a;
    }
))

print(arr.sort((a, b) => {
    return b - a;
}
))

print(arr.sort((a, b) => b - a))

print(arr.sort((a, b) => b - a))

// .sort() gives wrong and for [-2,4,-9,3] ->>> [-2,-9,3,4]
arr = [-2, 4, -9, 3]
print(arr.sort())
print(arr.sort((a, b) => a - b))// proper actual sorting

print(arr.sort((a, b) => Math.abs(a) - Math.abs(b)))
