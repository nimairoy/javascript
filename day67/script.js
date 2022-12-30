"use strict"

// default function 
// function addNumbers(x,y,z)
// {
//     return x+y+z;
// }
// let numbers = [10,20,30];
// console.log(addNumbers(numbers[0],numbers[1],numbers[2]));

// spread operator
// function addNumbers(x,y,z) {
//     return x+y+z;
// }
// let numbers = [2,3,4];
// // console.log(addNumbers(...numbers));

// let results = [5,10,15,...numbers];

// console.log(results);

// let numbers1 = [1,2,3];
// let numbers2 = [4,5,6];
// // let numbers = numbers1.concat(numbers2);
// let numbers = [...numbers1,...numbers2];
// console.log(numbers);


//======== spread operator in object =========//
let p1 = {
    name : "Nimai Chandra Roy",
    age : 25,
}
let p2 = {
    nationality : "Bangladeshi",
    occupation : "Student",
}
let p = {...p1,...p2}
console.log(p);
