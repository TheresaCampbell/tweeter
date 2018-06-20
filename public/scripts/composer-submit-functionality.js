// function submitTweetViaAjax(data) {

//     $.ajax({
//       method: 'POST',
//       url: '/tweets',
//       data: data
//     }).done(function {

//     })
// }


// $(document).ready(function() {

//   $("form").on("submit", function (event) {.
//     event.preventDefault();

//     let $textInTweet = $(this).children(".tweet-input")

//     if ($textInTweet.val().length > 140) {
//       alert("Tweet is too long. Shorten to at least 140 characters.")
//     } else if ($textInTweet.val().length === 0) {
//       alert("Can't submit an empty tweet. Write something!")
//     } else {
//       let formData = $(this).children(".tweet-input").serialize();
//       submitTweetViaAjax(formData);
//     }
//   })
// });

//REFACTOR LATER FROM APP.JS