
const button = document.querySelector(".save-btn");
const message = document.querySelector("#message");

button.addEventListener('click', showClock);

function showClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    minutes = formatTimes(minutes);    
    seconds = formatTimes(seconds);

    let times = hours + ":" + minutes + ":" + seconds;
    message.textContent = times;
    setInterval(showClock, 1000);
    
}

function formatTimes(value){
    if(value<10){
        value = "0"+value;
    }
    return value;
}