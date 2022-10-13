var save = document.querySelector(".saveBtn")
//Sets a variable for creating the time, and then linking it back to the html so it shows up!
var time = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text(time);
