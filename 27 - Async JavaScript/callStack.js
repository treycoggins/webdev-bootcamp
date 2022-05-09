// The Call Stack

// The mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions
// How JS 'knows' what function is currently being run and what functions are called from within that function, etc.

// a stack is a data structure in computer science
// it is a last in, first out (LIFO) data structure

const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

isRightTriangle(3, 4, 5);


// isRightTriangle is executed and added to the stack
// isRightTriangle calls square, adding it to the stack on top of isRightTriangle
// square calls multiply, adding it to the stack on top of square
// finally, multiply is called and added to the stack
// multiply finishes execution and returns, and is taken off the stack
// square returns and is taken off the stack
// isRightTriangle calls square again, adding it back to the stack and so forth...
// the process is completed three times before isRightTriangle returns