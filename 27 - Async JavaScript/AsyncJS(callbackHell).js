// Asynchronous Operations in JS

// Changing background color after a time delay

  // setTimeout(() => {
  //   document.body.style.backgroundColor = 'red';
  // }, 1000);

  // setTimeout(() => {
  //   document.body.style.backgroundColor = 'orange';
  // }, 2000);

  // setTimeout(() => {
  //   document.body.style.backgroundColor = 'yellow';
  // }, 3000);

    // Another way is to nest functions
  // setTimeout(() => {
  //   document.body.style.backgroundColor = 'red';
  //     setTimeout(() => {
  //       document.body.style.backgroundColor = 'orange';
  //         setTimeout(() => {
  //         document.body.style.backgroundColor = 'yellow';
  //         setTimeout(() => {
  //           document.body.style.backgroundColor = 'green';
  //           setTimeout(() => {
  //             document.body.style.backgroundColor = 'blue';
  //         }, 1000);
  //       }, 1000);
  //     }, 1000);
  //   }, 1000);
  // }, 1000);



    // Or create a function and pass in parameters
  // const delayedColorChange = (newColor, delay) => {
  //   setTimeout(() => {
  //     document.body.style.backgroundColor = newColor;
  //   }, delay);
  // };

    // To work with these functions you would have to change the delay for each, or to work with nested functions, pass in a callback
  // delayedColorChange('olive', 3000);
  // delayedColorChange('teal', 6000); // use a different delay for each

  // work with callbacks

  const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      doNext && doNext();
    }, delay);
  };

  delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
      delayedColorChange('yellow', 1000, () => {
        delayedColorChange('green', 1000, () => {
          delayedColorChange('blue', 1000, () => {
          });
        });
      });
    });
  });


// for asynchronous operations, frequently there are more than one callback depending on how the remote server responds, such as this:

  searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => { // this function will represnet a success at loading API data
      // if data saved to DB, do this:


    }, () => {
      // if data not saved to DB, do this:

    });
    },
        // the function will represent a failure to load API data
      () => {
      // if API is down, or request failed, do this:


  });


  // These nested callbacks are known as 'callback hell' Newer features of the language, namely Promises and Async functions, make this process much more clean.


