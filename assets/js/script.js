$(document).ready(function () {
    //displays current day & time.
    $("#currentDay").text(moment().format("LLLL"));

    //Assign saveBtn on click listener 
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
    })
//load any saved data from LocalStorage - do this for each hour created.
$("#hour-9 .description").val(localStorage.getItem("hour9"));
$("#hour-10 .description").val(localStorage.getItem("hour10"));
$("#hour-11 .description").val(localStorage.getItem("hour11"));
$("#hour-12 .description").val(localStorage.getItem("hour12"));
$("#hour-13 .description").val(localStorage.getItem("hour13"));
$("#hour-14 .description").val(localStorage.getItem("hour14"));
$("#hour-15 .description").val(localStorage.getItem("hour15"));
$("#hour-16 .description").val(localStorage.getItem("hour16"));
$("#hour-17 .description").val(localStorage.getItem("hour17"));


function hourTracker() {
    //get current hour number
    let currentHour = moment().hour();
    // loop over time blocks
    $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log( blockHour, currentHour)
    //check to see if we move past the time on the planner
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