
var len = document.querySelectorAll(".ourButton").length;

for(var i = 0; i<len; i++){
   var ourBtn = document.querySelectorAll(".ourButton")[i];
   ourBtn.addEventListener("click", function(){
      var text = this.innerHTML;
      document.querySelector("h1").innerHTML = text + " is clicked";
   });
}

