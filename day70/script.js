"use strict"

// for loop vs foreach loop
const students = Array("Nimai","Boishakhi", "Tina");

// for (let i = 0; i < students.length; i++) {
//    console.log(students[i]);
    
// }
// students.forEach(myFunction);

// function myFunction(x) {
//     console.log(x);
// }

students.forEach((x)=>{
    console.log(x);
});

// foreach loop
// Print 1 to 5 
[...Array(5)].forEach((e,x)=>console.log(++x));

// create a array square using forEach Loop and push it in an array

const results = [10,20,30,40];
const updateResults = [];

results.forEach((x)=>{
    updateResults.push(x*x);
});
console.log(updateResults);


// update an array 

const numbers = [1,2,3,4,5];
    console.log(`Number: ${numbers}`);
numbers.forEach((val,index,arr)=>{
    arr[index] = val+5;
});
console.log(`Updated Number: ${numbers}`);