var number1 = Number(prompt("Enter a Number : "));
var number2 = Number(prompt("Enter a Number : "));
var number3 = Number(prompt("Enter a Number : "));

// if(number1>number2 && number1>number3){
//     console.log("The Larger Number is: " + number1);
// }
// else if(number2>number1 && number2>number3){
//     console.log("The Larger Number is: " + number2);
// }
// else{
//     console.log("The Larger number is: " + number3);
// }

var result = number1>number2 && number1>number3 ? "Larger Number: " + number1 : number2>number1 && number2>number3 ? " Larger Number: " + number2 : "Larger Number: " + number3;

console.log(result);