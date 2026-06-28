// Higher-Order Function (HOF)
// A function that takes another function as an argument
// or returns a function.

function calculate(a, b, operation) {
    return operation(a, b);
}



function add(x, y) {
    return x + y;
}


console.log(calculate(1, 2, add)); // Output: 3