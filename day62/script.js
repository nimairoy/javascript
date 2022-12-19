
// error handling in javascript
// try, catch, finally, throw

const button = document.querySelector('#checkButton');
const p = document.querySelector('p');
button.addEventListener("click", function(){
    const input = document.querySelector('input').value;
    

    try {
        if(input<5){
            throw 'The input is too less';
        }else if(input>10){
            throw 'the input is too large';
        }
    } catch (error) {
        p.textContent = error;
    }




});

