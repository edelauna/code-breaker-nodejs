/* Task3.js - Add your Java Script Code Here */
document.addEventListener("DOMContentLoaded", function(event){
        
    //Had to convert from HTMLColletion to Array
    buttons = Array.from(document.getElementsByClassName('btn'));
    buttons.forEach(button => {
        button.addEventListener("click", function(){
            var result = this.getAttribute("data-req");
            var sum=0;
            pTarget = document.getElementById('mydata');
            for(var i = 0; i<=result; i++){
                sum +=i;
            }
            pTarget.innerHTML = "Result= "+ sum;
        })
    });
});