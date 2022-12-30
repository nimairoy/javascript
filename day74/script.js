"use strict"

// array destructuring
//=======================
// let numbers = [10,20,30,40,50,50];
// let [num1,num2,num3,...num] =numbers;
// console.log(num3);
// console.log(num);


// swap variable
//================
// let a = 10, b = 20;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);

// object destructure
//====================
// const studentsInfo = {
//     id: 101,
//     name: "Nimai Chandra Roy",
//     cgpa: 3.45,
//     lang: {
//         native: "Bangla",
//         beginer: "English"
//     }
// }
// const {id,name,lang,cgpa} = studentsInfo;
// console.log(`${name},${cgpa},${lang.beginer}`);


// function parameter destructure 
//==================================
const studentInfo = ({fullName,gpa}) => {
    console.log(`${student.fullName}, ${student.gpa}`);
}
const student = {
    fullName: "Krishna Chandra",
    gpa: 3.99
}
studentInfo(student);