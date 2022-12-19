
// error handling in javascript
// try, catch, finally, throw

try {
    alert("Hello alert");
    alert(x);
    alert("Check error");
} catch (error) {
    alert("inside catch block");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    alert("Check error");
}