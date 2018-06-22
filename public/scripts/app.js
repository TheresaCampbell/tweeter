function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweetObject) {

  let $tweet = `
  <article class="tweet">
    <header>
      <img class ="userProfilePicture" src="${tweetObject.user.avatars.small}"/>
      <h3 class="username">${tweetObject.user.name}</h3>
      <h4 class="userHandle">${tweetObject.user.handle}</h4>
    </header>
    <div class="tweetBody">
      <p class="tweetTextBlock">${escape(tweetObject.content.text)}</p>
    </div>
    <footer>
      <h5 class="timeStamp">${new Date (tweetObject.created_at)}</h5>
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


function loadTweetsViaAjax() {

    $.ajax({
    method: 'GET',
    url: '/tweets',
    success: function (moreTweetsJson){
      renderTweets(moreTweetsJson);
      $(".tweetInput").val('');
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
        clearTweets();
        loadTweetsViaAjax();
  })
}


function clearTweets() {
  $('.allTweetsContainer').empty();
}

$(document).ready(function() {

  loadTweetsViaAjax();

  $("form").on("submit", function (event) {

    event.preventDefault();

    let $textInTweet = $(this).children(".tweetInput");

    if ($textInTweet.val().length > 140) {
      alert("Tweets can only be 140 characters long.")
    } else if ($textInTweet.val().length === 0) {
      alert("Can't submit an empty tweet. Write something!")
    } else {
      let formData = $(this).children(".tweetInput").serialize();
      submitTweetViaAjax(formData);
    }
  })
});
