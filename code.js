//Image For The Green Dot -
https://www.clipartmax.com/middle/m2i8Z5Z5d3A0Z5G6_green-dot-transparent-background/
//Image For The Red Dot -
http://clipart-library.com/free/red-circle-with-transparent-background.html
//List to store score

var highestScores = [];
//Variable for score
var score = 0;
onEvent("startButton", "click", function( ) {
    startGame(1000);
});
onEvent("greenDot", "mouseover", function( ) {
    scoreFunctionTwo();
});
onEvent("redDot", "mouseover", function( ) {
    scoreFunction();
});
onEvent("redDot2", "mouseover", function( ) {
    scoreFunctionThree();
});
//Sets times to 10 and score to 0. Begins time loop when start button is pressed. Also calls the organize function
function startGame(timeLoopValue) {
    var time = 10;
    score = 0;
    setScreen("gameScreen");
    setText("scoreBox", "0");
    timedLoop(timeLoopValue, function() {
    time = time - 1;
    setText("timer", time);
    if (time == 0) {
        stopTimedLoop();
        setScreen("mainMenu");
        organize(getNumber("scoreBox"));
        setText("bestScoreBox", ("Previous Scores: " + "\n") + highestScores);
    console.log(highestScores);
    }
    });
}
//Functions for when the user hovers over the dots (either +1 or -2)
function scoreFunctionTwo() {
    score = score + 1;
    setText("scoreBox", score);
    setProperty("greenDot", "x", randomNumber(30, 275));
    setProperty("greenDot", "y", randomNumber(20, 275));
    setProperty("redDot", "x", randomNumber(30, 275));
    setProperty("redDot2", "x", randomNumber(30, 275));
    setProperty("redDot2", "y", randomNumber(20, 275));
    setProperty("redDot", "y", randomNumber(20, 275));
}
function scoreFunction() {
    score = score - 2;
    setText("scoreBox", score);
}
function scoreFunctionThree() {
    score = score - 2;
    setText("scoreBox", score);
}
//Functions with parameter 'number' to determine where the value will be placed in the list. Also determines message that will be displayed
function organize(number) {
    var index = 0;
    setText("commentBox", "New High Score!");
    for (var i = 0; i < highestScores.length; i++) {
        if (number == highestScores[i]) {
            setText("commentBox", "You Tied With Another Score!");
        } else if (number > highestScores[0]) {
            setText("commentBox", "New High Score!");
        } else if ((number < highestScores[i])) {
        index = i + 1;
            setText("commentBox", "Keep Trying!");
        }
}
insertItem(highestScores, index, number);
}