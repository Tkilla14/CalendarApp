var btns = document.querySelectorAll(".saveBtn");
var textArea = document.querySelectorAll(".description");
var timeBlock = document.querySelectorAll = ('.container-lg');
var color = ""
today = dayjs();
var displayToday = document.querySelector("#currentDay");

const startDay = 9;

$(function () {
// Determining function for time of day 
  var time = i + startDay

  for (var i = 9; i < 18; i++) {
    if (time > 9) {
      time -= 17;
    }

    var now = `hour-${time}`;

    let afterNoon = "AM"
    if (i >= 12) {
      afterNoon = "PM"
    }
  }
  // Presenting the color for the time of day
  if (i < dayjs().hour()) {
    color = "past";
  } else if (i === dayjs().hour()) {
    color = "present";
  } else {
    color = "future";
  }
  // Display day on top of page
  $(displayToday).text(today.format("dddd, MMMM DD"));

  // Building actual calendar with parameters from above
  var textID = (time + afterNoon);
  var textArea = JSON.parse(localStorage.getItem(textID));

  if (time < 18) {
    var row = `<div id="hour-${now}" class="row time-block ${color}">
    <div class="col-2 col-md-1 hour text-center py-3">${time}${afterNoon}</div>
    <textarea class="col-8 col-md-10 description" rows="3">${textArea}</textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
    </div>
    `
    $(timeBlock).append(row);

  }
// Save button
  $(timeBlock).on("click", clickSave, function (event) {
    var saveTextArea = $(this).siblings('textarea').val();
    var saveTextID = $(this).siblings('.hour').text();
    localStorage.setItem(saveTextID, JSON.stringify(saveTextArea));
  })

});
