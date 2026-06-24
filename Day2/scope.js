// =====================================
// 1. Global Scope
// =====================================

let a = 10;

{
    console.log(a); // accessible because it's global
}


// =====================================
// 2. Block Scope (let / const)
// =====================================

{
    let b = 45;
    const c = 90;

    console.log(b);
    console.log(c);
}

// console.log(b); // ReferenceError
// console.log(c); // ReferenceError


// =====================================
// 3. var is NOT block scoped (function scoped)
// =====================================

{
    var x = 89;
}

console.log(x); // 89


// =====================================
// 4. Function Scope
// =====================================

function f() {
    var y = 10;
    console.log(y);
}

f();

// console.log(y); // ReferenceError


// =====================================
// 5. Your original mistake
// =====================================

function f2() {
    var a = 10;
}

console.log(a); // ReferenceError: a is not defined