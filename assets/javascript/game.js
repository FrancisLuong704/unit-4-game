//grabbing any classes from my html that needs text and assigning a variable
var scoreGoalText = document.getElementsByClassName("scoreGoal");
var playerScoreText = document.getElementsByClassName("playerScore");
var winsText = document.getElementsByClassName("wins");
var lossText = document.getElementsByClassName("loss");

//variables for all the points
var scoreGoal = "";
var playerScore = 0;
var wins = 0;
var loss = 0;
var crystal1 = "";
var crystal2 = "";
var crystal3 = "";
var crystal4 = "";

//initialize gaaaame
function initializeGame() {
    scoreGoal = Math.floor((Math.random() * 40) + 20);
    $(".scoreGoal").text(Number(scoreGoal));
    console.log("score: " + scoreGoal);

    playerScore = 0;
    $(".playerScore").text(Number(playerScore));

    $(".wins").text(Number(wins));
    $(".loss").text(Number(loss));

    crystal1 = Math.floor((Math.random() * 10) + 1);
    console.log("crystal1: " + crystal1);

    crystal2 = Math.floor((Math.random() * 10) + 1);
    console.log("crystal2: " + crystal2);

    crystal3 = Math.floor((Math.random() * 10) +1);
    console.log("crystal3: " + crystal3);

    crystal4 = Math.floor((Math.random() * 10) + 1);
    console.log("crystal4: " + crystal4);
}
//calling the function to start everything
initializeGame();

//win/lose conditions
function winlosscon() {
    if (Number(playerScore) === Number(scoreGoal)) {
        alert("Good Job! You Win!");
        wins++;
        initializeGame();
    } else if (Number(playerScore) > Number(scoreGoal)) {
        alert("You Lose! Try Again!");
        loss++;
        initializeGame();
    }
} 

//click functions to add points to playerscore
$(".crystal1").on('click', function(){
    playerScore = Number(playerScore) + Number(crystal1);
    $(".playerScore").text(Number(playerScore));
    winlosscon();
});

$(".crystal2").on('click', function(){
    playerScore = Number(playerScore) + Number(crystal2);
    $(".playerScore").text(Number(playerScore));
    winlosscon();
});

$(".crystal3").on('click', function(){
    playerScore = Number(playerScore) + Number(crystal3);
    $(".playerScore").text(Number(playerScore));
    winlosscon();
});

$(".crystal4").on('click', function(){
    playerScore = Number(playerScore) + Number(crystal4);
    $(".playerScore").text(Number(playerScore));
    winlosscon();
});

//this is gonna make sure none of the crystals number match up
// if (crystal1 === crystal2) || (crystal1 === crystal3) || (crystal1 === crystal4); {
//     crystal1 = Math.floor((Math.random() * 10) + 1);
// }
// if (crystal2 === crystal3) || (crystal2 === crystal4); {
//     crystal2 = Math.floor((Math.random() * 10) + 1);
// }
// if (crystal3 === crystal4) {
//     crystal3 = Math.floor((Math.random() * 10) + 1);
// }