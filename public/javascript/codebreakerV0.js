//Code Breaker js for EECS1012 by Elliott de Launay

//Initilize Code Object - move to server side
function initCB(){
    var code = new Code();
    return code;
}
//Generate Random Code - move to server side
function codeGen(){
    //only 8 colors to choose from
    let initArray=[0,1,2,3,4,5,6,7];
    for(let max = initArray.length-1; max > 0; max--){
        let r = Math.floor(Math.random()*max);
        
        //swap
        let tempValue = initArray[r];
        initArray[r] = initArray[max];
        initArray[max]= tempValue;
    }
    return initArray.slice(0,5);
}

//Initialize onClick event and drag function for marbles
window.onload = function(){
    var code = initCB();
    //Make dots(marbles) draggable
    $('.draggable').draggable({
        helper: "clone",
        revert: "invalid",
    });
    $('.snapTarget').droppable({
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "dot-exists"
          },
          drop: function( event, ui ) {
            let iValue = $(ui.draggable).attr('data-dot-id')
            $( this ).removeClass();
            $(this).addClass( "dot dot-guess ui-droppable" )
                .addClass("dot-"+iValue)
                .attr('data-dot-id', iValue);
            let pValue = $(this).attr('data-ipos-id');
            updateInputForm(iValue,pValue);
          }
    })

    //Client Side Controls
    document.getElementById('submitPrompt').addEventListener('click', function(){
        cBmodelController()
    }, false);
};

function updateInputForm(input, position){
    console.log(`input: ${input}, position: ${position}`);
    $('#inputPos' + position).val(input);
};


//Logic Controller - place in separate controller file
function cBmodelController(){
    //grabs the input row to submit to the server
    $(inputRowVal).val($('#inputRow th').attr('data-row-id'));
}

//View Controller - move to controller file for handling POST response
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

//move to server side
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