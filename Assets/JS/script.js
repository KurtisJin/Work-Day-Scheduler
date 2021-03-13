//variables targetting index
let timeDisplayEl = $('#time-block');
let saveButton = $('.saveBtn');
let textArea = $('.time-block');

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
    console.log(currentTime);
//loop over time blocks
    textArea.each(function() { 
      var scheduledTime = parseInt($(this).attr("id"));
      console.log(scheduledTime);

      //checks the time and if it meets requirement, it runs the class for background indicators
      if(currentTime > scheduledTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
        
      } else if(currentTime < scheduledTime) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");

      } else {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
    })
  }
//get the items from local storage
  $('#9AM .description').val(localStorage.getItem("9AM"));  
  $('#10AM .description').val(localStorage.getItem("10AM"));  
  $('#11AM .description').val(localStorage.getItem("11AM"));  
  $('#12PM .description').val(localStorage.getItem("12PM"));  
  $('#13PM .description').val(localStorage.getItem("13PM"));  
  $('#14PM .description').val(localStorage.getItem("14PM"));  
  $('#15PM .description').val(localStorage.getItem("15PM"));  
  $('#16PM .description').val(localStorage.getItem("16PM"));  
  $('#17PM .description').val(localStorage.getItem("17PM"));  

  colorChange()
})
