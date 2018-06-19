$(document).ready(function() {
  console.log("Ready to ruuuuumble!");
  tweetInputEffect();
});



//When keys are pressed in the tweet-input box, the character counter decreases.
const tweetInputEffect = function () {

  $(".tweet-input").on("keyup", function () {
      var counterValue = 140 - ($(this).val().length);
      var DOMCounter = $(this).siblings(".counter")

      DOMCounter.text(counterValue);
      if (counterValue < 1) {
        DOMCounter.css('color', 'red');
      } else {
        DOMCounter.css('color', 'black');
      }
  })
};