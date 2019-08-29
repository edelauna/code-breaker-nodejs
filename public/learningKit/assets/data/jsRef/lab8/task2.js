/* Task2.js - Add your Java Script Code Here */
document.addEventListener("DOMContentLoaded", function(event){
        
    //Had to convert from HTMLColletion to Array
    buttons = Array.from(document.getElementsByClassName('btn'));
    buttons.forEach(button => {
        button.addEventListener("click", function(){
            var result = this.getAttribute("data-req");
            spanTarget = document.getElementById('resulTarget');
            spanTarget.innerHTML = "= "+ result;
        })
    });
});