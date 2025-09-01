// Creating an alias for console.log
let print = console.log;

// Assigning age without let/const/var (implicitly global, not recommended)
age = 74;

// Conditional logic to categorize age
if (age < 70 && age > 14) {
    print("adult");           // Executes if age is between 15 and 69
}
else if (age > 70) {
    print("Somoy ghoniye eseche"); // Executes if age is above 70
}
else {
    print("child");           // Executes if age is 14 or below
}
