function submitTweetViaAjax() {

  $("form").on("submit", function (event) {
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $(this).children(".tweet-input").serialize()
    })
  })
}


$(document).ready(function() {
  submitTweetViaAjax();
});