let print = console.log
brr = [4, "chandan", 63.96, 'p', true, [8, 6, 2, 5, 1]]
print(brr)
//for loop
for (let i = 0; i < brr.length; i++) {
    print(i, brr[i])
}
//forOf loop
for (const i of brr) {
    print(i)
}