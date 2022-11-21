// Create a function name highestRunScorer
// Create a two dimensional Array
// Print the highest Scorer from the two dimensional Array


function highestRunScorer(playersInfo){
    
    var highestScore = playersInfo[0][1];
    var highestScorer = playersInfo[0][0];

    for(var i = 1; i < playersInfo.length; i++){
        if(highestScore<playersInfo[i][1]){
            highestScore = playersInfo[i][1];
            highestScorer = playersInfo[i][0];
        }
    }
    return highestScorer;

}

var playersInfo = [
    ["Rahim", 70],
    ["Karim", 80],
    ["Rabeya", 600],
    ["Kamal", 90],
    ["Jhuma", 50],
    ["Kashem", 98],
];
var name = highestRunScorer(playersInfo);

console.log(name);



// function highestRunScorer(playersInfo){

//     var highestScore = playersInfo[0][1];
//     var highestScorer = playersInfo[0][0];

//     for(var x = 1; x < playersInfo.length; x++){

//         if(highestScore<playersInfo[x][1]){
//             highestScore = playersInfo[x][1];
//             highestScorer = playersInfo[x][0];
//         }

//     }
//     return highestScorer;
// }

// var playersInfo = [
//     ["Krishna", 100],
//     ["Balaram", 300],
//     ["Sridam", 200],
//     ["Subol", 80],
//     ["Kanai", 500],
// ];
// var name = highestRunScorer(playersInfo);
// console.log(name);

