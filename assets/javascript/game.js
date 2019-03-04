//global variables
var totalPoints = 0;
var wins = 0;
var losses = 0;

//stores a random number from 19-120
var targetNumber = Math.floor(Math.random() * 101) + 19;

//displays the target number
$(".targetNumber").text(targetNumber);
//displays wins
$("#winCount").text(wins);
//displays losses
$("#lossCount").text(losses);
//displays total score
$("#totalScore").text(totalPoints);

//assigns each gem a random value one by one
$("#jadeite").attr("gemValues", Math.floor(Math.random() * 11) + 1);
$("#kunzite").attr("gemValues", Math.floor(Math.random() * 11) + 1);
$("#nephrite").attr("gemValues", Math.floor(Math.random() * 11) + 1);
$("#zoisite").attr("gemValues", Math.floor(Math.random() * 11) + 1);

//gem onclick function
$(".gem").on("click", function () {
    //variable that stores gem values
    var gemValue = $(this).attr("gemValues");
    console.log("gemvalue: " + gemValue);
    //Converts gemValues to integer. Adds gem values and assigns value to totalPoints variable.
    totalPoints += parseInt(gemValue);
    console.log("totalpoints: " + totalPoints);
    $("#totalScore").text(totalPoints);

    //winning condition
    if (totalPoints === targetNumber) {
        wins++;
        $("#winCount").text(wins);
        resetGame();
    }
    //losing condition
    else if (totalPoints > targetNumber) {
        losses++;
        $("#lossCount").text(losses);
        resetGame();
    }
});

function resetGame() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $(".targetNumber").text(targetNumber);
    totalPoints = 0;
    $("#totalScore").text(totalPoints);
    $("#jadeite").attr("gemValues", Math.floor(Math.random() * 11) + 1);
    $("#kunzite").attr("gemValues", Math.floor(Math.random() * 11) + 1);
    $("#nephrite").attr("gemValues", Math.floor(Math.random() * 11) + 1);
    $("#zoisite").attr("gemValues", Math.floor(Math.random() * 11) + 1);
}