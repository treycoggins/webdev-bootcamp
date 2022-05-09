// Returning functions

function makeMysteryFunc() {
  const rand = Math.floor(Math.random());
  if (rand > 0.5) {
    return function() {
      console.log('CONGRATS! I AM A GOOD FUNCTION!');
    };
   } else { 
      return function() {
        alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS');
      };
    }
  }


  // passing values as arguments
  function makeBetweenFunc(min, max) {
    return function(num) {
      return num >= min && num <= max;
    };
  }
  const isChild = makeBetweenFunc(0, 18);
  isChild(40); // false
  isChild(10); // true
