function $(value){
   try{
      return document.getElementById(value);
   }
   catch(err){
      alert(err.Message);
   }
}

// in Ex2 to Ex5, change the name of the following function properly
/*BUG: Null is counted as negative */
function calc() {

  /* in Ex1, change the following two lines such that
     the sum of number num1 and num2 are parsed to integer
     before be assigned to w and h, respectively.        */
  /* in Ex 2, rename w and h to a and b, respectively.    */
   var value = parseInt($("num1").value);
   var message;
  /* in Ex5, you should delete from Line 9 to this line */

   if(value == 0){
      message="Input was zero";
      document.getElementById("num1").disabled = "disabled";
   } else {
      if(value > 0){
         message="Input was positive";

      } else{
         message="Input was negative";

      }
   }


  /* in Ex2 to Ex5, you need to rename "sum" to make it more readable
     for those problem, you may also need to rename s to a better
	 varibale that you have in your formulas above */
  $("output").innerHTML=message;

}
