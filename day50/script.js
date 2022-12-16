

// window.addEventListener("load", function(){
//     console.log("loaded");
// });

// window.addEventListener("unload", function(){
//     console.log("unloaded");
// });
// window.addEventListener("scroll", function(){
//     console.log("scrolled");
// });
/*
window.addEventListener("resize", function(){
    const width = window.outerWidth;
    const height = window.outerHeight;

    console.log(`Width: ${width}, Height: ${height}`);
    
});
*/

const details = document.querySelector("details");

details.addEventListener("toggle", function(e){
    console.log(e.target.open);
});