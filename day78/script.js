
// callback function and higher order function

// const numberSquare = (x) =>{
//     console.log(`Square of ${x} is ${x*x}`);
// }
// // numberSquare(4);

// const higherOrderFunction = (y, callback) => {
//     callback(y);
// }
// higherOrderFunction(3,numberSquare);


// const task1 = (callback) =>{
//     console.log(`task one`);
//     callback();
// }
// const task2 = (callback) =>{
//     setTimeout(()=>{
//         console.log(`task two. data loading`);
//         callback();
//     },3000);
// }
// const task3 = (callback) =>{
//     setTimeout(()=>{
//         console.log(`task three`);
//         callback()
//     },1000);
// }
// const task4 = (callback) =>{
//     console.log(`task four`);
//     callback();
// }
// const task5 = () =>{
//     console.log(`task five`);
// }
// // calling the function 
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 task5();
//             });
//         });
//     });
// });
console.log(`Hi`);
const button = document.querySelector('button').addEventListener("click",()=>{
    console.log(`the button is clicked`);
});
console.log(`Bye`);