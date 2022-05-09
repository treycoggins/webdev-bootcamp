// innerHTML, textContent, and innerText

  // innerText()
    // h1 becomes the text of the h1  
    // is sensitive to what is currently being displayed
const h1 = document.querySelector('h1').innerText;

  // textContent()
    // textContent displays hidden content included
const p = document.querySelector('p').textContent;
const allLinks = document.querySelector('a').innerText;
for(let link of allLinks) {
  link.innerText = 'I am a link!';  // changes all link text to the string
}
  
// innerHTML
  // parses HTML elements that are included in the passed string
const newH1text = document.querySelector('h1');
newH1text.innerHTML = '<strong>I am the new BOLD H1!</strong>';
  // can also use += to concactenate string to the current h1
const addedH1text = document.querySelector('h1');
addedH1text.innerHTML += '<strong>I am added to the H1!/strong>';


