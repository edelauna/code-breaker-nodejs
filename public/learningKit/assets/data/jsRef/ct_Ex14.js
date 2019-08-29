// in Ex9 to Ex15, change the name of the following function properly
function fibonacci() {
  
  /* this statement defines an object reference to the 
     html element that its ID is "output".
	 Every time you want to output something, use outputObj */
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  try {
   var number = parseInt(prompt("Please enter a number: ", ""));
   //if(number=="") throw "Input was empty or 0 - invalid";
   if(isNaN(number)) throw "Input was not a number - invalid";
   if(number<0) throw "Input was not positive (More than 0)"

  }
  catch (err){
     alert(err)
     return;
  }
  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
  outputObj.innerHTML="number: "+number+"<br><br>Fibonacci: ";

  // transltate rest of your flowcharts to js here:
  var base = 0;
  var num2 = 1;
  var num3;
  outputObj.innerHTML+=base+", "+num2;
   for(var i = 2; i<number;i++){
      num3 = base + num2;
      console.log(num3);
      base = num2;
      console.log(base);
      num2 = num3;
      console.log(num2);
      outputObj.innerHTML+=", "+num3;
   };
 
  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}