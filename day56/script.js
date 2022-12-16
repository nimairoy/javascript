

const myDiv = document.querySelector(".myDiv");

const p1 = myDiv.children[0];
p1.textContent = "Hello World!!";

const p2 = myDiv.children[1];
p2.textContent = location.href;

const p3 = myDiv.children[2];
p3.textContent = location.port;

const p4 = myDiv.children[3];
p4.textContent = location.hostname;

const p5 = myDiv.children[4];
p5.textContent = location.pathname;

const visitButton = document.querySelector("#visitMyWebsite");
visitButton.addEventListener("click", function(){
    location.assign("http://www.nimai.epizy.com");
});