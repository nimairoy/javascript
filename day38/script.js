
var link = document.getElementsByTagName("a")[0];

link.href = "http://www.nimai.epizy.com";


//add text

var linkButton = document.createElement("a");
linkButton.href = "#";
var link = document.createTextNode("See More..");
linkButton.appendChild(link);

var parentDiv = document.getElementById("div1");
parentDiv.appendChild(linkButton);

//remove text
var heading = document.getElementsByTagName("h1")[1];
parentDiv.removeChild(heading);



// add text in before
var firstHeading = document.createElement("h1");
var headingText = document.createTextNode("This is the adding text in before the document");
firstHeading.appendChild(headingText);
var prntDiv = document.getElementById("div1");
var heading0 = document.getElementsByTagName("h1")[0];
prntDiv.insertBefore(firstHeading,heading0);

