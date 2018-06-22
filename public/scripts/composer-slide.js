//When the 'Compose' button is clicked, the 'Compose Tweet' box toggles up or down.
function slideNewTweetOnClick() {

  $(".composeButton").click(function() {
    $(".newTweetContainer").slideToggle("medium", function() {
      $(".tweetInput").focus();
    });
  });
}

$(document).ready(function() {
  slideNewTweetOnClick();
});