// querySelector & querySelectorAll

//querySelector()
  // a newer, all-in-one method to select elements
  // pass in the CSS selector

  // select the first instance of a given element
document.querySelector('img');
  //select an element by ID
document.querySelector('#id_name');
  // select the first instance of an element with a given class
document.querySelector('.class_name');
  // can chain on other selectors
document.querySelector('img:nth-of-type(3)');
document.querySelector('a[title="title_name"]');


// querySelectorAll()
  // returns a HTML collection of elements that match the given tag/class

  // selects all the images on a page
document.querySelectorAll('img');
  // can use CSS selector syntax to select i.e. tags within a tag
document.querySelectorAll('a p'); // all p elements within a elements
for (let link of links) {
  // use the href property on a JS variable to access the data in the object
  console.log(link.href);
}

