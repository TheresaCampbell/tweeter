$(document).ready(function() {
  slideNewTweetOnClick();
});


function slideNewTweetOnClick() {
  $(".composeButton").click(function() {
    $(".newTweetContainer").slideToggle("medium", function() {
      $(".tweet-input").focus();
    });
  });
};
