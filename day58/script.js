

// Browser Object Model

// setTimeout();
// setInterval();


// setTimeout(() => {
//     console.log("We're learning javascript");
// },2000);


// setTimeout(display, 1000);

// function display(){
//     console.log(" hello world!!");
// }

// create a setTimeout Function which will show a message and it will go away  after 2 s 

// task no 1:
// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector("#message");

// saveButton.addEventListener('click', () => {
//     message.textContent = "The Registration is Successful.";
//     setTimeout(()=>{
//         message.textContent = "";
//     },3000);
// });



// task no 2: setInterval
const saveButton = document.querySelector(".save-btn");
const message = document.querySelector("#message");

saveButton.addEventListener('click', counting);

function counting(){
    let count = 1;
    message.textContent = count;
    setInterval(function(){
        count++,
        message.textContent = count;
    },1000);
}
