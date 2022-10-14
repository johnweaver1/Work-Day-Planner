var save = document.querySelector(".saveBtn")
//Sets a variable for creating the time, and then linking it back to the html so it shows up!
var time = moment().format('dddd MMMM Do');
$("#currentDay").text(time);
//function for changing the text area's color depending on the time!
function color() {
    // variable for setting the hour
    var hour = moment().hours();
    var hours = [8,9,10,11,12,13,14,15,16,17];    
    // setting if else statemtns for the color!
    if (hours > hour) {
            $('.time-block').addClass("future");
    } else if (hours === hour) {
            $('.time-block').addClass("present");
    } else {
            $('.time-block').addClass("past");
    }
};

color ();