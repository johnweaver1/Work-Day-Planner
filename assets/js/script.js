
//Sets a variable for creating the time, and then linking it back to the html so it shows up!
var time = moment().format('dddd MMMM Do');
$("#currentDay").text(time);
// when clicking the save button your text in the text area class is saved by the id in the div corresponding to the hour.
$(".saveBtn").on("click",function(){

   var words = $(this).siblings(".beepo").val();

   var id = $(this).parent().attr("id");
   
   localStorage.setItem(id, words);
})
//bringing back the local storage to the text area from using the save button.
$("#9 .beepo").val(localStorage.getItem("9"));
$("#10 .beepo").val(localStorage.getItem("10"));
$("#11 .beepo").val(localStorage.getItem("11"));
$("#12 .beepo").val(localStorage.getItem("12"));
$("#13 .beepo").val(localStorage.getItem("13"));
$("#14 .beepo").val(localStorage.getItem("14"));
$("#15 .beepo").val(localStorage.getItem("15"));
$("#16 .beepo").val(localStorage.getItem("16"));
$("#17 .beepo").val(localStorage.getItem("17"));

//function for changing the text area's color depending on the time!
function color() {
    // variable for setting the hour
    var hour = moment().hours();
    //this function creates a varibale called hTime that is checked through the .time-block class and the id which is given a number!
    $(".time-block").each(function() {
        var idNum = parseInt($(this).attr("id"));
        //the function is now checked against the current hour vs the id number which creates the colors!
        if (idNum > hour) {
           $(this).addClass("future");
        } else if (idNum === hour) {
           $(this).addClass("present");
        } else {
           $(this).addClass("past");
        }
    })
};
var hour = moment().hours();
console.log(hour)
color ();