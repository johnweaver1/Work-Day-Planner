var save = document.querySelector(".saveBtn")
//Sets a variable for creating the time, and then linking it back to the html so it shows up!
var time = moment().format('dddd MMMM Do');
$("#currentDay").text(time);
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

color ();