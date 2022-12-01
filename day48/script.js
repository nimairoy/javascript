
// Read attentively and understand

//  DOM events 
//  1. Event Object => event type: change, submit, load, unload, open, play, canplay, pause,     playing, progress, ended, resize, scroll, toggle etc.
//  - properties: type, target, preventDefault();

// 2. MouseEvent Object
// 3. FocusEvent Object
// 4. KeyboardEvent Object
// 5. ClipboardEvent Object
// 6. DragEvent Object


// change event work with those elements ::=>
// input tag: text, email, password, checkbox, radio, date, time, search, number, color, range, week, month, url, file, tel.
// select option, textarea

// const input = document.querySelector("input[name=name]");
// input.addEventListener("change", changeHandler);

// function changeHandler(e){
//     // console.log(e.target.value);
//     // console.log(e.target.className);
//     // console.log(e.target.id);
//     // console.log(e.type);
// }

// const checkBox = document.querySelectorAll("input[name=check]");
// // console.log(checkBox);

// Array.from(checkBox).map((check) => {
//     check.addEventListener("change", checkBoxHandler);
// });


// function checkBoxHandler(e){
//     if(e.target.checked){
//         // console.log("Checked");
//         console.log(e.target.value);
//     }
// }

const depart = document.querySelector("select[name=department]");
// console.log(depart);
depart.addEventListener("change", departHandler);

function departHandler(e){
    console.log(e.target.value);
}