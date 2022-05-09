const eventDelegationForm = document.querySelector('#eventDelegationForm');
const eventDelegationContainer = document.querySelector('#eventDelegationTweets');
eventDelegationForm.addEventListener('submit', function(e) {
  e.preventDefault();
   
  const usernameInput = eventDelegationForm.elements.username;
  const tweetInput = eventDelegationForm.elements.tweet;

  eventDelegationAddTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = '';
  tweetInput.value = '';
  });

const eventDelegationAddTweet = (username, tweet) => {
  const newTweet = document.createElement('li');
  const bTag = document.createElement('b');
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(` - ${tweet}`);
  eventDelegationContainer.append(newTweet);
};


// using e.target gets the element that was actually clicked
// nodeName property equals 'LI' returns a boolean, && is a short-hand way to write 'if that is true, remove the e.target' since the code on the right side of the && won't run unless the first expression is true.

// This is known as event delegation
eventDelegationContainer.addEventListener('click', function(e) {
  e.target.nodeName === 'LI' && e.target.remove();
});