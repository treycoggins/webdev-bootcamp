const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function(e) {
  e.preventDefault();
    // selecting the individual inputs is repetitive
    // there is a better way (below)
// const usernameInput = document.querySelectorAll('input')[2];
// const tweetInput = document.querySelectorAll('input')[3];

// giving the input elements a name, you can access formName.elements.inputName
// e.g. tweetForm.elements.username.value
//      tweetForm.elements.tweet.value
const usernameInput = tweetForm.elements.username;
const tweetInput = tweetForm.elements.tweet;

addTweet(usernameInput.value, tweetInput.value);
usernameInput.value = '';
tweetInput.value = '';
  
  

// console.log(newTweet);
// console.log(usernameInput.value, tweetInput.value);
  
  // console.log('submitted');
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement('li');
  const bTag = document.createElement('b');
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(` - ${tweet}`);
  tweetsContainer.append(newTweet);
};




