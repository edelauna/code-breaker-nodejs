/* Webpage JS document for Lab 3.
  Author: Elliott de Launay
  For: EECS 1012, York University, Lassonde School of Engineering 
  Modified: 24-Jan-19 by author*/

/*---------------Edelaunay Defined JQeury--------------------*/

//Specific onClick events moved to this section
$(function(){


   /*following initializes HTML buttons if data exists */
   try{
      initializeButtons();
   }
   catch(err){
      alert(err.message);
   }

   /*following reads data from data.js to update HTML */
   $( "nav" ).on('click', 'button',(function(event) {
      var arrayID=$(event.target).attr('data-arrayid')
      displayProblemFunc(problem[arrayID]);
    }));

    /*Had problems with double click on mobile - may have over parameterized this code... 
    essentially it waits a set delay time before deciding if a click was a double or a single
    needed to do this to handle double clicks on mobile */
    $( "div" ).on('click', 'img.zoomEnabled',(function(event) {
      /*Double Click */
      if((new Date().getTime() - dblClickConfig.touchtime) < dblClickConfig.delay){
         clearTimeout(dblClickConfig.action)
         zoomIn($(event.target).attr('id'));
         dblClickConfig.touchtime=0;
      }
      /* Single Click -  */
      else{
         dblClickConfig.touchtime = new Date().getTime();
         dblClickConfig.action = setTimeout(function(){
            zoomOut($(event.target).attr('id'));
         },dblClickConfig.delay);
      }
    }));

   /*modified to use the class selector vs id in order to refactor code for reusability */
    $("input.check").on('click',(function(event){
      
      /*ends the function if no problem is not already loaded */
      if (isEmpty($('#problem'))) {
         return;
     }
     else{
        /*HTML was modified to specify a target attribute for each checkbox */
        checkToggle($(event.target).attr('name'));
     }
    }));

 });

//Check for preventing display of null images
function isEmpty( el ){
   return !$.trim(el.html())
}

/*problem variable is defined in assets/data/data.js */
/*following initializes HTML buttons if data exists */
function initializeButtons(){
   for (let i = 0; i <problem.length; i++){
      $(`<button class="btn btn-problem" data-arrayid="${i}"> ${problem[i].title} </button>`).appendTo('nav');
   }
   
}

/*---------------Section Provided in Lab Instructions--------------------*/

/*Refactored to make use of variables and reduce duplication of code */
function displayProblemFunc(data) {

   try{
      $("#problem").html("<p>"+data.description+"</p>");
      
      $("#flowchart").attr({
               src:data["flowchart"].URI,
               alt:data["flowchart"].alt}).hide();

      //was lazy....
      //Using Beautify
      var url = data["js"].URI;
      var request = new XMLHttpRequest();
      request.open('GET', url);
      //test to see if js and python is accepted
      request.responseType= 'text';
      request.onload = function (){
         console.log(`Response: ${request.response}`);
         //need to remove the "prettyprinted" class
         $("#js")
            .attr("class", "prettyprint")
            .text(request.response)
            .hide();
         //Runs the Google code to format JS
         PR.prettyPrint();
      }
      request.send();

       //Using Beautify
       var urla = data["another"].URI;
       var requesta = new XMLHttpRequest();
       requesta.open('GET', urla);
       //test to see if js and python is accepted
       requesta.responseType= 'text';
       requesta.onload = function (){
          console.log(`Response: ${requesta.response}`);
          //need to remove the "prettyprinted" class
          $("#another")
             .attr("class", "prettyprint")
             .text(requesta.response)
             .hide();
          //Runs the Google code to format JS
          PR.prettyPrint();
       }
       requesta.send();
      
      zoomOut("flowchart");

      /*the following loads data into all of the columns and hides the data
      columnIDs is a global variable set in data.js */ 
      // $.each(columnIDs, function(i, value){
      //    //original code when using img or ifram
      //    // $("#" +value).attr({
      //    //    src:data[value].URI,
      //    //    alt:data[value].alt}).hide();
      //    /*Control - ensure that zoomin style is not applied*/
      //    zoomOut(value);
      // });
   }
   //maybe add custom error messages later - should this be where the function is called? 
   catch(err){
      alert(err.message);
   }

  /* the following clears all checked checked boxes - and zoom properties*/
  $(".check").prop("checked", false);

}

/* in Eproblem 4, refactored and renamed to simplify */
function checkToggle(target){
   $('#'+target).toggle();	 
}

/* in Eproblem4, or step 4 of Eproblem2, you need to create function
   checkUncheck3, which is similar to checkUncheck 1 and 2
*/
function checkUncheck3(){
   //refactored into checkToggle
}

/* in Eproblem4, create function p02Func similar to displayProblemFunc */
function p02Func(){
   //Refactored p01Func to handle multple cases of problems - renamed p01Func to displayProblemFunc
}
/* in Eproblem5, create functions zoomIn() and zoomOut() */
function zoomIn(target){
   /* target should be id of the clicked image to prevent cross image zooming */
   $('#'+target).css('width','200%');
}
function zoomOut(target){
   /* target should be id of the clicked image to prevent cross image zooming */
   $('#'+target).css('width','100%');
}

