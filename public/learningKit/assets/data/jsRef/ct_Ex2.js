function $(value){
   try{
      return document.getElementById(value);
   }
   catch(err){
      alert(err.Message);
   }
}


// in Ex2 to Ex5, change the name of the following function properly
function area() {

  /* in Ex1, change the following two lines such that
     the sum of number num1 and num2 are parsed to integer
     before be assigned to w and h, respectively.        */
  /* in Ex 2, rename w and h to a and b, respectively.    */
  var a=parseInt($("num1").value);
  var b=parseInt($("num2").value);
  /* in Ex2, write a similar code to the above line
     to capture the value for c*/
  var c=parseInt($("num3").value);

  /* in Ex2 to Ex4, you need to replace the following line
      with some other formulas */
  var p = (a+b+c)/2;
  var area = (Math.sqrt(p*(p-a)*(p-b)*(p-c))).toFixed(2);

  /* in Ex5, you should delete from Line 9 to this line */

  /*   //in Ex 5, uncomment this block
  switch (true){
	case (a>89):
		answer="A+";
		break;
	case (a>79):
		answer="A";
		break;
		// in Ex5, you need to add more cases for other letter grades
	default:
		answer="F";
  }
  */

  /* in Ex2 to Ex5, you need to renmae "sum" to make it more readable
     for those problem, you may also need to rename s to a better
	 varibale that you have in your formulas above */
  $("output").innerHTML="<strong>Area: "+area+"</strong>";

}
