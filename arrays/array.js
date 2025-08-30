let print = console.log
arr = [1, 5, 2, 6, 7];
print(arr)
n = arr.length;
print(n)
print("Traverse :-")
for (i = 0; i < n; i++) print(arr[i])

print("first element = ", arr[0])
print("last element = ", arr[4])
arr2 = [4, "chandan", 63.96, 'p', true]
print(arr2)
arr2d = [[5, 9, 3], [7, 4, 5, 8, 9]]
print(arr2d)
brr = [4, "chandan", 63.96, 'p', true, [8, 6, 2, 5, 1]]
print(brr)
for (let i = 0; i < brr.length; i++) {
    print(i, brr[i])
}