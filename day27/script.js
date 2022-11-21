

var num = new Array();
for(var i = 0; i < 5; i++){
    num[i] = parseInt(prompt("Enter the Number: "));
}

var sum = 0;
for(var i = 0; i <5; i++){
    console.log(num[i]);
    sum = sum + num[i];
}
console.log(sum);

// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// console.log(num[3]);
// console.log(num[4]);
// console.log(num[5]);
// console.log(num.length)