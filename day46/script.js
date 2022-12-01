for(var i=0; i<3; i++){
   document.querySelectorAll(".ourButton")[i].addEventListener("click", function(){
      var text = this.innerHTML;
      console.log(text);
      audioPlay(text);
      addAnimation(text);
   });
}

document.addEventListener("keypress",function(event){
   var text = event.key;   
   audioPlay(text);
   addAnimation(text);
});


function audioPlay(text){
   switch(text){
      case "a":
         var audio = new Audio("audio/1.mp3");
         audio.play();
         break;
      case "b":
         var audio = new Audio("audio/2.mp3");
         audio.play();
         break;
      case "c":
         var audio = new Audio("audio/3.mp3");
         audio.play();
         break;         
   }
}

function addAnimation(text){
   var catchText = document.querySelector("."+text);
   catchText.classList.add("animation");

   setTimeout(function(){
      catchText.classList.remove("animation");
   }, 1000);
}