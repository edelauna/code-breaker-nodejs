//Code Breaker js for EECS1012 by Elliott de Launay

//Initilize Code Object
function initCB(){
    var code = new Code();
    return code;
}
//Generate Random Code
function codeGen(){
    let initArray=[0,1,2,3,4,5,6,7,8,9];
    for(let max = initArray.length-1; max > 0; max--){
        let r = Math.floor(Math.random()*max);
        
        //swap
        let tempValue = initArray[r];
        initArray[r] = initArray[max];
        initArray[max]= tempValue;
    }
    return initArray.slice(0,4);
}

//Initialize onClick event and code
document.addEventListener("DOMContentLoaded", function(){
    var code = initCB();
    document.getElementById('submitPrompt').addEventListener('click', function(){
        cBmodelController(code)
    }, false);
    //allows enter
    document.getElementById('pInputField').addEventListener('keypress', function(e){
        var key = e.which || e.keyCode;
        if(key === 13){
            cBmodelController(code)
        }
    }, false);
});

//Logic Controller
function cBmodelController(code){
    var input = document.getElementById('pInputField');
    var alert = document.getElementById('alert');
    var guess = input.value;
    var results = document.getElementById('results');

    if(guess.length !=4){
        alert.innerHTML = `Guess must be 4 digits`;
        alert.classList.add('flash');
        setTimeout(function(){
            alert.classList.remove('flash');
            alert.classList.remove('hide');
            alert.classList.add('error');
        }, 5);
    } else {
        alert.classList.add('hide');
        results.parentNode.classList.remove('hide');   
        results.innerHTML +=`
            <tr>
                <td>${guess}</td>
                <td>${code.validate(guess)}</td>
            </tr>
        `;
        cBviewController(code,guess)
    }
}

//View Controller
function cBviewController(code, guess){
    returnedString = code.validate(guess);
    if(returnedString.includes('&check')){
        var res = returnedString.split('&');
        res.shift();
        res.forEach(function(el, i){
            if(el=="check;"){
                target = "dig"+(i+1);
                headerDisp = document.getElementById(target)
                headerDisp.innerHTML = code.code[i];
                headerDisp.style.color ="var(--green)";

            }
        })
    }
}

class Code {

    constructor(){
        this.code = codeGen();
    }
    validate(guess){
        //not sure if this should be placed in the object itself or done outside
        //following creates an array based on the received guess value
        var checkArray = Array.from(guess);
        let response = '';
        let tempResponse = null;
        for(let i = 0; i < checkArray.length; i++){
            for(let j = 0; j< this.code.length; j++){
                if(checkArray[i] == this.code[j]){
                    tempResponse = "&rlarr;";
                    if(i == j){
                        tempResponse = "&check;";
                    }
                    response += tempResponse; 
                } 
            }
            if(tempResponse == null){
                response += '&Cross;';
            } else{
                tempResponse = null;
            }
        }

        return response;
    }
}