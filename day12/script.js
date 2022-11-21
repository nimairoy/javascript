// var celsius = prompt("Enter The Celsius Number: ");

// var farenheit = (celsius*(9/5)) + 32;

// document.write("Farenheit = " + farenheit);



var farenheit = parseFloat(prompt("Enter the Farenheit Number: "));

var cels = (farenheit-32)*5/9;

document.write( farenheit + "<sup> o </sup>" + "F" + " = "  + cels.toFixed(3) + "<sup> o </sup>" + "C") ;
























