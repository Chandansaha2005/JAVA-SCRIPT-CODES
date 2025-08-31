let print = console.log
// print(Math.floor(46.5))
// print(Math.ceil(46.6))
// print(Math.max(4, 5))
// print(Math.min(2, 5))
// print(Math.abs(-7))
// print(Math.pow(7, 8))
// print(Math.sqrt(1024))
// print(Math.cbrt(12465024))
// print(Math.log(12465024))

print(Math.random())
for (let i = 0; i < 100; i++)
    print(Math.floor(((Math.random() * 10) - (Math.random() * 10))))
for (let i = 0; i < 100; i++)
    print(Math.floor(Math.random() * 10))

if (Math.random() > 0.5) {
    print("hello")
}
else print("bye")