const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("cut",function(){
    p.innerText = "You have cut the text.";
});
input.addEventListener("copy",function(){
    p.innerText = "You have copied the text.";
});
input.addEventListener("paste",function(){
    p.innerText = "You have pasted the text.";
});
