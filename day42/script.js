

var ourBox = document.querySelector(".box");

ourBox.addEventListener("mouseover",function(){
   ourBox.classList.add("addStyle");
});

ourBox.addEventListener("mouseout",function(){
   ourBox.classList.remove("addStyle");
});