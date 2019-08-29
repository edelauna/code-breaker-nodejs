// in Ex9 to Ex15, change the name of the following function properly
function triangle() {

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
  outputObj.innerHTML="number: "+number+"<br /><br />";

  // transltate rest of your flowcharts to js here:

   for(var i = 1; i<=number;i++){
      for(var k = 0; k<i; k++){
         outputObj.innerHTML+="[]";
      };
      outputObj.innerHTML+="<br />";
   };

  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br /><br />"+"program ended";
  outputObj.style.textAlign = "left";
  outputObj.style.fontSize = "11px";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
