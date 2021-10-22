// Script.js file for work day scheduler
$(document).ready(function() {
    // On save button click, save hour + description to local storage
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
        console.log(time, value);
    })
    
    // Pull content saved in local storage to the text area and keep it there, even on refresh
    $("#hour-9").children("textarea").val(localStorage.getItem("hour-9"));
    $("#hour-10").children("textarea").val(localStorage.getItem("hour-10"));
    $("#hour-11").children("textarea").val(localStorage.getItem("hour-11"));
    $("#hour-12").children("textarea").val(localStorage.getItem("hour-12"));
    $("#hour-13").children("textarea").val(localStorage.getItem("hour-13"));
    $("#hour-14").children("textarea").val(localStorage.getItem("hour-14"));
    $("#hour-15").children("textarea").val(localStorage.getItem("hour-15"));
    $("#hour-16").children("textarea").val(localStorage.getItem("hour-16"));
    $("#hour-17").children("textarea").val(localStorage.getItem("hour-17"));
    
    
    // Sets current date and day of the week in the header
    var currentDate = moment();
    $("#currentDay").text(currentDate.format("dddd, MMMM Do"));
    
    
    // Updates background color according to time past, present or future
    var timeOfDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    updateTime();
    
        function updateTime() {
            var currentTime = moment().format("H");
            for(var i = 0; i < timeOfDay.length; i++) {
                // If hour is greater than current hour, set bg color to green
                if (parseInt(timeOfDay[i]) > currentTime) {
                    $("#" + timeOfDay[i]).attr("style", "background-color: #58ce7b");
                // If hour is lesser than current hour, grey out
                } else if (parseInt(timeOfDay[i]) < currentTime) {
                    $("#" + timeOfDay[i]).attr("style", "background-color: lightgray");
                // If hour is equal to current hour, set bg color to red
                } else if (parseInt(timeOfDay[i]) == currentTime) {
                    $("#" + timeOfDay[i]).attr("style", "background-color: #fc665e");
                }
          }
        }
    })