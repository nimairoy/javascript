"use strict"


// arrow function part 2

// create a program which return the students name those who are got the number greater than 3.00

const studentsInfo = [
    {   
        id : 101,
        name: "Rabeya Khatun",
        gpa : 2.99
    },
    {   
        id : 102,
        name: "Mohosena Akhter",
        gpa : 3.55
    },
    {   
        id : 103,
        name: "Rumi Apu",
        gpa : 3.85
    },
]
// traditional function 
function studentNames(){
   return studentsInfo.filter(function(x){
        return x.gpa > 3;
    }).map(function(y){
        return y.name;
    });
}
console.log(studentNames());

// arrow function 
const studentNamesTwo =()=>{return studentsInfo.filter((x) => x.gpa>3).map((y)=> y.name)}
console.log(studentNamesTwo());