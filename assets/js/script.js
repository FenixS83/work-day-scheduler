$(document).ready(function() {
    //displays current date and time
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//assiging save button to click listener
$('.saveBtn').on('click', function (){
    console.log("test")
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    console.log(text);
    console.log(time);
    //setting items to local storage
    localStorage.setItem(time, text);
})

//loads saved data from local storage for each hour
$('#hour-9' .description).val(localStorage.getItem('hour-9'));
$('#hour-10' .description).val(localStorage.getItem('hour-10'));
$('#hour-11' .description).val(localStorage.getItem('hour-11'));
$('#hour-12' .description).val(localStorage.getItem('hour-12'));
$('#hour-13' .description).val(localStorage.getItem('hour-13'));
$('#hour-14' .description).val(localStorage.getItem('hour-14'));
$('#hour-15' .description).val(localStorage.getItem('hour-15'));
$('#hour-16' .description).val(localStorage.getItem('hour-16'));
$('#hour-17' .description).val(localStorage.getItem('hour-17'));






})