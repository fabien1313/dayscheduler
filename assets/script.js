// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Buttons
const btnOne = document.getElementById('btn-1');
const btnTwo = document.getElementById('btn-2');
const btnThree = document.getElementById('btn-3');
const btnFour = document.getElementById('btn-4');
const btnFive = document.getElementById('btn-5');
const btnSix = document.getElementById('btn-6');
const btnSeven = document.getElementById('btn-7');
const btnEight = document.getElementById('btn-8');
const btnNine = document.getElementById('btn-9');
//


$(document).ready (function() {
const nine = document.getElementById('ninehour').textContent;
const ten = document.getElementById('tenhour').textContent;
const eleven = document.getElementById('elevenhour').textContent;
const twelve = document.getElementById('twelvehour').textContent;
const one = document.getElementById('onehour').textContent;
const two = document.getElementById('twohour').textContent;
const three = document.getElementById('threehour').textContent;
const four = document.getElementById('fourhour').textContent;
const five = document.getElementById('fivehour').textContent;

  var currentTime = dayjs().format('dddd, MMMM D YYYY, hh:mm:ss a');
  $('#currentDay').text(currentTime);

  var currentHour = parseInt(dayjs().format('HH'));

  if (nine < currentHour) {
    $('#hour_9am').css('background', 'lightgrey')
  } else if (nine == currentHour) {
    $('#hour_9am').css('background', '#ff6961')
  } else if (nine > currentHour) {
    $('#hour_9am').css('background', 'lightgreen')
  }
  
  if (ten < currentHour) {
    $('#hour_10am').css('background', 'lightgrey')
  } else if (ten == currentHour) {
    $('#hour_10am').css('background', '#ff6961')
  } else if (ten > currentHour) {
    $('#hour_10am').css('background', "lightgreen")
  }

  if (eleven < currentHour) {
    $('#hour_11am').css('background', 'lightgrey')
  } else if (eleven == currentHour) {
    $('#hour_11am').css('background', '#ff6961')
  } else if (eleven > currentHour) {
    $('#hour_11am').css('background', 'lightgreen')
  }

  if (twelve < currentHour) {
    $('#hour_12am').css('background', 'lightgrey')
  } else if (twelve == currentHour) {
    $('#hour_12am').css('background', '#ff6961')
  } else if (twelve > currentHour) {
    $('#hour_12am').css('background', 'lightgreen')
  }

  if (one < currentHour) {
    $('#hour_1pm').css('background', 'lightgrey')
  } else if (one == currentHour) {
    $('#hour_1pm').css('background', '#ff6961')
  } else if (one > currentHour) {
    $('#hour_1pm').css('background', 'lightgreen')
  }

  if (two < currentHour) {
    $('#hour_2pm').css('background', 'lightgrey')
  } else if (two == currentHour) {
    $('#hour_2pm').css('background', '#ff6961')
  } else if (two > currentHour) {
    $('#hour_2pm').css('background', 'lightgreen')
  }

  if (three < currentHour) {
    $('#hour_3pm').css('background', 'lightgrey')
  } else if (three == currentHour) {
    $('#hour_3pm').css('background', '#ff6961')
  } else if (three > currentHour) {
    $('#hour_3pm').css('background', 'lightgreen')
  }

  if (four < currentHour) {
    $('#hour_4pm').css('background', 'lightgrey')
  } else if (four == currentHour) {
    $('#hour_4pm').css('background', '#ff6961')
  } else if (four > currentHour) {
    $('#hour_4pm').css('background', 'lightgreen')
  }

  if (five < currentHour) {
    $('#hour_5pm').css('background', 'lightgrey')
  } else if (five == currentHour) {
    $('#hour_5pm').css('background', '#ff6961')
  } else if (five > currentHour) {
    $('#hour_5pm').css('background', 'lightgreen')
  }
  

  
  

});


// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



  // //Button is setup along with localstorage
  // $('.saveBtn').on('click', function () {
  //   //Create a variable for user's input with a value method.
  //   var userInput = $(this).siblings('.description').val();
  //   //Create a variable to identify the div-location of that user's input.
  //   var hours = $(this).parent().attr('id');
  //   localStorage.setItem(userInput, hours);
  // })

  // $("#hour-1am .description").val(localStorage.getItem("hour-1am"));

  // let arguments = function time () {
  //   var realTime = dayjs().hour();

  //   $('.time-block').each(function () {
  //     var comparedTime = parseInt($(this).attr("id").split("hour")[1]);

  //     if (comparedTime < realTime) {
  //     $(this).removeClass('future');
  //     $(this).removeClass('present');
  //     $(this).addClass('past');
  //     } else if (comparedTime === realTime) {
  //     $(this).removeClass("past");
  //     $(this).removeClass("future");
  //     $(this).addClass("present");
  //     } else {
  //     $(this).removeClass("present");
  //     $(this).removeClass("past");
  //     $(this).addClass("future");
  //     }
    


  //   })

  // }
  
  // $("#hour-1am .description").val(localStorage.getItem("hour-1am"));
  // $("#hour-2am .description").val(localStorage.getItem("hour-2am"));
  // $("#hour-3am .description").val(localStorage.getItem("hour-3am"));
  // $("#hour-4am .description").val(localStorage.getItem("hour-4am"));
  // $("#hour-5am .description").val(localStorage.getItem("hour-5am"));
  // $("#hour-6am .description").val(localStorage.getItem("hour-6am"));
  // $("#hour-7am .description").val(localStorage.getItem("hour-7am"));
  // $("#hour-8am .description").val(localStorage.getItem("hour-8am"));
  // $("#hour-9am .description").val(localStorage.getItem("hour-9am"));
  // $("#hour-10am .description").val(localStorage.getItem("hour-10am"));
  // $("#hour-11am .description").val(localStorage.getItem("hour-11am"));
  // $("#hour-12am .description").val(localStorage.getItem("hour-12am"));
  // $("#hour-1pm .description").val(localStorage.getItem("hour-1pm"));
  // $("#hour-2pm .description").val(localStorage.getItem("hour-2pm"));
  // $("#hour-3pm .description").val(localStorage.getItem("hour-3pm"));
  // $("#hour-4pm .description").val(localStorage.getItem("hour-4pm"));
  // $("#hour-5pm .description").val(localStorage.getItem("hour-5pm"));
  // $("#hour-6pm .description").val(localStorage.getItem("hour-6pm"));
  // $("#hour-7pm .description").val(localStorage.getItem("hour-7pm"));
  // $("#hour-8pm .description").val(localStorage.getItem("hour-8pm"));
  // $("#hour-9pm .description").val(localStorage.getItem("hour-9pm"));
  // $("#hour-10pm .description").val(localStorage.getItem("hour-10pm"));
  // $("#hour-11pm.description").val(localStorage.getItem("hour-11pm"));
  // $("#hour-12pm .description").val(localStorage.getItem("hour-12pm"));
  
  // arguments();