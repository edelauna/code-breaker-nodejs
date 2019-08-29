/* Task5.js - Add your Java Script Code Here */
function myFunction(){
    var date = new Date();
    pTarget = document.getElementById('mydata');
    date.date = date.getDate();
    days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    date.day = days[date.getDay()];
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    date.month = months[date.getMonth()];
    date.year = date.getFullYear();
    pTarget.innerHTML=`Today is the ${date.date} (${date.day}) ${date.month} ${date.year}`;
}