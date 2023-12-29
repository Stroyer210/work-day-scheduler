var current = dayjs().hour();

$("textarea").addClass("text-dark");

$(function () {
  $("#clearData").on("click", function () {
    localStorage.clear();
    location.reload();
  });

  function buttonText(idx, textLocalStorage, time) {
    var button = $("#allHours").children().eq(idx).children("button");
    var textLocal = $("#allHours").children().eq(idx).children("textarea");
    button.on("click", function (event) {
      event.preventDefault();
      $("#textSaved").text(`Event added at ${time}`);
      $("#textSaved").show();
      var timerInterval = setTimeout(function () {
        $("#textSaved").hide();
        clearInterval(timerInterval);
      }, 3000);
      localStorage.setItem(textLocalStorage, JSON.stringify(textLocal.val()));
    });
    textLocal.text(JSON.parse(localStorage.getItem(textLocalStorage)));
  }

  buttonText(0, "firstText", "9AM");
  buttonText(1, "secondText", "10AM");
  buttonText(2, "thirdText", "11AM");
  buttonText(3, "fourthText", "12PM");
  buttonText(4, "fifthText", "1PM");
  buttonText(5, "sixthText", "2PM");
  buttonText(6, "seventhText", "3PM");
  buttonText(7, "eighthText", "4PM");
  buttonText(8, "ninthText", "5PM");
 
  for (let i = 0; i < 25; i++) {
    if (current === i){
      $(`#hour-${i}`).removeClass("future").addClass("present");
      for(let j=i-1; j>0;j--){
        $(`#hour-${j}`).removeClass("future").addClass("past");
      }
    }
  }
  
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D"));
});
