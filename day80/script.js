"use strict"


// how to create promise 
// console.log("Welcome to Promise");

// const promiseOne = new Promise((resolve,reject)=>{
//     let promise = true;
//     if (promise) {
//         resolve("Promise One is completed");
//     }else{
//         reject(new Error("Promise One is incompleted"));
//     }
// });

// const promiseTwo = new Promise((resolve,reject)=>{
//      resolve("Promise two is completed");
// });



// promiseOne.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err.message);
// });
// Promise.all([promiseOne,promiseTwo]).then(([res1, res2]) => console.log(res1, res2));
// // promiseTwo.then((res)=>console.log(res));




// console.log("Bye Promise");

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 is resolved");
    },2000);
});

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise 2 is resolved");
    },3000);
});

Promise.race([promiseThree,promiseFour]).then((res)=>console.log(res));