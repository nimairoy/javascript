
// Popup Boxes

// alert 
// confirm
// prompt

function deleteMessage(){
    const h1 = document.createElement("h1");
    let text;

    const name = prompt("Enter Your Name: ");
    if(name == null || name == ""){
        text =  "Empty";
    }else{
        text = "Hello " + name;
    }
   let textNode = document.createTextNode(text);
   h1.appendChild(textNode);
   document.body.appendChild(h1);
}
deleteMessage();



// alert("Error Here");

// function deleteSomething(){
//    let value = confirm("Do you want to delete ?");
//    if(value){
//     console.log("Deleted");
//    }else{
//     console.log("Not Deleted");
//    }
// }
// deleteSomething();
