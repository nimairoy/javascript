
"use strict"
//hoisting and strict mode

let x = 10;
console.log(x);

console.log(name); 
 name = "Nimai Chandra Roy";

const displayHoisting = (x,y) => {
    console.log(`My name is ${name}. and I am ${y} years old.`);
}
displayHoisting("Nimai",25);