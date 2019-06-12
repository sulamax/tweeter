/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


function renderTweets(tweets) {

  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
}

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

$(document).ready(function() {
  function createTweetElement (tweetData) {
    // console.log(tweetData);
    var $template = $(`
      <section class="tweet-container">
          <header>
            <img class="smile" src="https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png">
            <h1>Bill MrFields</h1>
            <p>@MrFields</p>
            </header>
            <article>
              <h4>Little tweet here</h4>
            </article>
            <footer>
              10 days ago
              <img class="image" src="https://img.icons8.com/windows/24/000000/like.png">
              <img class="image" src="https://img.icons8.com/metro/23/000000/process.png">
              <img class="image" src="https://img.icons8.com/metro/28/000000/remove-user-male.png">
              </main>
            </footer>
        </section>
    `)
    var $h1 = $template.find('h1');
    $h1.html(tweetData.user.name);

    var $p = $template.find('p');
    $p.html(tweetData.user.handle);

    var $h4 = $template.find('h4');
    $h4.html(tweetData.content.text);

    var $img = $template.find('img');
    $img.attr('src', tweetData.user.small);

    var $footer = $template.find('footer');
    $footer.html(tweetData.created_at);

    return $template
    console.log($template);
  }

var $tweet = createTweetElement(tweetData);
console.log($tweet);
$('.all-tweets').append($tweet);
createTweetElement(tweetData);
});
