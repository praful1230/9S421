 
// 1. typeof Operator
 

console.log(typeof 45);        // "number"
console.log(typeof "ftft");    // "string"
console.log(typeof NaN);       // "number"
console.log(typeof []);        // "object"


 
// 2. Truthy Values
 

console.log(Boolean([]));      // true
console.log(Boolean({}));      // true

let a = "false";

if (a) {
    console.log("true");
} else {
    console.log("false");
}


 
// 3. Type Coercion
 

let s1 = "0" + 1;
console.log(s1);               // "01"
console.log(typeof s1);        // "string"

let s2 = "10" - 1;
console.log(s2);               // 9
console.log(typeof s2);        // "number"


 
// 4. Type Conversion
 

let str = String(1234);
console.log(typeof str);       // string

let num1 = Number("12344");
console.log(typeof num1);      // number

let num2 = parseInt("12345");
console.log(typeof num2);      // number


 
// 5. Spread Operator
 

let arr = [1, 2, 3, 4];
console.log(...arr);


 
// 6. Array Reference Copy
 

let arr1 = [1, 2, 3];

let arr2 = arr1;
arr2[0] = 9;

console.log(arr1);             // [9, 2, 3]


 
// 7. Shallow Copy
 

let arr3 = [...arr1];
arr3[0] = 100;

console.log(arr1);             // [9, 2, 3]
console.log(arr3);             // [100, 2, 3]


 
// 8. Deep Copy
 

let obj1 = {
    age: 23,
    city: {
        name: "Ahmedabad"
    }
};

let obj2 = structuredClone(obj1);

obj1.age = 22;
obj2.city.name = "Goa";

console.log(obj1);
console.log(obj2);