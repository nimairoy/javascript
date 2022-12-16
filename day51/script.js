


const buttons = document.querySelectorAll(".btn");


Array.from(buttons).map((button) => {
    button.addEventListener("click", function(e){
        console.log(e.target.innerHTML);
        // console.log(e.target.className);
        // console.log(e.target.id);
        // console.log(e.target);
        // console.log(e.target.innerText);
    });
});










// const mouseEvent = document.querySelector("#myDiv");

// mouseEvent.addEventListener("click", function(e){
//     console.log(e.target.innerText)
// });
// mouseEvent.addEventListener("click", function(e){
//     console.log(e.target.innerHTML)
// });
// mouseEvent.addEventListener("click", function(e){
//     console.log("This the id name: "+e.target.id)
// });
// mouseEvent.addEventListener("click", function(e){
//     console.log("This the class name: "+e.target.className)
// });

// mouseEvent.addEventListener("click", function(){
//     console.log(" 1. Clicked");
// });
// mouseEvent.addEventListener("dblclick", function(){
//     console.log(" 2. There was double Clicked");
// });
// mouseEvent.addEventListener("mousedown", function(){
//     console.log(" 3. There was mouse down");
// });
// mouseEvent.addEventListener("mouseenter", function(){
//     console.log(" 4. There was mouse Enter");
// });
// mouseEvent.addEventListener("mouseout", function(){
//     console.log(" 5. There was mouse out");
// });

// mouseEvent.addEventListener("mouseup", function(){
//     console.log(" 5. There was mouse up");
// });
// mouseEvent.addEventListener("mouseover", function(){
//     console.log(" 5. There was mouse over");
// });
// mouseEvent.addEventListener("mousemove", function(){
//     console.log(" 5. There was mouse move");
// });
// mouseEvent.addEventListener("mouseleave", function(){
//     console.log(" 5. There was mouse leave");
// });
// mouseEvent.addEventListener("mousemove", function(e){
//     console.log("offsetX: "+e.offsetX +" "+ "offsetY: "+e.offsetY);
// });




