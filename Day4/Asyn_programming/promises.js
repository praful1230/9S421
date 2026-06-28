
//reject case

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Reject inside setTimeout");
    }, 1000);
});

p.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});


// 1. Promise is created.
// 2. Promise state = Pending.
// 3. setTimeout is registered for 1 second.
// 4. After 1 second, reject() is called.
// 5. Promise state becomes Rejected.
// 6. .catch() executes.


// Create Promise
//       ↓
//     Pending
//       ↓
//  setTimeout(1000ms)
//       ↓
//     reject()
//       ↓
//    Rejected
//       ↓
//     .catch()


//resolve case
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved inside setTimeout");
    }, 1000);
});

p.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});


// Call Stack
//     ↓
// Web API (setTimeout)
//     ↓
// Callback Queue
//     ↓
// Event Loop
//     ↓
// Promise settles (resolve/reject)
//     ↓
// .then() or .catch()