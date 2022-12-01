


function buttonOne(){
    var messageOne = document.querySelector("#para1");
    messageOne.innerHTML = 'You have clicked on the button one';
}

function buttonTwo(){
    document.querySelector("#para1").innerHTML = "You have clicked on button two.";

}

// Small Project 

var myPic = document.querySelector(".card img");
var picDesc = document.querySelector(".card p");

function showPic1(){
    myPic.src = "images/one.jpg";    
    picDesc.innerHTML = "I am a IT Specialist.";
}
 
function showPic2(){
    myPic.src = "images/two.jpg";
    picDesc.innerHTML = "I am a Software Engineer.";
}

function preset(){
    myPic.src = "#";
    picDesc.innerHTML = "";
}

