// JavaScript is Single-threaded  
  // JavaScript can only process one line of code at a time

 // Browsers come with Web APIs that handle setTimeout and server requests that take time to complete. 
 //JS hands off these tasks to the browser and moves along with executing JS commands. 
 //Then, the browser does the work and hands the information back to JS by pushing on to the stack as a callback.

 console.log('I print first!');
 setTimeout(() => {
   console.log('I print after 3 seconds'); // This prints last after 3 seconds
  } , 3000);
  console.log('I print second!');

  
