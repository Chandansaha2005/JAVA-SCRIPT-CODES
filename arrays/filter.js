let arr = [8, 2, 4, 5, 6, 3, 9, 7]
let print = console.log
print(arr)
function keepEven(ele) {
    return (ele % 2 == 0)//this will send true for the even nums
}
let brr = arr.filter(keepEven)// this will filter out the element which are giving true
print(brr)

function keepOdd(ele) {
    return (ele % 2 != 0)//this will send true for the odd nums
}
brr = arr.filter(keepOdd)// this will filter out the element which are giving true
print(brr)

brr = arr.filter(
    function keepOdd(ele) {
        return (ele % 2 != 0)//this will send true for the odd nums
    }
)// this will filter out the element which are giving true
print(brr)

brr = arr.filter((ele) => {
    return (ele % 2 != 0)//this will send true for the odd nums
}
)// this will filter out the element which are giving true
print(brr)

brr = arr.filter((ele) => (ele % 2 != 0))//this will send true for the odd nums & filter out the element which are giving true
print(brr)

brr = arr.filter(ele => (ele < 5))//this will send true for the nums smaller than 5 & filter out the element which are giving true
print(brr)

