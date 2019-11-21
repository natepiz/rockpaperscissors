// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


//- [ ] Outside of your click handler,
// declare the variables you'll need to track the
// user choice, computer choice and winner and 
//assign them values of empty strings.

// DOCUMENT READY FUNCTION BELOW


let human = "";
let computer = "";
let winner = "";
let random = ;
$("#shoot").click(function() {
    let input = $("input").val();
    $("#userChoice").html(input);
    random =  Math.random() 

    if(random < .33 ){
        computer = "rock";
} else if(random >.66){
        computer = "paper"
} else {
    computer = "sissors"
}

// check human choice vs computer choice
/**

paper beat rocks\
rock beats sissors
sissors beats paper
paper = paper

 *//
if(
    human === "paper" && computer === "rock" || 
    human === "rock" && computer === "sissors" || 
    human === "sissors" && computer === "paper"
) {
    winner = human;
}  else if(human === "rock" && computer === "sissors") {
    winner = human;   
}  else if (human === "sissors" && computer === "paper"){
    winner = human;
}  else if (human === computer){
     winner = "ya both suck :)";
 }
});

