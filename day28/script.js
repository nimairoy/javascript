var names = ["Nil", "lal", "Sabuj", "Kalo", "Holud"];

console.log(names);

names.push("Hello", "Ami");
console.log(names);
names.pop();
console.log(names);

// shift Method 

names.shift();
console.log(names);

// unshift method 
names.unshift("Mui", "tui");
console.log(names);

var numbers = [10, 20, 30, 40, 50];

numbers.splice(3, 0, 80,90);
console.log(numbers);

var newArray = numbers.slice(3);
console.log(newArray);
console.log(numbers);   
numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);