"use strict"

// object literals

// function studentInfo(name,age){
//     return {
//         name:name,
//         age:age
//     }
// }
// console.log(studentInfo("Nirmal Chandra Roy", 24));

function studentInfo(name,age){
        return {
            name, //change is here
            age     // change is here
        }
}
// console.log(studentInfo("Nirmal Chandra Roy", 24));

// let message = {
//     body : function(){
//         return `Hi, I am an object Function`;
//     }
// }
// console.log(message.body());
let message = {
    body(){         //here is object literals changed
        return `Hi, I am an object Function`;
    }
}
console.log(message.body());

let message2 = {
    'body2 name'(){         //here is object literals changed
        return `Hello Oject Literal, Everything is work well`;
    }
}

console.log(message2['body2 name']());