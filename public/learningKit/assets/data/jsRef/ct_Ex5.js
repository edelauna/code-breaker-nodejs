function $(value){
   try{
      return document.getElementById(value);
   }
   catch(err){
      alert(err.Message);
   }
}


// in Ex2 to Ex5, change the name of the following function properly
function mapping() {

  /* in Ex1, change the following two lines such that
     the sum of number num1 and num2 are parsed to integer
     before be assigned to w and h, respectively.        */
  /* in Ex 2, rename w and h to a and b, respectively.    */
   var gpa = parseInt($("num1").value);
  /* in Ex5, you should delete from Line 9 to this line */

  //in Ex 5, uncomment this block
  switch (true){
  case (gpa>100):
  case (gpa<0):
    answer="GPA invalid";
    break;
	case (gpa>89):
		answer="A+";
		break;
	case (gpa>79):
		answer="A";
		break;
      // in Ex5, you need to add more cases for other letter grades
   case (gpa>74):
		answer="B+";
		break;
	case (gpa>69):
		answer="B";
      break;
   case (gpa>64):
		answer="C+";
		break;
	case (gpa>59):
		answer="C";
      break;
   case (gpa>54):
		answer="D+";
		break;
	case (gpa>49):
		answer="D";
		break;
   case (gpa>47):
      answer="E";
         break;
	default:
		answer="F";
  }

  /* in Ex2 to Ex5, you need to rename "sum" to make it more readable
     for those problem, you may also need to rename s to a better
	 varibale that you have in your formulas above */
  $("output").innerHTML=answer;

}
