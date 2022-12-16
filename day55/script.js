
const myDiv = document.querySelector("#my-div");
const para = document.querySelector("#para");

para.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("key", e.target.id);
});

myDiv.addEventListener("dragover", function(e){
    e.preventDefault();
})
myDiv.addEventListener("drop", function(e){
    let data = e.dataTransfer.getData("key");
    myDiv.appendChild(document.getElementById(data));
    e.preventDefault();
})