// =====================================
// 1. Function Declaration
// =====================================

function add() {
    return 1 + 2;
}

console.log(add()); // 3


// =====================================
// 2. Function without Return Value
// =====================================

function greet() {
    console.log("Hi, Good Morning!");
}

greet();


// =====================================
// 3. Function Expression
// =====================================

let sum = function (a, b) {
    return a + b;
};

console.log(sum(10, 20)); // 30


// =====================================
// 4. Arrow Function
// =====================================

let sayHello = () => {
    console.log("Hello");
};

sayHello();


// =====================================
// 5. Single Parameter Arrow Function
// =====================================

let square = x => x * x;

console.log(square(5)); // 25


// =====================================
// 6. Multiple Parameters
// =====================================

let multiply = (a, b) => a * b;

console.log(multiply(12, 2)); // 24


// =====================================
// 7. Ternary Operator with Arrow Function
// =====================================

let isEven = num => num % 2 === 0 ? "Even" : "Odd";

console.log(isEven(3)); // Odd


// =====================================
// 8. Function Returning Another Function
// =====================================

function solve() {
    function square(num) {
        console.log(num * num);
    }

    return square;
}

let fn = solve();

fn(2); // 4
fn(3); // 9


// =====================================
// 9. Nested Functions
// =====================================

function A() {
    console.log("Hello from A");

    function B() {
        console.log("Hello from B");

        function C() {
            console.log("Hello from C");
        }

        C();
    }

    B();
}

A();


// =====================================
// 10. Functions Stored Inside an Array
// =====================================

let operations = [
    function (a, b) { return a + b; },
    function (a, b) { return a - b; },
    function (a, b) { return a * b; },
    function (a, b) { return a / b; }
];

console.log(operations[0](12, 2)); // Addition
console.log(operations[1](12, 2)); // Subtraction
console.log(operations[2](12, 2)); // Multiplication
console.log(operations[3](12, 2)); // Division