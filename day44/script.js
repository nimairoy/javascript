

for(var i=0; i<3; i++){
   document.querySelectorAll(".ourButton")[i].addEventListener("click",function(){
      var text = this.innerHTML;
      console.log(text);
      audioPlay(text);
});
}

function audioPlay(text){  
   switch (text) {
      case "Button1":
      var audio = new Audio("audio/1.mp3");
      audio.play();
      break;

      case "Button2":
      var audio = new Audio("audio/2.mp3");
      audio.play();
      break;
      
      case "Button3":
      var audio = new Audio("audio/3.mp3");
      audio.play();
      break;
   }

}