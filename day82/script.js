"use strict"
console.log("Hello");
const task1 = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("task 1 is completed");
    })
}
const task2 = ()=>{
    return new Promise((resolve,reject)=>{
        reject("task 2 is not completed");
    })
}
const task3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("task 3 is completed");
        },2000)
    })
}
const task4 = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("task 4 is completed");
    })
}

const callAllTasks = async() => {
    try {
     const t1 = await task1();
    console.log(t1);
    const t2 = await task2();
    console.log(t2);
    const t3 = await task3();
    console.log(t3);
    const t4 = await task4();
    console.log(t4);
    } catch (error) {
        console.log(error);
    }
}
callAllTasks();
console.log("Bye");