// in Ex9 to Ex15, change the name of the following function properly
function problem_12() {
  
  /* this statement defines an object reference to the 
     html element that its ID is "output".
	 Every time you want to output something, use outputObj */
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  try {
   var number = parseInt(prompt("Please enter a number: ", ""));
   if(number=="") throw "Input was empty or 0 - invalid";
   if(isNaN(number)) throw "Input was not a number - invalid";
   if(number<0) throw "Input was not positive (More than 0)"

  }
  catch (err){
     alert(err)
     return;
  }
  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
  outputObj.innerHTML="number: "+number+"<br><br>equal to its reverse? ";

  // transltate rest of your flowcharts to js here:
  var originalInt = number;
  var reversedInt = 0;
  var reverseChk="no";

   do{
      reversedInt = (reversedInt*10 + number%10);
      number = parseInt(number/10);
      console.log(reversedInt);
   }while(number>0);
   if(originalInt == reversedInt){
      reverseChk ="yes";
   }
   outputObj.innerHTML+=reverseChk; 
  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}