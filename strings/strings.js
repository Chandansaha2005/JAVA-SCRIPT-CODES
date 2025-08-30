let print = console.log
let s = "chandan"
print(s);
print(s.length)
let s2 = "chandan is a coder"
print(s2);
print(s2.length)

for (let index = 0; index < s.length; index++) {
    print(s[index])
}
print("\n")
for (const i of s) {
    print(i)
}
print("\n")
// s.forEach(i => {
//     print(i)
// }); /// for each Not work for forEach loop