var num1 = prompt("Enter the First Number: ") ;
var num2 = prompt("Enter the second Number: ");

 num1 = parseInt(num1, 10);
 num2 = parseInt(num2, 10);


var result;

result = num1 + num2;
document.write(num1 + " + " + num2 + " = " + result + "</br>");

result = num1 - num2;
document.write(num1 + " - " + num2 + " = " + result + "</br>");

result = num1 * num2;
document.write(num1 + " * " + num2 + " = " + result + "</br>");

result = num1 / num2;
document.write(num1 + " / " + num2 + " = " + result + "</br>");

result = num1 % num2;
document.write(num1 + " % " + num2 + " = " + result + "</br>");