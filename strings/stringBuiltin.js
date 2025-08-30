let print = console.log
let s = "ChaNdan"
print(s)
print(s.toUpperCase())// make a version of my og string
print(s)// no change in og string
print(s.toLowerCase())

let s2 = "    javascript  "
print(s2, s2.length)
print(s2.trim(), s2.trim().length)

print(s.indexOf('a')) // 1st index where it found 
print(s.lastIndexOf('a'))// last index where it found 
print(s.charAt(3))
print(s[3])
print(s.slice(2))//string from 2 no. index to rest
print(s.slice(2, 5))//string from 2 no. index to 5 no.

let s3 = "chandan saha is a student of MCKV"
print(s3)
let arr = s3.split(" ")
print(arr)
for (const element of arr) {
    print(element)
}