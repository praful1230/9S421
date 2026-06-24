// =====================================
// 1. ARRAY OPERATIONS
// =====================================

let a = ["hello", 24, true];

a.push("grapes");   // add at last
a.pop();            // remove from last
a.shift();          // remove from first
a.unshift("rahul"); // add at first

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);


// =====================================
// 2. LOOP THROUGH ARRAY
// =====================================

for (let f of a) {
    console.log(f);
}


// =====================================
// 3. FOR LOOP
// =====================================

for (let i = 0; i < 6; i++) {
    console.log(i);
}


// =====================================
// 4. DO-WHILE LOOP
// =====================================

let c = 1;

do {
    console.log(c);
    c++;
} while (c <= 10);


// =====================================
// 5. OBJECT
// =====================================

let obj = {
    name: "harsh",
    age: 23
};

console.log(obj.name);
console.log(obj["age"]);

for (let k in obj) {
    console.log(k, obj[k]);
}


// =====================================
// 6. TEMPLATE LITERAL
// =====================================

let name = "hello";

console.log(`${name}`);