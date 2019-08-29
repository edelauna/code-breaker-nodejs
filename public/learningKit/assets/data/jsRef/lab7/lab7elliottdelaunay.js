// Author: Elliott de Launay for EECS 1012
// Lab 7



//----------------------------------PROBLEMS BELOW-----------------------------//
//Accepts the elements provided from calling function and turns them into an array
function P1elliottdelaunay(...els){
    els[3] = defaultDisplay(els);
    var prime = true;
    var d = 2;
    //Create an onClick listener for submit button
    els[3].addEventListener("click", function(){
        //Clear Alerts (from previous clicks)
        els[2].setAttribute("class", "alert hide");

        num = els[1].value;
        //checks for null value or less than 2
        if(num == "" || num <2){
            //Add error class to alert section so that this is in red
            els[2].classList.add("error");
            if(num == ""){
                els[2].innerHTML ="Input cannot be empty.";
            } else {
                els[2].innerHTML ="Input needs to be greater than 1.";
            }
            //displayes the alerts (default is to be hidden)
            toggleDisplay(els[2]);
        } else{
            while(prime==true && d<=(num/2) ){
                if( (num%d) ==0 ){
                    prime = false;
                }
                d = d +1;
            }
            els[2].classList.add("message");
            els[2].innerHTML =num + " is not prime";
            if(prime == true){
                els[2].innerHTML =num + " is prime";
            }
            
            toggleDisplay(els[2]);
            //removes the input and submit button - ends the program
            toggleDisplay(els[1].parentNode.parentNode);
            toggleDisplay(this);
        }
    })
    
    toggleDisplay(els[0]);
    return;
}

//opportunity to try and refactor using callbacks inside a loop
function P2elliottdelaunay(...els){
    els[3] = defaultDisplay(els);
    var sum1 = 0;
    var sum2 = 0;

    toggleDisplay(els[0]);
    var i = 1;
    //using a for loop requires a callback function - still learning how to implement
    els[3].addEventListener("click", function(){
        //Clear Alerts (from previous clicks)
        els[2].setAttribute("class", "alert hide");
        
        num = parseInt(els[1].value);
        //checks for null value or less than 2
        if(num == null || num == "" || isNaN(num)){
            els[2].classList.add("error");
            els[2].innerHTML ="Input cannot be empty. Setting to 0";

            //displayes the alerts (default is to be hidden)
            toggleDisplay(els[2]);
            num = 0;
        }
        //first for loop
        if(i <= 4){
            sum1 = sum1 + num;
            console.log(`i: ${i} Loop 1: ${sum1}`);
        } 
        //second for loop
        else if(i <=8){
            console.log(`i: ${i} Loop 2: ${sum2}`);
            sum2 = sum2 + num;
            //end of the loop
            if(i == 8){
                els[2].classList.add("message");
                els[2].innerHTML ="no";
                //check if equal 
                if(sum1 == sum2){
                    els[2].innerHTML = "yes";
                }
                if(els[2].classList.contains("hide")){
                    toggleDisplay(els[2]);
                }
                //removes the input and submit button - ends the program
                toggleDisplay(els[1].parentNode.parentNode);
                toggleDisplay(this);
                return;
            }
        }
        //iteration (replaced for loop)
        els[1].value = null;
        i++;
    });

}

function P3elliottdelaunay(...els){
    els[3] = defaultDisplay(els);
    var p = 0;
    var n = 0;

    toggleDisplay(els[0]);
    //allows for negative inputs
    els[1].setAttribute("min", "-3000")
    //Eventlistener replaces while loop
    els[3].addEventListener("click", function(){
        //Clear Alerts (from previous clicks)
        els[2].setAttribute("class", "alert hide");
        
        num = parseInt(els[1].value);
        //checks for null value or less than 2
        if(num == null || num == "" || isNaN(num)){
            num = 0;
        }
        //conditional statements from flow chart
        if(num > 0){
            p = p +1;
            console.log(`p: ${p}`);
        } 
        else if(num < 0){
            n = n + 1;
            console.log(`n: ${n}`);
            //end of the loop
        }
        
        //Do While original condition: num !=0 && p <= 2*n
        // Inverse condition: num == 0 || p > 2*n
        //Inverse is required to evaluate to true so that program can exit
        if(num == 0 || p > (2*n)){
                var mCond1 = Boolean(num == 0);
                var mCond2 = Boolean(p > (2*n)); 
                els[2].classList.add("message");
                els[2].innerHTML =`Program Exiting under following conditions:<br>
                num != 0 : ${!mCond1} <br>
                p <= (2*n): ${!mCond2}`;
                toggleDisplay(els[2]);
                //removes the input and submit button - ends the program
                toggleDisplay(els[1].parentNode.parentNode);
                toggleDisplay(this);
                return;
            }

        //after a click is registered replace value
        els[1].value = null;

    });

}

function P4elliottdelaunay(...els){
    els[3] = defaultDisplay(els);
    var cnt1 = 0;
    var cnt2 = 0;

    toggleDisplay(els[0]);
    var i = 1;
    els[3].addEventListener("click", function(){
        //Clear Alerts (from previous clicks)
        els[2].setAttribute("class", "alert hide");
        
        num = parseInt(els[1].value);
        //checks for null value or less than 2
        if(num == null || num == "" || isNaN(num)){
            els[2].classList.add("error");
            els[2].innerHTML ="Input cannot be empty. Setting to 0";

            //displayes the alerts (default is to be hidden)
            toggleDisplay(els[2]);
            num = 0;
        }
        //first for loop
        if(i <= 4){
            if(num <0){
                cnt1 = cnt1 + 1;
            }
            console.log(`i: ${i} Loop 1: ${cnt1}`);
        } 
        //second for loop
        else if(i <=8){
            if(num > 0){
                cnt2 = cnt2 + num;
            }
            console.log(`i: ${i} Loop 2: ${cnt2}`);
            //end of the loop
            if(i == 8){
                els[2].classList.add("message");
                els[2].innerHTML ="no";
                //check if equal 
                if(cnt1 == cnt2){
                    els[2].innerHTML = "yes";
                }
                if(els[2].classList.contains("hide")){
                    toggleDisplay(els[2]);
                }
                //removes the input and submit button - ends the program
                toggleDisplay(els[1].parentNode.parentNode);
                toggleDisplay(this);
                return;
            }
        }
        //iteration (replaced for loop)
        els[1].value = null;
        i++;
    });

}

function P5elliottdelaunay(...els){
    els[3] = defaultDisplay(els);

    //Create an onClick listener for submit button
    els[3].addEventListener("click", function(){
        //Clear Alerts (from previous clicks)
        els[2].setAttribute("class", "alert hide");

        num = els[1].value;
        //checks for null value or less than 2
        if(num == "" || num <2 || isNaN(num)){
            //Add error class to alert section so that this is in red
            els[2].classList.add("error");
            if(num == ""){
                els[2].innerHTML ="Input cannot be empty.";
            } else {
                els[2].innerHTML ="Input needs to be greater than 1.";
            }
            //displayes the alerts (default is to be hidden)
            toggleDisplay(els[2]);
        } else{
            els[2].classList.add("message");
            els[2].innerHTML =`Prime numbers less than or equal to ${num}: <br>`;
            for(i = 2; i <= num; i++){
                if(prime(i)){
                    els[2].innerHTML +=i + "<br>";
                }
            }
            toggleDisplay(els[2]);
            //removes the input and submit button - ends the program
            toggleDisplay(els[1].parentNode.parentNode);
            toggleDisplay(this);
        }
    })
    
    toggleDisplay(els[0]);
    return;
}
//required for P5
function prime(num){
    var flag = true;
    var d = 2;
    while(flag == true && d <= (num/2)){
        if((num%d)==0){
            flag = false;
        }
        d = d + 1;
    }
    return flag;
}

//---------------USED FOR ROUTING REQUESTS BASED ON BUTTON CLICKED-------------//
//Creating a listener for button to toggle active class
//Encapsulated into a listener for content loaded, as script was returning empty
document.addEventListener("DOMContentLoaded", function(event){
    

    //Required for prompt replacement:
    var promptElement = document.getElementById('prompt');
 

    //Specific close for "x" in prompt
    var close = document.getElementById("closePrompt");
    close.addEventListener("click", function(){
        toggleDisplay(promptElement);
    })
    
    //Had to convert from HTMLColletion to Array
    buttons = Array.from(document.getElementsByClassName('btn'));
    buttons.forEach(button => {
        button.addEventListener("click", function(){
            //Creating as global variables so that they can be re-used by P# functions
            var inputElement = document.getElementById('pInputField');
            var alertElement = document.getElementById('alert');
            var submitElement = document.getElementById('submitPrompt');
            
            //Routing based on button clicked
            var route = this.getAttribute("data-req");
            switch(route){
                case "1":
                    P1elliottdelaunay(promptElement, inputElement, alertElement, submitElement);
                    this.setAttribute("disabled", true);
                    break;
                case "2":
                    P2elliottdelaunay(promptElement, inputElement, alertElement, submitElement);
                    this.setAttribute("disabled", true);
                    break;
                case "3":
                    P3elliottdelaunay(promptElement, inputElement, alertElement, submitElement);
                    this.setAttribute("disabled", true);
                    break;
                case "4":
                    P4elliottdelaunay(promptElement, inputElement, alertElement, submitElement);
                    this.setAttribute("disabled", true);
                    break;
                case "5":
                    P5elliottdelaunay(promptElement, inputElement, alertElement, submitElement);
                    this.setAttribute("disabled", true);
                    break;
                case "dismiss-prompt":
                    toggleDisplay(promptElement);
                    this.classList.remove("active");
                    break;
                case "submit":
                    break;
                default:
                    console.log("Other button has been clicked");
                }
        })   
    });
});


//Generalized to show hide multiple elements eg Prompt, Alert, Submit
function toggleDisplay(el){
    if(el.classList.contains("hide")){
        el.classList.remove("hide");
    } else{
        el.classList.add("hide");
    }
}
//receives elements as an array from  P# functions
function defaultDisplay(els){
    //Default inPutElement Display
    els[1].value = null;
    var inputParent = els[1].parentNode.parentNode;
    if(inputParent.classList.contains("hide")){
        inputParent.classList.remove("hide");
    }
    //Default alerts
    els[2].setAttribute("class", "alert hide");
    
    //Defaults submit button
    if(els[3].classList.contains("hide")){
        els[3].classList.remove("hide");
    }
    //Clears listeners:
    sClone = els[3].cloneNode(true);
    els[3].parentNode.replaceChild(sClone, els[3]);

    //return new submit element
    return document.getElementById('submitPrompt');
}//-------------------------------SCRAP SECTION TO UNDERSTAND CALLBACKS---------//
function getClick(){
    //var inputElement = document.getElementById('pInputField');
    return new Promise(acc => {
        function handleClick(){
            document.removeEventListener('click', handleClick);
            acc();
        }
        document.addEventListener('click', handleClick);
    })
}

async function main(){
    for(let i= 0; i<4; i++){
        console.log("waiting for a click:", i);
        await getClick();
        console.log("click received", i);
    }
    console.log("done");
}

