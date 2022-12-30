"use strict"

// maping 
const numbers = Array(2,4,6,8,10,15,13,16);

// const squareNumbers = numbers.map((x) => { return(x*x);
// });
// console.log(squareNumbers);



// filtering array

const filterNumber = numbers.filter((x)=>{
    return x<10;
});
console.log(filterNumber);