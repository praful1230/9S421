// Creating a Promise

let p = new Promise((resolve, reject) => {
    let state = 0;

    if (state) {
        resolve("Promise Resolved");
    } else {
        reject("Promise Rejected");
    }
});



// Consuming the Promise

p.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});