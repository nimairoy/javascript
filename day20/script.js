// for(var i = 1; i <= 10; i = i + 1){
//     document.write(" " + i);
// }


var i = 1;
var sum = 0;
while(i <= 100){
    if(i%3==0 && i%5==0){    
        document.write(" " + i)    
         sum = sum + i;
    }
    i = i + 1;
}
document.write(" The Sum = " + sum);