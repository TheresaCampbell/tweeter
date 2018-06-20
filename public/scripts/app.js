/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  createTweetElement(tweetData);
});

// let $tweet = $('<article>').addClass('tweet');

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


const createTweetElement = function (tweetObject) {

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
  $(".allTweetsContainer").prepend($tweet);
}

// $tweet = createTweetElement(tweetData);


