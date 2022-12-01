
var photos = ["images/image1.jpg","images/image2.jpg","images/image3.jpg"];
var imgTag = document.querySelector("img");

var count = 0;

function prev(){
    count--
    if(count < 0){
        count = photos.length-1;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}

function next(){
    count++;
    if(count>=photos.length){
        count = 0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
   
}
