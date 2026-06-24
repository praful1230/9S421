
//  let: Reassignment is allowed


let age = 20;
age = 21;

console.log("Updated Age:", age); // Output: 21



// const: Reassignment is not allowed


const PI = 3.14;

// PI = 3.14159; //TypeError: Assignment to constant variable.

console.log("Value of PI:", PI);



//  JavaScript is Dynamically Typed


let value = 10;       // Number
value = "hello";      // String
value = true;         // Boolean

console.log("Current Value:", value); // Output: true
console.log("Type:", typeof value);   // Output: boolean