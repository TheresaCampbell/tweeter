$(document).ready(function() {
  tweetIconHoverState();
});

const tweetIconHoverState = function () {

  $(".tweet").hover (

    function () {
      $(this).find('.tweetIcons').css('opacity', 1);
    },
    function () {
      $(this).find('.tweetIcons').css('opacity', 0);
    }
  )
};

