



function highestScore(score){
    var max = score[0];
    for(var i = 1; i < score.length; i++){
        if(max < score[i]){
            max = score[i];
        }
        
    }
    return max;
}

var score = [10,20,30,40,50];
var highestScores = highestScore(score);
console.log(highestScores);








// function highestScores(scores){
//     var max = scores[0];
//     for(var i = 1; i < scores.length; i++){
//         if(max < scores[i]){
//             maxScore = scores[i];
//         }
//     }
//     return maxScore;
// }
// var scores = [80, 30, 66, 99, 20, 60];
// var highestScore = highestScores(scores);
// console.log(highestScore);