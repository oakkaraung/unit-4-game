var targetNum = Math.floor((Math.random() * 100) + 19);
var gemArray = [];
var totScore = 0;
var wins = 0;
var losses = 0;
for (var x = 0; x < 4; x++) {
    gemArray.push(Math.floor((Math.random() * 12) + 1))
}
console.log(gemArray);
$("#target").html(targetNum);
$("#redBtn").click(function() {
    totScore += gemArray[0];
    $("#userScore").html(totScore);
    console.log("target: " + targetNum);
    console.log("score: " + totScore);
    if (totScore === targetNum) {
        wins++;
        $("#wins").html(wins);
        gameEnd()
        alert("win");
    }
    
    else if (totScore > targetNum) {
        losses++;
        $("#losses").html(losses);
        gameEnd()
        alert("loss");
    }
})
$("#blueBtn").click(function() {
    totScore += gemArray[1];
    $("#userScore").html(totScore);
    console.log("target: " + targetNum);
    console.log("score: " + totScore);
    if (totScore === targetNum) {
        wins++;
        $("#wins").html(wins);
        gameEnd()
        alert("win");
    }
    
    else if (totScore > targetNum) {
        losses++;
        $("#losses").html(losses);
        gameEnd()
        alert("loss");
    }
})
$("#yellowBtn").click(function() {
    totScore += gemArray[2];
    $("#userScore").html(totScore);
    console.log("target: " + targetNum);
    console.log("score: " + totScore);
    if (totScore === targetNum) {
        wins++;
        $("#wins").html(wins);
        gameEnd()
        alert("win");
    }
    
    else if (totScore > targetNum) {
        losses++;
        $("#losses").html(losses);
        gameEnd()
        alert("loss");
    }
})
$("#greenBtn").click(function() {
    totScore += gemArray[3];
    $("#userScore").html(totScore);
    console.log("target: " + targetNum);
    console.log("score: " + totScore);
    if (totScore === targetNum) {
        wins++;
        $("#wins").html(wins);
        gameEnd()
        alert("win");
    }
    
    else if (totScore > targetNum) {
        losses++;
        $("#losses").html(losses);
        gameEnd()
        alert("loss");
    }
})

function gameEnd() {
    targetNum = Math.floor((Math.random() * 100) + 19);
    totScore = 0;
    $("#userScore").html(totScore);
    for (var x = 0; x < gemArray.length; x++) {
        gemArray[x] = Math.floor((Math.random() * 12) + 1)
    }
    $("#target").html(targetNum);
}