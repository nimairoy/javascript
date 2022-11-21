var myName = "NimaiChandra";

var charactername = myName.charAt(8)

document.write(myName.length + "<br>");

document.write(charactername + "</br>");

var mName = myName.toUpperCase();
document.write(mName + "</br>");

 mName = myName.toLowerCase();
document.write(mName + "</br>");

var text1 = "My Country Name is ";
var text2 = "Bangladesh.";

var text = text1.concat(text2);
document.write(text + "</br>");

document.write(text2.slice(1, 5) + "</br>");

var sliceMethod = text2.slice(2, 7);
document.write(sliceMethod);