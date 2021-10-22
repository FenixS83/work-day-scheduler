$(document).ready(function () {
    //this section applies the current date and time to the header
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
        console.log(time, value);
    })
    
    //This section will look for any local storage data that would apply for any of the applicable hours 
    $("#hour-9").children("textarea").val(localStorage.getItem("hour-9"));
    $("#hour-10").children("textarea").val(localStorage.getItem("hour-10"));
    $("#hour-11").children("textarea").val(localStorage.getItem("hour-11"));
    $("#hour-12").children("textarea").val(localStorage.getItem("hour-12"));
    $("#hour-13").children("textarea").val(localStorage.getItem("hour-13"));
    $("#hour-14").children("textarea").val(localStorage.getItem("hour-14"));
    $("#hour-15").children("textarea").val(localStorage.getItem("hour-15"));
    $("#hour-16").children("textarea").val(localStorage.getItem("hour-16"));
    $("#hour-17").children("textarea").val(localStorage.getItem("hour-17"));


    
    var currentDate = moment();
    $("#currentDay").text(currentDate.format("dddd, MMMM Do"));


    //Updates background color based off of time of day
    var timeofDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    updateTime();
    
        function updateTime() {
            var currentTime = moment().format("H");
            for(var i=0; i < timeofDay.length; i++) {
                //green bg color
                if (parseInt(timeofDay[i]) > currentTime) {
                    $("#" + timeofDay[i]).attr("style", "background-color: #58ce7b");
                //grey bg color
                } else if (parseInt(timeofDay[i]) < currentTime) {
                    $("#" + timeofDay[i]).attr("style", "background-color: lightgray");
                //red bg color
                } else if (parseInt(timeofDay[i]) == currentTime) {
                    $("#" + timeofDay[i]).attr("style", "background-color: #fc665e");
                }
            }
        }
    })