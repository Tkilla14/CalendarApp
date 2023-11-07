var textArea = document.querySelectorAll(".description");
var timeBlock = document.querySelector('#time-blocks');
var color = ""
var today = dayjs();
var displayToday = document.querySelector("#currentDay");

$(function () {
// Determining function for time of day 
  var time

  for (var i = 9; i < 18; i++) {
    if (i < 12) {
      time = i + "AM"
    } else if (i == 12) {
      time = i + "PM"
    } else {
      time = i - 12 + "PM"
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

  var textArea = JSON.parse(localStorage.getItem("hour-"+i)) || '';

    var row = `<div id="hour-${i}" class="row time-block ${color}">
    <div class="col-2 col-md-1 hour text-center py-3">${time}</div>
    <textarea class="col-8 col-md-10 description" rows="3">${textArea}</textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
    </div>
    `
    $(timeBlock).append(row);

  }
// Save button
  $(timeBlock).on("click", $('.btn'), function (event) {
    console.log($(this))
    var saveTextArea = $(event.target).siblings('textarea').val();
    var saveTextID = $(event.target).parent().attr('id')
    localStorage.setItem(saveTextID, JSON.stringify(saveTextArea));
  })

});
