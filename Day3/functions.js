  
// 1. Function Expression
  

let greet = function () {
    console.log("Hi");
};

greet();


  
// 2. Function Returning Another Function
  

function calculate() {
    return function add(a, b) {
        console.log(a + b);
    };
}

let addFunction = calculate();

addFunction(12, 2);


  
// 3. Functions Stored Inside an Array
  

const operations = [
    function (a, b) {
        console.log(a + b);
    },
    function (a, b) {
        console.log(a - b);
    },
    function (a, b) {
        console.log(a * b);
    }
];


// Calling through a variable
let multiply = operations[2];
multiply(1, 2);


// Calling directly
operations[1](7, 4);