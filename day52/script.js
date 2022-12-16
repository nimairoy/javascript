 const textarea = document.querySelector("textarea");

// // textarea.addEventListener("keydown", function(){
// //     console.log("key down");
// // });
// // textarea.addEventListener("keypress", function(){
// //     console.log("key press");
// // });
// // textarea.addEventListener("keyup", function(){
// //     console.log("key up");
// // });

// textarea.addEventListener("keyup", function(e){
//     console.log(e.key);
// });

// textarea.addEventListener("keyup",function(e){
//     console.log(e.code)
// });

// textarea.addEventListener("keyup", function(e){
//     console.log(e.keyCode);
// });

// textarea.addEventListener("keyup", function(e){
//     console.log(e.shiftKey);
// });

// textarea.addEventListener("keyup", function(e){
//     if(e.shiftKey){
//         console.log("Shift + " + e.key+" is pressed")
//     }
// });

textarea.addEventListener("keydown", function(e){
    if(e.repeat){
        console.log("Do not repeat");
    }
});