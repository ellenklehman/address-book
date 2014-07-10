var returnDate = function(day) {
  var today = new Date();
  var todayNumber = today.getDay();
  var todayDate = today.getDate();
  var futureDistance = 0;
  var listOfDays = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
  var dayNumber = listOfDays.indexOf(day.toLowerCase())
  if (dayNumber - todayNumber <= 0) {
    futureDistance = 7 + (dayNumber - todayNumber);
  } else {
    futureDistance = dayNumber - todayNumber;
  };

  today.setDate(todayDate+futureDistance);
  return (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
};

var datesInMonth = function(day,month) {
  var listofMonths = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  var listOfDays = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
  var desiredMonthNumber = listofMonths.indexOf(month.toLowerCase());
  var desiredMonthNumberforMax = 1+listofMonths.indexOf(month.toLowerCase());
  var desiredDayNumber = listOfDays.indexOf(day.toLowerCase());
  var foundDates = [];
  var maxDaysinMonth = new Date(2014,desiredMonthNumberforMax,0).getDate();

  for (var i = 1; i <= maxDaysinMonth; i+=1) {
    var dayToCheck = new Date(2014,desiredMonthNumber,i);
    if (desiredDayNumber === dayToCheck.getDay()) {
      foundDates.push((desiredMonthNumber+1) + "/" + i + "/2014");
    };
  }

  console.log(foundDates);
  return foundDates;
}

$(document).ready(function() {
  $("form#weekday").submit(function(event) {
    var day = $("input#weekdayInput").val();
    $("#inputtedWeekday").text(day);
    $("#nextDate").text(returnDate(day));
    $("#result").show();
    event.preventDefault();
  });
  $("form#month-and-day").submit(function(event){
    var otherDay = $("input#user-weekday").val();
    var month = $("input#user-month").val();
    var occuredWeekdays = datesInMonth(otherDay, month);
    $("#desired-month").text(month);
    $("#desired-weekday").text(otherDay);
    occuredWeekdays.forEach(function(occuredWeekday){
      $("#list-of-dates").append("<li>" + occuredWeekday + "</li>")
    });
    $("#result2").show();
    event.preventDefault();
  });
});
