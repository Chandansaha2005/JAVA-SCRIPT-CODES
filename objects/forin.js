let chandan = {
    name: "CKS",
    age: 19,
    college: "MCKV",
    isSingle: true
};
let print = console.log
print(chandan)

for (const key in chandan) {
    if (Object.prototype.hasOwnProperty.call(chandan, key)) {
        print(key, chandan[key])
    }
}
for (const key in chandan) {
    print(key, chandan[key])
}
