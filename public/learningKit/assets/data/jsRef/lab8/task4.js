/* Task4.js - Add your Java Script Code Here */
function myFunction(){
    pTarget = document.getElementById('mydata');
    //Initialize Dice:
    var value1 = rollDice();
    var value2 = rollDice();

    pTarget.innerHTML=`Dice rolls are "${value1}" "${value2}"`;

    ifDoubles(value1, value2);
}

function rollDice(){
    return Math.ceil(Math.random()*6);
}

function ifDoubles(...vals){
    if(vals[0] == vals[1]){
        document.getElementById('prompt').classList.remove("hide");
        document.getElementById('alert').classList.remove("hide");
        document.getElementById('submitPrompt').classList.add("hide");
        document.getElementById('inputGroup').classList.add("hide");
    }
}

//Initializer for modal close
document.addEventListener("DOMContentLoaded", function(){

    closeButton = document.getElementById('closePrompt');
    closeButton.addEventListener("click", dismissPrompt, false);
    dismissButton = document.getElementById('dismiss-prompt');
    dismissButton.addEventListener("click", dismissPrompt, false);
});

function dismissPrompt(){
    document.getElementById('prompt').classList.add("hide");
}