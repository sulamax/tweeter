$(document).ready(function() {
  console.log(this);

$("textarea").on("click",function(e) {
  console.log("click", e);
});

$("textarea").on("keyup",function(e) {
  console.log("keyup", e);
});

$("#btn").on('click', function() {
  console.log(this); //The this keyword is a reference to the button
});

function updateCountdown() {
  var remaining = 140 - jQuery('.message').val().length;
  jQuery('.counter').text(remaining);
}

jQuery(document).ready(function($) {
  updateCountdown();
  $('.message').change(updateCountdown);
  $('.message').keyup(updateCountdown);
});
});


