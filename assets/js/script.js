// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// var current = dayjs().hour();
var current = 20;
var isDark = true;

$('textarea').addClass('text-dark');

var button1 = $('#allHours').children().eq(0).children('button');
var button2 = $('#allHours').children().eq(1).children('button');
var button3 = $('#allHours').children().eq(2).children('button');
var button4 = $('#allHours').children().eq(3).children('button');
var button5 = $('#allHours').children().eq(4).children('button');
var button6 = $('#allHours').children().eq(5).children('button');
var button7 = $('#allHours').children().eq(6).children('button');
var button8 = $('#allHours').children().eq(7).children('button');
var button9 = $('#allHours').children().eq(8).children('button');

var text1 = $('#allHours').children().eq(0).children('textarea');
var text2 = $('#allHours').children().eq(1).children('textarea');
var text3 = $('#allHours').children().eq(2).children('textarea');
var text4 = $('#allHours').children().eq(3).children('textarea');
var text5 = $('#allHours').children().eq(4).children('textarea');
var text6 = $('#allHours').children().eq(5).children('textarea');
var text7 = $('#allHours').children().eq(6).children('textarea');
var text8 = $('#allHours').children().eq(7).children('textarea');
var text9 = $('#allHours').children().eq(8).children('textarea');

var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D"));

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('#clearData').on('click', function () {
    localStorage.clear();
    location.reload();
  });
   
  button1.on('click', function(event){
    event.preventDefault();
    var firstText = text1.val();
    $('#textSaved').text('Event added at 9AM')
    $('#textSaved').show();
    var timerInterval = setTimeout(function () {
      $('#textSaved').hide();
      clearInterval(timerInterval);
    }, 3000);
    
    localStorage.setItem('firstText',JSON.stringify(firstText));
  })
  button2.on('click', function(event){
    event.preventDefault();
    var secondText = text2.val();
    $('#textSaved').text('Event added at 10AM')
    $('#textSaved').show();
    var timerInterval = setTimeout(function () {
      $('#textSaved').hide();
      clearInterval(timerInterval);
    }, 3000);
    localStorage.setItem('secondText',JSON.stringify(secondText));
  })
  button3.on('click', function(event){
    event.preventDefault();
    var thirdText = text3.val();
    $('#textSaved').text('Event added at 11AM')
    $('#textSaved').show();
    var timerInterval = setTimeout(function () {
      $('#textSaved').hide();
      clearInterval(timerInterval);
    }, 3000);
    localStorage.setItem('thirdText',JSON.stringify(thirdText));
  })
  button4.on('click', function(event){
    event.preventDefault();
    var fourthText = text4.val();
    $('#textSaved').text('Event added at 12PM')
    $('#textSaved').show();
    var timerInterval = setTimeout(function () {
      $('#textSaved').hide();
      clearInterval(timerInterval);
    }, 3000);
    localStorage.setItem('fourthText',JSON.stringify(fourthText));
  })
  button5.on('click', function(event){
    event.preventDefault();
    var fifthText = text5.val();
    $('#textSaved').text('Event added at 1PM')
    $('#textSaved').show();
    var timerInterval = setTimeout(function () {
      $('#textSaved').hide();
      clearInterval(timerInterval);
    }, 3000);
    localStorage.setItem('fifthText',JSON.stringify(fifthText));
  })
  button6.on('click', function(event){
    event.preventDefault();
    var sixthText = text6.val();
    $('#textSaved').text('Event added at 2PM')
    $('#textSaved').show();
    var timerInterval = setTimeout(function () {
      $('#textSaved').hide();
      clearInterval(timerInterval);
    }, 3000);
    localStorage.setItem('sixthText',JSON.stringify(sixthText));
  })
  button7.on('click', function(event){
    event.preventDefault();
    var seventhText = text7.val();
    $('#textSaved').text('Event added at 3PM')
    $('#textSaved').show();
    var timerInterval = setTimeout(function () {
      $('#textSaved').hide();
      clearInterval(timerInterval);
    }, 3000);
    localStorage.setItem('seventhText',JSON.stringify(seventhText));
  })
  button8.on('click', function(event){
    event.preventDefault();
    var eighthText = text8.val();
    $('#textSaved').text('Event added at 4PM')
    $('#textSaved').show();
    var timerInterval = setTimeout(function () {
      $('#textSaved').hide();
      clearInterval(timerInterval);
    }, 3000);
    localStorage.setItem('eighthText',JSON.stringify(eighthText));
  })
  button9.on('click', function(event){
    event.preventDefault();
    var ninthText = text9.val();
    $('#textSaved').text('Event added at 5PM')
    $('#textSaved').show();
    var timerInterval = setTimeout(function () {
      $('#textSaved').hide();
      clearInterval(timerInterval);
    }, 3000);
    localStorage.setItem('ninthText',JSON.stringify(ninthText));
  })
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  if (current === 9) {
    $("#hour-9").removeClass("future").addClass("present");
  }
  if (current === 10) {
    $("#hour-9").removeClass("future").addClass("past");
    $("#hour-10").removeClass("future").addClass("present");
  }
  if (current === 11) {
    $("#hour-9").removeClass("future").addClass("past");
    $("#hour-10").removeClass("future").addClass("past");
    $("#hour-11").removeClass("future").addClass("present");
  }
  if (current === 12) {
    $("#hour-9").removeClass("future").addClass("past");
    $("#hour-10").removeClass("future").addClass("past");
    $("#hour-11").removeClass("future").addClass("past");
    $("#hour-12").removeClass("future").addClass("present");
  }
  if (current === 13) {
    $("#hour-9").removeClass("future").addClass("past");
    $("#hour-10").removeClass("future").addClass("past");
    $("#hour-11").removeClass("future").addClass("past");
    $("#hour-12").removeClass("future").addClass("past");
    $("#hour-13").removeClass("future").addClass("present");
  }
  if (current === 14) {
    $("#hour-9").removeClass("future").addClass("past");
    $("#hour-10").removeClass("future").addClass("past");
    $("#hour-11").removeClass("future").addClass("past");
    $("#hour-12").removeClass("future").addClass("past");
    $("#hour-13").removeClass("future").addClass("past");
    $("#hour-14").removeClass("future").addClass("present");
  }
  if (current === 15) {
    $("#hour-9").removeClass("future").addClass("past");
    $("#hour-10").removeClass("future").addClass("past");
    $("#hour-11").removeClass("future").addClass("past");
    $("#hour-12").removeClass("future").addClass("past");
    $("#hour-13").removeClass("future").addClass("past");
    $("#hour-14").removeClass("future").addClass("past");
    $("#hour-15").removeClass("future").addClass("present");
  }
  if (current === 16) {
    $("#hour-9").removeClass("future").addClass("past");
    $("#hour-10").removeClass("future").addClass("past");
    $("#hour-11").removeClass("future").addClass("past");
    $("#hour-12").removeClass("future").addClass("past");
    $("#hour-13").removeClass("future").addClass("past");
    $("#hour-14").removeClass("future").addClass("past");
    $("#hour-15").removeClass("future").addClass("past");
    $("#hour-16").removeClass("future").addClass("present");
  }
  if (current === 17) {
    $("#hour-9").removeClass("future").addClass("past");
    $("#hour-10").removeClass("future").addClass("past");
    $("#hour-11").removeClass("future").addClass("past");
    $("#hour-12").removeClass("future").addClass("past");
    $("#hour-13").removeClass("future").addClass("past");
    $("#hour-14").removeClass("future").addClass("past");
    $("#hour-15").removeClass("future").addClass("past");
    $("#hour-16").removeClass("future").addClass("past");
    $("#hour-17").removeClass("future").addClass("present");
  }
  if (current > 17){
    $('#allHours').children('div').children('textarea').removeClass("future").addClass("past");
  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var newText1 = JSON.parse(localStorage.getItem('firstText'));
  text1.text(newText1)
  var newText2 = JSON.parse(localStorage.getItem('secondText'));
  text2.text(newText2)
  var newText3 = JSON.parse(localStorage.getItem('thirdText'));
  text3.text(newText3)
  var newText4 = JSON.parse(localStorage.getItem('fourthText'));
  text4.text(newText4)
  var newText5 = JSON.parse(localStorage.getItem('fifthText'));
  text5.text(newText5)
  var newText6 = JSON.parse(localStorage.getItem('sixthText'));
  text6.text(newText6)
  var newText7 = JSON.parse(localStorage.getItem('seventhText'));
  text7.text(newText7)
  var newText8 = JSON.parse(localStorage.getItem('eighthText'));
  text8.text(newText8)
  var newText9 = JSON.parse(localStorage.getItem('ninthText'));
  text9.text(newText9)
  // TODO: Add code to display the current date in the header of the page.
});
