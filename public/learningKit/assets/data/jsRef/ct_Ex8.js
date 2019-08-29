function $(value){
   try{
      return document.getElementById(value);
   }
   catch(err){
      alert(err.Message);
   }
}

var index6 = 0;

// in Ex2 to Ex5, change the name of the following function properly
/*BUG: Null is counted as negative */
function calc(){

  /* in Ex1, change the following two lines such that 
     the sum of number num1 and num2 are parsed to integer 
     before be assigned to w and h, respectively.        */
  /* in Ex 2, rename w and h to a and b, respectively.    */  
   var value = parseInt($("num1").value);
   var message;
  /* in Ex5, you should delete from Line 9 to this line */
   console.log("Log:"+value%2);
   if(value == 0){
      message="Input was zero. <br />Number(s) Divisible by 6 Count:"+index6;
   } else { 
      message="Input was not Divisible by 6";
      if((value%2) == 0){
         chkSum3=0;
         var n = value;
         do{
            console.log("Log:"+chkSum3);
            chkSum3 = chkSum3 + (n%10);
            n=parseInt(n/10);
         } while(n!=0);

         if((chkSum3%3)==0){
            index6 +=1;
            message="Input was Divisible by 6";
         }
      } 
   }
  
  
  /* in Ex2 to Ex5, you need to rename "sum" to make it more readable
     for those problem, you may also need to rename s to a better 
	 varibale that you have in your formulas above */ 
  $("output").innerHTML=message; 

}
