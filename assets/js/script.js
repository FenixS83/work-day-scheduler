$(document).ready(function () {
    //this section applies the current date and time to the header
    $("#currentDay").text(moment().format("LLLL"));

    //this function assigns a click listener to the save button 
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
    })
//This section will look for any local storage data that would apply for any of the applicable hours 

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

function hourTracker() {
    //this function will retreive the current time
    let currentHour = moment().hour();
    // loop over time blocks
    $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log( blockHour, currentHour)
    //this section will compare the scheduler to the current time, adjusting display properties as time progresses
    if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    } 
    })
}
    hourTracker();
})

