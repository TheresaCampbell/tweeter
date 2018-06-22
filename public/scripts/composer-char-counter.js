//When keys are pressed in the tweetInput box, the character counter decreases.
const tweetCharacterCounterInputEffect = function () {

  $(".tweetInput").on("keyup", function () {
    let counterValue = 140 - ($(this).val().length);
    let DOMCounter = $(this).siblings(".counter")

    DOMCounter.text(counterValue);
    if (counterValue < 0) {
      DOMCounter.addClass("exceededCharacterLimit");
    } else {
      DOMCounter.removeClass("exceededCharacterLimit");
    }
  })
};


$(document).ready(function() {
  tweetCharacterCounterInputEffect();
});
