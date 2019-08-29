// in Ex9 to Ex15, change the name of the following function properly
function problem_09() {
  
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
  outputObj.innerHTML="number: "+number+"<br><br>its digits: ";

  // transltate rest of your flowcharts to js here:
  var n = number
  var andChk = 0;

   do{
      if(andChk==1){
         outputObj.innerHTML+="and "+n%10+".";
      }
      else{
         outputObj.innerHTML+=n%10+", ";
         console.log(parseInt(n/100)+", "+parseInt(n/10)%10)
         if(parseInt(n/100)==0 && parseInt(n/10)%10==1){
            andChk =1;
         }
      }
      n = parseInt(n/10);
      console.log(n);
   }while(n>0);
  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}