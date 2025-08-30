let print = console.log
brr = [4, 5, 2, 3, 6]
print(brr)
//for loop
for (let i = 0; i < brr.length; i++) {
    print(i, brr[i])
}
//forOf loop
for (const i of brr) {
    print(i)
}
//forEach loop
brr.forEach((element, index) => {
    print(element, index)
});

arr = [4, 5, 2, 3, 6, 8]
print(arr)
// for (let j = 0; j < arr.length; j++)
//     arr[j] = arr[j] * 2
// print(arr)

// for (const ele of arr) {
//     ele*=2
// }
// print(arr)// error

arr.forEach((element, i) => {
    arr[i] = element * 2
});
print(arr)