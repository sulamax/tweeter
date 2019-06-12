$(document).ready(function() {
  console.log(this);

  var input = "";

  $("textarea").on("keyup",function(e) {
    input += e.key;
    console.log("keyup", input);
  });

  $("#btn").on('click', function(e) {
    e.preventDefault();
    console.log("click", $(this).siblings(".name"));
  });

function updateCountdown() {
  var remaining = 140 - $('.message').val().length;
  $('.countdown').text(remaining);
}

$(document).ready(function($) {
  updateCountdown();
  $('.message').change(updateCountdown);
  $('.message').keyup(updateCountdown);
});

$("#mytextarea").keyup(function() {
var maxlength = 140;
if($("#mytextarea").val().length > maxlength) {
$("#mytextarea").css('color','red');
}
else{
$("#mytextarea").css('color','black');
}
});
});




