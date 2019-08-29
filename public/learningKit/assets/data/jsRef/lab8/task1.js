/* Task1.js - Add your Java Script Code Here */
function myFunction()
{
  var p = document.getElementById("mydata");

  var chk = Math.round(Math.random()); 
  
  // set p.innerHTML equal to YES or NO
  p.innerHTML = "NO";
  if(chk == 1){
    p.innerHTML = "YES";
  }
  //For debug
  console.log(`var chk = ${chk}`);
}
