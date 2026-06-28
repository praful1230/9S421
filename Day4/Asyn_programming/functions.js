//setTimeout
// setTimeout(function , delay);

// let s=setTimeout(()=>{
//     console.log("hii from lpu")
// },5000);

// clearTimeout(s);

// setInterval
// setInterval(function , delay);

// let cl=setInterval(() => {
//     console.log("hii ")
// }, 500);

// clearInterval(cl)


// let p =new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("resolved inside settimeout")
//     },10000)
// })

// p.then((m)=>{
//     console.log(m)
// }).catch((err)=>{
// console.log(err)
// })


//promise chaining

// let prom=new Promise((res,rej)=>{
//     res("ok ");
// })

// prom.then((m)=>{
//     console.log(m)
// return " hello 1"
// })
// .then((m)=>{
//     console.log(m)
// return " hello 2"
// }
// ).then((m)=>{
//     console.log(m)
// })



// let p1=new Promise((res,rej)=>{
//     res("p1")
// })

// let p2=new Promise((res,rej)=>{
//     res("p2")
// })

// let p3=new Promise((res,rej)=>{
//     rej("p3")
// })

// Promise.all([p1,p2,p3]).then(console.log).catch(console.log)

// Promise.allSettled([p1,p2,p3]).then((m)=>{
//     console.log(m)
// })

let p1=new Promise((res,rej)=>{
    setTimeout(() => {
        res("Resolved P1")
    }, 7000);
})

let p2=new Promise((res,rej)=>{
    setTimeout(() => {
        res("Resolved P2")
    }, 6000);
})

Promise.race([p1,p2]).then((m)=>{
    console.log(m)
})

