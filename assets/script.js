const btnOne = document.getElementById('btn-1');
const btnTwo = document.getElementById('btn-2');
const btnThree = document.getElementById('btn-3');
const btnFour = document.getElementById('btn-4');
const btnFive = document.getElementById('btn-5');
const btnSix = document.getElementById('btn-6');
const btnSeven = document.getElementById('btn-7');
const btnEight = document.getElementById('btn-8');
const btnNine = document.getElementById('btn-9');


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

$('.saveBtn').on('click', function () {
  //Create a variable for user's input with a value method.
    var userInput = $(this).siblings('.description').val();
  //Create a variable to identify the div-location of that user's input.
     var hours = $(this).parent().attr('id');
     localStorage.setItem(userInput, hours);
});
