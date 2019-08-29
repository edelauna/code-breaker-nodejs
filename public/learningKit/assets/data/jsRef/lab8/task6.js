/* Task6.js - Add your Java Script Code Here */
//initializes the a listener - removes after click received
function getClick(i){
    //var inputElement = document.getElementById('pInputField');
    return new Promise(acc => {
        function handleClick(){
            test(i);
            document.getElementById('iButton').removeEventListener('click', handleClick);
            acc();
        }
        document.getElementById('iButton').addEventListener('click', handleClick);
    })
}
function test(i){
    console.log("waiting for a click:", i);
    pTarget = document.getElementById('mydata');
    pTarget.innerHTML = i;
}

//not using a global variable - using async function in JS6
async function main(){
    for(let i= 20; i>=0; i--){
        
        await getClick(i);
    }
    document.getElementById('mydata').innerHTML = "BOOM!";
    document.getElementById('iButton').setAttribute("disabled", true);
}
//initializes the loop countdown
document.addEventListener("DOMContentLoaded", main);