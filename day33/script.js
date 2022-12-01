// Guessing Game
// Guess a number from 1 to 5
// Generate a random number between 1 to 5
// if the guess number matches with the random number then 
// Run the game for 5 times
// show the number of wons and losts.


var numOfWon = 0;
var numOfLost = 0;

for(var x = 1; x<=5; x++)
{
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));

    var randomNumber = Math.floor(Math.random()*5)+1;

    if(guessNumber===randomNumber){
        console.log("You are won.");
        numOfWon++;
    }else{
        console.log("You are lost. The random number was "+ randomNumber);
        numOfLost++;
    }
}

document.write("Total won number = " + numOfWon + "<br>");

document.write("Total lost number = " + numOfLost);