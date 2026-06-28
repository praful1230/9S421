// Closure Example: Bank Account


function account() {
    let balance = 0;

    return function deposit() {
        balance += 1500;
        console.log("My Balance:", balance);
    };
}

let user = account();

user();
user();
user();
user();
user();
user();
user();
user();


//counter example

function createCounter() {
    let count = 0;

    return function increment() {
        count++;
        console.log("Count:", count);
    };
}

let counter = createCounter();

counter();
counter();
counter();
counter();
counter();