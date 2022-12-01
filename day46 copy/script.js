var count = 0;
document.querySelector("textarea").addEventListener("keypress",function(event){
   count++;
   var letter = event.key;
   document.querySelector("h1").innerHTML = letter + " is clicked";
});