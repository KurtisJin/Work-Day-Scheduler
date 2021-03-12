//variables targetting index
let timeDisplayEl = $('#time-block');
let saveButton = $('.saveBtn');
let textArea = $('.description');

//current day and time
var rightNow = moment().format('dddd MMMM Do');
    timeDisplayEl.text(rightNow);

$(document).ready(function () {
// function to listen for click. 
  saveButton.on('click', function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  })

  //fucntion to change text area depending on the current time
  function colorChange() {

    var currentTime = moment().hour();
//loop over time blocks
    textArea.each(function() { 
      var scheduledTime = parseInt($(this).attr("id"));

      //checks the time and if it meets requirement, it runs the class for background indicators
      if(currentTime > scheduledTime) {
        textArea.removeClass("past");
        textArea.removeClass("present");
        textArea.addClass("future");
        
      } else if(currentTime < scheduledTime) {
        textArea.removeClass("future");
        textArea.removeClass("present");
        textArea.addClass("past");

      } else {
        textArea.removeClass("past");
        textArea.removeClass("future");
        textArea.addClass("present");
      }
    })
  }
//get the items from local storage
  $('#9AM .description').val(localStorage.getItem("9AM"));  
  $('#10AM .description').val(localStorage.getItem("10AM"));  
  $('#11AM .description').val(localStorage.getItem("11AM"));  
  $('#12PM .description').val(localStorage.getItem("12PM"));  
  $('#1PM .description').val(localStorage.getItem("1PM"));  
  $('#2PM .description').val(localStorage.getItem("2PM"));  
  $('#3PM .description').val(localStorage.getItem("3PM"));  
  $('#4PM .description').val(localStorage.getItem("4PM"));  
  $('#5PM .description').val(localStorage.getItem("5PM"));  

  colorChange()
})

