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


textboxone.textContent = localStorage.getItem('9am')
btnOne.addEventListener('click', function(e){
  e.preventDefault();
  var keyOne = document.getElementById('textboxone').value;
  localStorage.setItem('9am', keyOne);
});

textboxtwo.textContent = localStorage.getItem('10am')
btnTwo.addEventListener('click', function(e){
  e.preventDefault();
  var keyTwo = document.getElementById('textboxtwo').value;
  localStorage.setItem('10am', keyTwo);
});

textboxthree.textContent = localStorage.getItem('11am')
btnThree.addEventListener('click', function(e){
  e.preventDefault();
  var keyThree = document.getElementById('textboxthree').value;
  localStorage.setItem('11am', keyThree);
});

textboxfour.textContent = localStorage.getItem('12am')
btnFour.addEventListener('click', function(e){
  e.preventDefault();
  var keyFour = document.getElementById('textboxfour').value;
  localStorage.setItem('12am', keyFour);
});

textboxfive.textContent = localStorage.getItem('1pm')
btnFive.addEventListener('click', function(e){
  e.preventDefault();
  var keyFive = document.getElementById('textboxfive').value;
  localStorage.setItem('1pm', keyFive);
});

textboxsix.textContent = localStorage.getItem('2pm')
btnSix.addEventListener('click', function(e){
  e.preventDefault();
  var keySix = document.getElementById('textboxsix').value;
  localStorage.setItem('2pm', keySix);
});

textboxseven.textContent = localStorage.getItem('3pm')
btnSeven.addEventListener('click', function(e){
  e.preventDefault();
  var keySeven = document.getElementById('textboxseven').value;
  localStorage.setItem('3pm', keySeven);
});

textboxeight.textContent = localStorage.getItem('4pm')
btnEight.addEventListener('click', function(e){
  e.preventDefault();
  var keyEight = document.getElementById('textboxeight').value;
  localStorage.setItem('4pm', keyEight);
});

textboxnine.textContent = localStorage.getItem('5pm')
btnNine.addEventListener('click', function(e){
  e.preventDefault();
  var keyNine = document.getElementById('textboxnine').value;
  localStorage.setItem('5pm', keyNine);
});
