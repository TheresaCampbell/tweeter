$(document).ready(function() {
  tweetCharacterCounterInputEffect();
});



//When keys are pressed in the tweet-input box, the character counter decreases.
const tweetCharacterCounterInputEffect = function () {

  $(".tweet-input").on("keyup", function () {
    let counterValue = 140 - ($(this).val().length);
    let DOMCounter = $(this).siblings(".counter")

    DOMCounter.text(counterValue);
    if (counterValue < 1) {
      DOMCounter.css('color', 'red');
    } else {
      DOMCounter.css('color', 'black');
    }
  })
};