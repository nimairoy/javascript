
const input = document.querySelector("input");

input.addEventListener("blur", function(e){
    console.log(e.target.value);
    input.style.backgroundColor = "green";
    input.style.color = "white";
    input.style.outline = "none";
    input.value = e.target.value.toUpperCase();
});

input.addEventListener("focus", function(e){
    input.style.color = "white";
    input.style.backgroundColor = "red";
    input.style.outline ="none";
    input.style.fontSize = "24px";
});


// input.addEventListener("focusin", function(e){
//     console.log("The focusin event is occured");
// })
// input.addEventListener("focusout", function(e){
//     console.log("The focusout event is occured");
// })