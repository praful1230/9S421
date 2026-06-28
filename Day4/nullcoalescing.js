// Nullish Coalescing Operator (??)
let a;
console.log(a ?? "hello");      // hello
console.log("hello" ?? a);      // hello

console.log(0 || "hi");         // hi
console.log(0 ?? "hi");         // 0



// Currying Function
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(1)(2)(3));      // 6