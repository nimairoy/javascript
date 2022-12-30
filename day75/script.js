"use strict"

// find() method
//=======================
// let numbers = [2,3,4,5,6,7,8,9];
// let firstEvenNumber = numbers.find(x=>x%2===0);
// console.log(`${firstEvenNumber}`);



// findIndex() method
//=======================
// let results = [1,3,3,5,6,7,8,9];
// let firstEvenResult = results.findIndex(x => x%2===0);
// console.log(`Index No: ${firstEvenResult}`);

//apply find and findIndex methods in object
const students = [
    {
        id: 101,
        fullName: "Jhinuk",
        cgpa: 3.57
    },
    {
        id: 102,
        fullName: "Mukta",
        cgpa: 4.69
    },
    {
        id: 103,
        fullName: "Rafi",
        cgpa: 3.77
    },
    {
        id: 104,
        fullName: "Lily",
        cgpa: 4.25
    },
    {
        id: 105,
        fullName: "Susu",
        cgpa: 5
    }
]
// find method 
// const student = students.find(x=> x.cgpa>4);
// console.log(student);

// findIndex method 
const student = students.findIndex(x=> x.cgpa>4);
console.log(student);