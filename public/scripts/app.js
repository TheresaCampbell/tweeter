/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



function createTweetElement(tweetObject) {

  let $tweet = `
  <article class="tweet">
    <header>
      <img class ="userProfilePicture" src="${tweetObject.user.avatars.small}"/>
      <h3 class="username">${tweetObject.user.name}</h3>
      <h4 class="userHandle">${tweetObject.user.handle}</h4>
    </header>
    <div class="tweetBody">
      <p class="tweetTextBlock">${tweetObject.content.text}</p>
    </div>
    <footer>
      <h5 class="timeStamp">${tweetObject.created_at}</h5>
      <span class="tweetIcons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </span>
    </footer>
  </article>
  `
  return $tweet;
}


function renderTweets(tweetsArray) {

  let $tweets = $('.allTweetsContainer');

  tweetsArray.forEach(function(individualTweet) {
    var $newTweet = createTweetElement(individualTweet);
    $tweets.prepend($newTweet);
  })
}


function loadTweets() {

    $.ajax({
    method: 'GET',
    url: '/tweets',
    success: function (moreTweetsJson){
      renderTweets(moreTweetsJson);
      $(".tweet-input").val('');
      $(".counter").text(140);
    }
  })
};


function submitTweetViaAjax(data) {

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data
    }).done(function () {
        loadTweets();
  })
}



$(document).ready(function() {

  loadTweets();

  $("form").on("submit", function (event) {
    event.preventDefault();
    let $textInTweet = $(this).children(".tweet-input")
    if ($textInTweet.val().length > 140) {
      alert("Tweet is too long. Shorten to at least 140 characters.")
    } else if ($textInTweet.val().length === 0) {
      alert("Can't submit an empty tweet. Write something!")
    } else {
      let formData = $(this).children(".tweet-input").serialize();
      submitTweetViaAjax(formData);
    }
  })
});
